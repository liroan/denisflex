import styles from "./Film.module.scss";
import {Container, DetailedContent, Switcher, Back, SliderItemSimilarMovie, SliderContainer} from "../../components";
import React, {FC, useCallback, useState} from "react";
import { useGetSimilarMovieByIdQuery } from "../../services/services";
import { IBudget, ICountry, IDistributors, IGenre, IMovie, IMovieSimilar} from "../../types";
import FilmSwitcherContent from "./FilmSwitcherContent/FilmSwitcherContent";
import {parseToDischargeNumber, getTitleWithCount} from "../../utils";
import {useGetMoviesLocalStorage} from "../../hooks";
import FilmReviewsBlock from "./FilmReviewsBlock/FilmReviewsBlock";



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
    const { data: similarFilms, isFetching: similarFilmsLoading, error: similarFilmsError } = useGetSimilarMovieByIdQuery(filmId);
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

    const { nameRu, nameEn, nameOriginal, posterUrl, year, shortDescription, description, kinopoiskId} = movieData;

    return (
        <div className={styles.film}>
            <Container>
                <Container>
                    <div className={styles.film__back}><Back /></div>
                    <DetailedContent poster={posterUrl}
                                     title={nameRu || nameEn || nameOriginal}
                                     isFilm
                                     subtitle={shortDescription}
                                     year={year}
                                     findProperty={findProperty}
                                     lineTitles={lineTitles}
                                     isFavourite={movies.findIndex(movie => movie.kinopoiskId === movieData.kinopoiskId) !== -1}
                                     toggler={toggler}
                                     kinopoiskId={kinopoiskId}
                    />

                    <Switcher activeCategory={activeCategory} switcher={switcher} setActiveCategory={setActiveCategory} />

                    <FilmSwitcherContent activeCategory={activeCategory} description={description} filmId={filmId} />

                    <div className={styles.film__similar}>
                        <SliderContainer items={similarFilms?.items}
                                         getSliderCard={(item: IMovieSimilar) => <SliderItemSimilarMovie movie={item} key={item.filmId} />}
                                         isLoading={similarFilmsLoading}
                                         error={similarFilmsError} title={getTitleWithCount("Похожее кино", similarFilms?.total) }
                        />
                    </div>

                    <div className={styles.film__reviews}>
                        <FilmReviewsBlock />
                    </div>
                </Container>
            </Container>
        </div>
    )
})

export default Film;