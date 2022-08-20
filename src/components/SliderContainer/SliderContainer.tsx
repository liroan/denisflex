import styles from "./SliderContainer.module.scss";
import classNames from "classnames";
import Slider from "../Slider/Slider";
import React, {FC} from "react";
import {IGenre, IMovieTop, ISimilarMovie, IStaffPerson} from "../../types/types";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {SerializedError} from "@reduxjs/toolkit";
import MoviesLoader from "../MoviesLoader/MoviesLoader";

interface HomeMoviesProps {
    movies: IMovieTop[] | IGenre[] | IStaffPerson[] | ISimilarMovie[] | undefined;
    isLoading: boolean;
    error?: FetchBaseQueryError | SerializedError;
    title: string | React.ReactNode;
    isWideCard?: boolean;
}

const SliderContainer:FC<HomeMoviesProps> = React.memo(({ movies, isLoading, error, title, isWideCard }) => {
    if (error || ((!movies || movies.length === 0) && !isLoading)) return <div>Не удалось загрузить фильмы</div>;
    return (
        <div className={styles.home__movies}>
            <div className={styles.home__movieChapterContainer}>
                <div className={classNames(styles.home__movieChapter, styles.movieChapter)}>
                    <div className={styles.movieChapter__title}><h3>{title}</h3></div>
                    {
                        (isLoading || !movies)
                            ? (isWideCard ? <MoviesLoader width={300} height={200} /> : <MoviesLoader width={220} height={330} />)
                            : <Slider movies={movies} isWideCard={isWideCard} />
                    }
                </div>
            </div>
        </div>
    )
})

export default SliderContainer;