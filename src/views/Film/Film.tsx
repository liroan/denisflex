import styles from "./Film.module.scss";
import Container from "../../components/Container/Container";
import React, {FC, useState} from "react";
import {
    useGetBoxOfficeMovieByIdQuery, useGetDistributorsMovieByIdQuery,
    useGetFactsAndErrorsMovieByIdQuery, useGetMovieByIdQuery, useGetSimilarMovieByIdQuery,
    useGetStaffMovieByIdQuery
} from "../../services/services";
import HomeMovies from "../Home/HomeMovies/HomeMovies";
import {useParams} from "react-router-dom";
import {IBudget, ICountry, IDistributors, IGenre, IMovie} from "../../types/types";
import DetailedContent from "../../components/DetailedContent/DetailedContent";
import FilmSwitcher from "../../components/Switcher/FilmSwitcher";
import FilmSwitcherContent from "./FilmSwitcherContent/FilmSwitcherContent";
import {parseToDischargeNumber, TitleWithCount} from "../../utils/utils";



const convertBudget = (type: string) => (budget: IBudget[]) => {
    const lol = budget.find(b => b.type === type);
    return !lol ? <span> &#8210;</span> : `${lol.symbol} ${parseToDischargeNumber(lol.amount)}`
}

const convertDate = (distributors: IDistributors[]) => {
    const lol = distributors.find(d => d.type === "WORLD_PREMIER");
    return !lol ? <span> &#8210;</span> : `${new Date(lol.date).toLocaleString('ru-RU', {year: 'numeric', month: 'long', day: "numeric"})}`
}

const lineTitles:{ id: number, title: string, value: keyof IMovie | "budget" | "distributors", converter?: ((value: any) => string | React.ReactNode)}[] = [
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

const Film = () => {
    const { filmId } = useParams();
    const filmIdNumber = filmId && +filmId ? +filmId : 0;

    const [activeCategory, setActiveCategory] = useState(FilmCategory.DESCRIPTION);
    const { data: movieData, isLoading: movieDataLoading, error: movieDataError } = useGetMovieByIdQuery(filmIdNumber);
    const { data: similarFilms, isLoading: similarFilmsLoading, error: similarFilmsError } = useGetSimilarMovieByIdQuery(filmIdNumber);
    const { data: factsAndErrors, isLoading: factsAndErrorsLoading, error: factsAndErrorsError } = useGetFactsAndErrorsMovieByIdQuery(filmIdNumber);
    const { data: staff, isLoading: staffLoading, error: staffError } = useGetStaffMovieByIdQuery(filmIdNumber);
    const { data: budget } = useGetBoxOfficeMovieByIdQuery(filmIdNumber);
    const { data: distributors } = useGetDistributorsMovieByIdQuery(filmIdNumber);

    if (!movieData) return <div>Загрузка...</div>

    const findProperty = (key: keyof IMovie | "budget" | "distributors"): any => {
        if (key === "budget") return budget?.items;
        if (key === "distributors") return distributors?.items;
        return movieData[key];
    }

    const { nameRu, nameEn, nameOriginal, posterUrl, year, shortDescription, description} = movieData;
    return (
        <div className={styles.film}>
            <Container>
                <Container>
                    <DetailedContent poster={posterUrl} title={nameRu || nameEn || nameOriginal} isFilm
                                     subtitle={shortDescription} year={year} findProperty={findProperty} lineTitles={lineTitles} />

                    <FilmSwitcher  activeCategory={activeCategory} switcher={switcher} setActiveCategory={setActiveCategory} />

                    <FilmSwitcherContent activeCategory={activeCategory} description={description} factsAndErrors={factsAndErrors}>
                        <HomeMovies movies={staff} isLoading={staffLoading}
                                    error={staffError} title={<TitleWithCount title="Состав" count={staff?.length}/>} />
                    </FilmSwitcherContent>

                    <div className={styles.film__similar}>
                        <HomeMovies movies={similarFilms?.items} isLoading={similarFilmsLoading}
                                    error={similarFilmsError} title={<TitleWithCount title="Похожее кино" count={similarFilms?.total}/>} />
                    </div>
                </Container>
            </Container>
        </div>
    )
}

export default Film;