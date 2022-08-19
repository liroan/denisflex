import styles from "./Film.module.scss";
import Container from "../../components/Container/Container";
import RedButton from "../../components/Buttons/RedButton/RedButton";
import OpacityButton from "../../components/Buttons/OpacityButton/OpacityButton";
import React, {FC, useState} from "react";
import classNames from "classnames";
import {
    useGetBoxOfficeMovieByIdQuery,
    useGetCompilationMoviesQuery, useGetDistributorsMovieByIdQuery,
    useGetFactsAndErrorsMovieByIdQuery, useGetMovieByIdQuery, useGetSimilarMovieByIdQuery,
    useGetStaffMovieByIdQuery
} from "../../services/services";
import parse  from 'html-react-parser';
import HomeMovies from "../Home/HomeMovies/HomeMovies";
import Link, {useParams} from "react-router-dom";
import {IBudget, ICountry, IDistributors, IGenre, IMovie} from "../../types/types";
import {isArray} from "util";

const parseToNormalNumber = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")
}

const convertBudget = (type: string) => (budget: IBudget[]) => {
    const lol = budget.find(b => b.type === type);
    return !lol ? <span> &#8210;</span> : `${lol.symbol} ${parseToNormalNumber(lol.amount)}`
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

enum Category {
    DESCRIPTION,
    ACTORS,
    FACTS
}

const switcher = [
    { id: 1, title: "Описание", value: Category.DESCRIPTION },
    { id: 2, title: "Актёры", value: Category.ACTORS },
    { id: 3, title: "Факты", value: Category.FACTS },
]

interface TitleWithCountProps {
    title: string;
    count?: number;
}

const TitleWithCount:FC<TitleWithCountProps> = ({title, count}) => {
    return <span>{title} <span style={{ color: "#555", fontWeight: 400 }}>({count})</span></span>;
}


const lol = (value: any, converter?: (value: any) => string | React.ReactNode): string | React.ReactNode => {
    if (!value || value.length === 0) return <span> &#8210;</span>;
    return converter ? converter(value) : value;
}

const Film = () => {
    const { filmId } = useParams();
    const filmIdNumber = filmId && +filmId ? +filmId : 0;
    const [activeCategory, setActiveCategory] = useState(Category.DESCRIPTION);
    const { data: movieData, isLoading: movieDataLoading, error: movieDataError } = useGetMovieByIdQuery(filmIdNumber);
    const { data: similarFilms, isLoading: similarFilmsLoading, error: similarFilmsError } = useGetSimilarMovieByIdQuery(filmIdNumber);
    const { data: factsAndErrors, isLoading: factsAndErrorsLoading, error: factsAndErrorsError } = useGetFactsAndErrorsMovieByIdQuery(filmIdNumber);
    const { data: staff, isLoading: staffLoading, error: staffError } = useGetStaffMovieByIdQuery(filmIdNumber);


    const { data: budget } = useGetBoxOfficeMovieByIdQuery(filmIdNumber);
    const { data: distributors } = useGetDistributorsMovieByIdQuery(filmIdNumber);

    console.log(budget, distributors)
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
                    <div className={styles.film__back}>
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        <p>Назад</p>
                    </div>
                    <div className={styles.film__content}>
                        <div className={styles.film__poster}>
                            <img src={posterUrl} alt=""/>
                        </div>
                        <div className={styles.film__info}>
                            <h1 className={styles.film__title}>{ nameRu || nameEn || nameOriginal }, ({year})</h1>
                            <h5 className={styles.film__subtitle}>{shortDescription}</h5>
                            <div className={styles.film__buttons}>
                                <RedButton>Смотреть</RedButton>
                                <OpacityButton>Добавить в избранное</OpacityButton>
                            </div>
                            <div className={styles.film__about}>О фильме</div>
                            <div className={styles.film__dataLines}>
                                {
                                    lineTitles.map(({ title, value, converter }) => (
                                        <div className={styles.film__dataLine}>
                                            <div className={styles.film__lineTitle}>
                                                { title }
                                            </div>
                                            <div className={styles.film__lineInfo}>
                                                { value && lol(findProperty(value), converter) }
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                    </div>
                    <div className={styles.film__switch}>
                        {
                            switcher.map(({ id, title, value }) => (
                                <div className={classNames(styles.film__option, { [styles.film__activeOption]: value === activeCategory })} onClick={() => setActiveCategory(value)}>
                                    { title }
                                </div>
                            ))
                        }
                        <div className={styles.film__switchBorder}></div>
                    </div>
                    <div className={styles.film__switchContent}>
                        {
                            activeCategory === Category.DESCRIPTION && (
                                <p className={styles.film__description}>{description}</p>
                            )
                        }
                        {
                            activeCategory === Category.ACTORS && (
                                <HomeMovies movies={staff} isLoading={staffLoading}
                                            error={staffError} title={<TitleWithCount title="Состав" count={staff?.length}/>} />
                            )
                        }
                        {
                            activeCategory === Category.FACTS && (
                                <div className={styles.film__facts}>
                                    <h6 className={styles.film__factsTitle}>Знаете ли вы, что…</h6>
                                    {
                                        factsAndErrors?.items.map(fact => (
                                            <p className={styles.film__fact}>
                                                { parse(fact.text)  }
                                            </p>
                                        ))
                                    }
                                </div>
                            )
                        }
                    </div>
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