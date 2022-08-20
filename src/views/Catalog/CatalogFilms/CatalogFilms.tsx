import styles from "./CatalogFilms.module.scss";
import React, {FC} from "react";
import CatalogFilm from "./CatalogFilm/CatalogFilm";
import {IFilmSearchByFiltersResponse} from "../../../types/types";
import CatalogPreloader from "../CatalogPreloader/CatalogPreloader";
import CatalogPaginatorContainer from "../CatalogPaginatorContainer/CatalogPaginatorContainer";
import useGetMoviesLocalStorage from "../../../hooks/useGetMoviesLocalStorage";

interface CatalogFilmsProps {
    filmsResponse?: IFilmSearchByFiltersResponse;
    isFetching: boolean;
}


const CatalogFilms:FC<CatalogFilmsProps> = React.memo(({ filmsResponse,isFetching  }) => {
    const films = filmsResponse?.items;
    const [movies, editMovies] = useGetMoviesLocalStorage();
     return (
        <div className={styles.films}>
            { (isFetching || !films) ? <CatalogPreloader /> :
                films.map(filmData => (
                    <CatalogFilm filmData={filmData}
                                 isFavourite={movies.some(film => film.kinopoiskId === filmData.kinopoiskId)}
                                 editMovies={editMovies}
                    />
                ))
            }
            <div className={styles.films__paginator}>
                <CatalogPaginatorContainer totalPages={filmsResponse?.totalPages} />
            </div>
        </div>
    )
})

export default CatalogFilms;