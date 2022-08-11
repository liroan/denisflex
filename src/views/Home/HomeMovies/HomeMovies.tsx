import styles from "./HomeMovies.module.scss";
import classNames from "classnames";
import Slider from "../../../components/Slider/Slider";
import React, {FC, useRef} from "react";
import {IGenre, IMovieTop} from "../../../types/types";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {SerializedError} from "@reduxjs/toolkit";
import MovieLoader from "../../../components/MoviesLoader/MovieLoader/MovieLoader";
import MoviesLoader from "../../../components/MoviesLoader/MoviesLoader";

interface HomeMoviesProps {
    movies: IMovieTop[] | IGenre[] | undefined;
    isLoading: boolean;
    error?: FetchBaseQueryError | SerializedError;
    title: string;
    isGenre?: boolean;
}

const HomeMovies:FC<HomeMoviesProps> = ({ movies, isLoading, error, title, isGenre }) => {
    if (error || (!movies && !isLoading)) return <div>Не удалось загрузить фильмы</div>;
    return (
        <div className={styles.home__movies}>
            <div className={styles.home__movieChapterContainer}>
                <div className={classNames(styles.home__movieChapter, styles.movieChapter)}>
                    <div className={styles.movieChapter__title}><h3>{title}</h3></div>
                    {
                        (isLoading || !movies)
                            ? (isGenre ? <MoviesLoader width={300} height={200} /> : <MoviesLoader width={220} height={330} />)
                            : <Slider movies={movies} />
                    }
                </div>
            </div>
        </div>
    )
}

export default HomeMovies;