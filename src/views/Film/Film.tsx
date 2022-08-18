import styles from "./Film.module.scss";
import Container from "../../components/Container/Container";
import RedButton from "../../components/Buttons/RedButton/RedButton";
import OpacityButton from "../../components/Buttons/OpacityButton/OpacityButton";
import React, {FC, useState} from "react";
import classNames from "classnames";
import {
    useGetCompilationMoviesQuery,
    useGetFactsAndErrorsMovieByIdQuery, useGetSimilarMovieByIdQuery,
    useGetStaffMovieByIdQuery
} from "../../services/services";
import parse  from 'html-react-parser';
import HomeMovies from "../Home/HomeMovies/HomeMovies";
import Link from "react-router-dom";

const lineTitles = [
    { id: 1, title: "Страны" },
    { id: 2, title: "Жанр" },
    { id: 3, title: "Слоган" },
    { id: 4, title: "Возраст" },
    { id: 5, title: "Бюджет" },
    { id: 6, title: "Время" },
    { id: 7, title: "Сборы в США" },
    { id: 8, title: "Сборы в мире" },
    { id: 9, title: "Премьера в мире" },
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

/*const ParseAToLink = (text: string): string => {
    return text.replaceAll(`class="all"`, `class="all" onClick="lol"`)
}*/



const Film = () => {

    const [activeCategory, setActiveCategory] = useState(Category.DESCRIPTION);
    const { data: similarFilms, isLoading: similarFilmsLoading, error: similarFilmsError } = useGetSimilarMovieByIdQuery(915196);
    const { data: factsAndErrors, isLoading: factsAndErrorsLoading, error: factsAndErrorsError } = useGetFactsAndErrorsMovieByIdQuery(915196);
    const { data: staff, isLoading: staffLoading, error: staffError } = useGetStaffMovieByIdQuery(915196);



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
                            <img src="https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/92aa795e-6092-46ee-8867-054abfdb3d3c/x1000" alt=""/>
                        </div>
                        <div className={styles.film__info}>
                            <h1 className={styles.film__title}>В пасти безумия (1994)</h1>
                            <h5 className={styles.film__subtitle}>In the Mouth of Madness</h5>
                            <div className={styles.film__buttons}>
                                <RedButton>Смотреть</RedButton>
                                <OpacityButton>Добавить в избранное</OpacityButton>
                            </div>
                            <div className={styles.film__about}>О фильме</div>
                            <div className={styles.film__dataLines}>
                                {
                                    lineTitles.map(line => (
                                        <div className={styles.film__dataLine}>
                                            <div className={styles.film__lineTitle}>
                                                { line.title }
                                            </div>
                                            <div className={styles.film__lineInfo}>
                                                { line.title }
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
                                <p className={styles.film__description}>
                                    Произведения Саттера Кэйна побили все рекорды популярности - Стивену Кингу такое не снилось. Эффект, производимый на некоторых почитателей таланта Кэйна, - полная дезориентация и потеря памяти, массовые вспышки насилия, шизофреники, переполнившие клиники. Сам же автор романов ужасов, приносящих бешеный доход издательствам, исчез уже два месяца тому назад. Для его поисков издательство нанимает страхового агента Джона Трента, и поиски приводят его в город, описанный в книге, но отсутствующий на карте...
                                </p>
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