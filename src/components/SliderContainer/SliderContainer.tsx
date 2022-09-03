import styles from "./SliderContainer.module.scss";
import classNames from "classnames";
import Slider from "./Slider/Slider";
import React, {FC} from "react";
import {IGenre, IMovieTop, ISimilarMovie, IStaffPerson} from "../../types/types";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {SerializedError} from "@reduxjs/toolkit";
import MoviesLoader from "../MoviesLoader/MoviesLoader";

import useGetScreensaver from "../../hooks/useGetScreensaver";

interface HomeMoviesProps<T> {
    items: T[] | undefined;
    getSliderCard: (item: T, index: number) => React.ReactNode;
    isLoading: boolean;
    error?: FetchBaseQueryError | SerializedError;
    title: string | React.ReactNode;
    isWideCard?: boolean;
}

function SliderContainer<T>(props: HomeMoviesProps<T>) {
    const { items, getSliderCard, isLoading, error, title, isWideCard } = props;

    const screensaver = useGetScreensaver(isLoading, error, items)

    const moviesLoader = isWideCard
        ? <MoviesLoader width={300} height={195} />
        : <MoviesLoader width={220} height={325} />

    const content =  isLoading ? moviesLoader : <Slider items={items!}
                                                        getSliderCard={getSliderCard}
                                                        isWideCard={isWideCard} />

    return (
        <div className={styles.home__movies}>
            <div className={styles.home__movieChapterContainer}>
                <div className={classNames(styles.home__movieChapter, styles.movieChapter)}>
                    <div className={styles.movieChapter__title}><h3>{title}</h3></div>
                    {
                        screensaver ? screensaver : content
                    }
                </div>
            </div>
        </div>
    )
}

export default SliderContainer;