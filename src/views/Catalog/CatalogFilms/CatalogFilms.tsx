import classNames from "classnames";
import styles from "./CatalogFilms.module.scss";
import React, {FC, useContext} from "react";
import CatalogFilm from "./CatalogFilm/CatalogFilm";
import {IFilmSearchByFiltersResponse, IMoviePreview} from "../../../types/types";
import Paginator from "../Paginator/Paginator";
import CatalogPreloader from "../CatalogPreloader/CatalogPreloader";
import {EditMoviesContext} from "../../../App";
import {useGetMoviesLocalStorage} from "../../../hooks/hooks";
import CatalogPaginatorContainer from "../CatalogPaginatorContainer/CatalogPaginatorContainer";

interface CatalogFilmsProps {
    filmsResponse?: IFilmSearchByFiltersResponse;
    isFetching: boolean;
}


const CatalogFilms:FC<CatalogFilmsProps> = ({ filmsResponse,isFetching  }) => {
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
            <div className={styles.films__paginator}><CatalogPaginatorContainer totalPages={filmsResponse?.totalPages} /></div>
        </div>
    )
}

export default CatalogFilms;