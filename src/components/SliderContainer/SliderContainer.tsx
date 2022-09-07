import styles from "./SliderContainer.module.scss";
import classNames from "classnames";
import Slider from "./Slider/Slider";
import React from "react";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {SerializedError} from "@reduxjs/toolkit";
import MoviesLoader from "../MoviesLoader/MoviesLoader";
import ScreensaverWrapper from "../ScreensaverWrapper/ScreensaverWrapper";

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

    const moviesLoader = isWideCard
        ? <MoviesLoader width={300} height={195} />
        : <MoviesLoader width={220} height={325} />

    return (
        <div className={styles.home__movies}>
            <div className={styles.home__movieChapterContainer}>
                <div className={classNames(styles.home__movieChapter, styles.movieChapter)}>
                    <div className={styles.movieChapter__title}><h3>{title}</h3></div>
                    <ScreensaverWrapper isLoading={isLoading} preloader={moviesLoader}
                                        error={error} itemsLength={items?.length}>
                        <Slider items={items!}
                                getSliderCard={getSliderCard}
                                isWideCard={isWideCard}
                        />
                    </ScreensaverWrapper>
                </div>
            </div>
        </div>
    )
}

export default SliderContainer;