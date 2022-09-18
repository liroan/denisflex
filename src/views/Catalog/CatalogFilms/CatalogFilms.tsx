import styles from "./CatalogFilms.module.scss";
import React, {FC} from "react";
import {IFilmSearchByFiltersResponse} from "../../../types";
import CatalogPreloader from "../CatalogPreloader/CatalogPreloader";
import CatalogPaginatorContainer from "../CatalogPaginatorContainer/CatalogPaginatorContainer";
import {useGetMoviesLocalStorage} from "../../../hooks";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {SerializedError} from "@reduxjs/toolkit";
import CatalogFilmsWindow from "./CatalogFilmsWindow/CatalogFilmsWindow";
import {ScreensaverWrapper} from '../../../components'

interface CatalogFilmsProps {
    filmsResponse?: IFilmSearchByFiltersResponse;
    isFetching: boolean;
    error?: FetchBaseQueryError | SerializedError;
}


const CatalogFilms: FC<CatalogFilmsProps> = React.memo(({filmsResponse, isFetching, error}) => {
    const films = filmsResponse?.items;
    const [movies, editMovies] = useGetMoviesLocalStorage();
    return (
        <div className={styles.films}>
            <ScreensaverWrapper isLoading={isFetching} itemsLength={films?.length}
                                error={error} preloader={<CatalogPreloader/>}>
                <CatalogFilmsWindow films={films}
                                    editMovies={editMovies}
                                    movies={movies}
                />
            </ScreensaverWrapper>
            <div className={styles.films__paginator}>
                <CatalogPaginatorContainer totalPages={filmsResponse?.totalPages}/>
            </div>
        </div>
    )
})

export default CatalogFilms;