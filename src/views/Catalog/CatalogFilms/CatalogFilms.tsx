import styles from "./CatalogFilms.module.scss";
import React, {FC} from "react";
import CatalogFilm from "./CatalogFilm/CatalogFilm";
import {IFilmSearchByFiltersResponse} from "../../../types/types";
import CatalogPreloader from "../CatalogPreloader/CatalogPreloader";
import CatalogPaginatorContainer from "../CatalogPaginatorContainer/CatalogPaginatorContainer";
import useGetMoviesLocalStorage from "../../../hooks/useGetMoviesLocalStorage";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {SerializedError} from "@reduxjs/toolkit";
import CatalogFilmsWindow from "./CatalogFilmsWindow/CatalogFilmsWindow";

interface CatalogFilmsProps {
    filmsResponse?: IFilmSearchByFiltersResponse;
    isFetching: boolean;
    error?: FetchBaseQueryError | SerializedError;
}


const CatalogFilms:FC<CatalogFilmsProps> = React.memo(({ filmsResponse,isFetching, error  }) => {
    const films = filmsResponse?.items;
    const [movies, editMovies] = useGetMoviesLocalStorage();
    return (
        <div className={styles.films}>
            <CatalogFilmsWindow items={films}
                                editMovies={editMovies}
                                movies={movies}
                                isLoading={isFetching}
                                error={error}
                                preloader={<CatalogPreloader />}
            />
            <div className={styles.films__paginator}>
                <CatalogPaginatorContainer totalPages={filmsResponse?.totalPages} />
            </div>
        </div>
    )
})

export default CatalogFilms;