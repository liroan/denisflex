import styles from "./HomeMovies.module.scss";
import classNames from "classnames";
import Slider from "../../../components/Slider/Slider";
import React, {FC, useRef} from "react";
import {IGenre, IMovieTop} from "../../../types/types";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {SerializedError} from "@reduxjs/toolkit";

interface HomeMoviesProps {
    movies: IMovieTop[] | IGenre[] | undefined;
    isLoading: boolean;
    error?: FetchBaseQueryError | SerializedError;
    title: string;
}

const HomeMovies:FC<HomeMoviesProps> = ({ movies, isLoading, error, title }) => {
    if (error || (!movies && !isLoading)) return <div>Не удалось загрузить фильмы</div>;
    if (isLoading || !movies) return <div>Загрузка</div>
    return (
        <div className={styles.home__movies}>
            <div className={styles.home__movieChapterContainer}>
                <div className={classNames(styles.home__movieChapter, styles.movieChapter)}>
                    <div className={styles.movieChapter__title}><h3>{title}</h3></div>
                    <Slider movies={movies} />
                </div>
            </div>
        </div>
    )
}

export default HomeMovies;