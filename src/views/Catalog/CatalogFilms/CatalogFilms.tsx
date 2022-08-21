import styles from "./CatalogFilms.module.scss";
import React, {FC} from "react";
import CatalogFilm from "./CatalogFilm/CatalogFilm";
import {IFilmSearchByFiltersResponse} from "../../../types/types";
import CatalogPreloader from "../CatalogPreloader/CatalogPreloader";
import CatalogPaginatorContainer from "../CatalogPaginatorContainer/CatalogPaginatorContainer";
import useGetMoviesLocalStorage from "../../../hooks/useGetMoviesLocalStorage";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {SerializedError} from "@reduxjs/toolkit";
import useGetScreensaver from "../../../hooks/useGetScreensaver";
import MoviesLoader from "../../../components/MoviesLoader/MoviesLoader";
import Slider from "../../../components/Slider/Slider";

interface CatalogFilmsProps {
    filmsResponse?: IFilmSearchByFiltersResponse;
    isFetching: boolean;
    error?: FetchBaseQueryError | SerializedError;
}


const CatalogFilms:FC<CatalogFilmsProps> = React.memo(({ filmsResponse,isFetching, error  }) => {
    const films = filmsResponse?.items;
    const [movies, editMovies] = useGetMoviesLocalStorage();
    const screensaver = useGetScreensaver(isFetching, error, filmsResponse?.items)
     return (
        <div className={styles.films}>
            {

                screensaver ? screensaver : (
                    isFetching ? <CatalogPreloader />
                        : films?.map(filmData => (
                            <CatalogFilm filmData={filmData} key={filmData.kinopoiskId}
                                         isFavourite={movies.some(film => film.kinopoiskId === filmData.kinopoiskId)}
                                         editMovies={editMovies}
                            />
                        ))
                )
            }
            <div className={styles.films__paginator}>
                <CatalogPaginatorContainer totalPages={filmsResponse?.totalPages} />
            </div>
        </div>
    )
})

export default CatalogFilms;