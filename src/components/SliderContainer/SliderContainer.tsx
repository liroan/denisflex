import styles from "./SliderContainer.module.scss";
import classNames from "classnames";
import Slider from "../Slider/Slider";
import React, {FC} from "react";
import {IGenre, IMovieTop, ISimilarMovie, IStaffPerson} from "../../types/types";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {SerializedError} from "@reduxjs/toolkit";
import MoviesLoader from "../MoviesLoader/MoviesLoader";

import useGetScreensaver from "../../hooks/useGetScreensaver";

interface HomeMoviesProps {
    movies: IMovieTop[] | IGenre[] | IStaffPerson[] | ISimilarMovie[] | undefined;
    isLoading: boolean;
    error?: FetchBaseQueryError | SerializedError;
    title: string | React.ReactNode;
    isWideCard?: boolean;
}

const SliderContainer:FC<HomeMoviesProps> = React.memo(({ movies, isLoading, error, title, isWideCard }) => {
    const screensaver = useGetScreensaver(isLoading, error, movies)
    return (
        <div className={styles.home__movies}>
            <div className={styles.home__movieChapterContainer}>
                <div className={classNames(styles.home__movieChapter, styles.movieChapter)}>
                    <div className={styles.movieChapter__title}><h3>{title}</h3></div>
                    {
                        screensaver ? screensaver : (
                            isLoading ? (isWideCard ? <MoviesLoader width={300} height={195} /> : <MoviesLoader width={220} height={325} />)
                            : <Slider movies={movies!} isWideCard={isWideCard} />
                        )
                    }
                </div>
            </div>
        </div>
    )
})

export default SliderContainer;