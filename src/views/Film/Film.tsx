import styles from "./Film.module.scss";
import Container from "../../components/Container/Container";
import React, {FC, useCallback, useState} from "react";
import {useGetFactsAndErrorsMovieByIdQuery, useGetSimilarMovieByIdQuery,
    useGetStaffMovieByIdQuery
} from "../../services/services";
import SliderContainer from "../../components/SliderContainer/SliderContainer";
import {IBudget, ICountry, IDistributors, IGenre, IMovie} from "../../types/types";
import DetailedContent from "../../components/DetailedContent/DetailedContent";
import FilmSwitcher from "../../components/Switcher/FilmSwitcher";
import FilmSwitcherContent from "./FilmSwitcherContent/FilmSwitcherContent";
import parseToDischargeNumber from "../../utils/parseToDischargeNumber";
import getTitleWithCount from "../../utils/getTitleWithCount";
import useGetMoviesLocalStorage from "../../hooks/useGetMoviesLocalStorage";



const convertBudget = (type: string) => (budget: IBudget[]) => {
    const obj = budget.find(b => b.type === type);
    return !obj ? <span> &#8210;</span> : `${obj.symbol} ${parseToDischargeNumber(obj.amount)}`
}

const convertDate = (distributors: IDistributors[]) => {
    const obj = distributors.find(d => d.type === "WORLD_PREMIER");
    return !obj ? <span> &#8210;</span> : `${new Date(obj.date).toLocaleString('ru-RU', {year: 'numeric', month: 'long', day: "numeric"})}`
}

type ILineContent = {
    id: number;
    title: string;
    value: keyof IMovie | "budget" | "distributors";
    converter?: (value: any) => string | React.ReactNode;
}



const lineTitles:ILineContent[] = [
    { id: 1, title: "Страны", value: "countries", converter: (countries: ICountry[]) => countries.map(c => c.country).join(', ') },
    { id: 2, title: "Жанр", value: "genres", converter: (genres: IGenre[]) => genres.map(g => g.genre).join(', ') },
    { id: 3, title: "Слоган", value: "slogan", },
    { id: 4, title: "Возраст", value: "ratingAgeLimits", converter: (age: string) => age && `${age.slice(3)}+` },
    { id: 5, title: "Бюджет", value: "budget", converter: convertBudget("BUDGET")},
    { id: 6, title: "Время", value: "filmLength", converter: (time: string) => time && `${time} мин` },
    { id: 7, title: "Сборы в США", value: "budget", converter: convertBudget("USA") },
    { id: 8, title: "Сборы в мире", value: "budget", converter: convertBudget("WORLD") },
    { id: 9, title: "Премьера в мире", value: "distributors", converter: convertDate },
]

export enum FilmCategory {
    DESCRIPTION,
    ACTORS,
    FACTS
}

const switcher = [
    { id: 1, title: "Описание", value: FilmCategory.DESCRIPTION },
    { id: 2, title: "Актёры", value: FilmCategory.ACTORS },
    { id: 3, title: "Факты", value: FilmCategory.FACTS },
]

interface FilmProps {
    movieData: IMovie;
    budget?: IBudget[];
    distributors?: IDistributors[];
    filmId: number;
}

const Film:FC<FilmProps> = React.memo(({ movieData, budget, distributors , filmId}) => {

    const [activeCategory, setActiveCategory] = useState(FilmCategory.DESCRIPTION);
    const { data: similarFilms, isLoading: similarFilmsLoading, error: similarFilmsError } = useGetSimilarMovieByIdQuery(filmId);
    const { data: factsAndErrors } = useGetFactsAndErrorsMovieByIdQuery(filmId);
    const { data: staff, isLoading: staffLoading, error: staffError } = useGetStaffMovieByIdQuery(filmId);
    const [movies, editMovies] = useGetMoviesLocalStorage();

    const findProperty = useCallback((key: keyof IMovie | "budget" | "distributors")
        : typeof movieData[keyof IMovie] |  IDistributors[] | IBudget[] | undefined => {
        if (key === "budget") return budget;
        if (key === "distributors") return distributors;
        return movieData[key];
    }, [movieData, budget, distributors])

    const toggler = useCallback(() => {
        editMovies(movieData)
    }, [editMovies, movieData])

    const { nameRu, nameEn, nameOriginal, posterUrl, year, shortDescription, description} = movieData;
    return (
        <div className={styles.film}>
            <Container>
                <Container>
                    <DetailedContent poster={posterUrl}
                                     title={nameRu || nameEn || nameOriginal}
                                     isFilm
                                     subtitle={shortDescription}
                                     year={year}
                                     findProperty={findProperty}
                                     lineTitles={lineTitles}
                                     isFavourite={movies.findIndex(movie => movie.kinopoiskId === movieData.kinopoiskId) !== -1}
                                     toggler={toggler}
                    />

                    <FilmSwitcher  activeCategory={activeCategory} switcher={switcher} setActiveCategory={setActiveCategory} />

                    <FilmSwitcherContent activeCategory={activeCategory} description={description} factsAndErrors={factsAndErrors}>
                        <SliderContainer movies={staff} isLoading={staffLoading}
                                         error={staffError} title={getTitleWithCount("Состав", staff?.length) } />
                    </FilmSwitcherContent>

                    <div className={styles.film__similar}>
                        <SliderContainer movies={similarFilms?.items} isLoading={similarFilmsLoading}
                                         error={similarFilmsError} title={getTitleWithCount("Похожее кино", similarFilms?.total) } />
                    </div>
                </Container>
            </Container>
        </div>
    )
})

export default Film;