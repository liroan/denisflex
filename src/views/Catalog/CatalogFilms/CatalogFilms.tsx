import classNames from "classnames";
import styles from "./CatalogFilms.module.scss";
import React, {FC} from "react";
import CatalogFilm from "./CatalogFilm/CatalogFilm";
import {IFilmSearchByFiltersResponse, IMoviePreview} from "../../../types/types";
import Paginator from "../Paginator/Paginator";
import CatalogPreloader from "../CatalogPreloader/CatalogPreloader";

interface CatalogFilmsProps {
    filmsResponse?: IFilmSearchByFiltersResponse;
    isFetching: boolean;
}


const CatalogFilms:FC<CatalogFilmsProps> = ({ filmsResponse,isFetching  }) => {
    const films = filmsResponse?.items;
    return (
        <div className={styles.films}>
            { (isFetching || !films) ? <CatalogPreloader /> :
                films.map(({posterUrl, nameRu, nameEn, nameOriginal, year, ratingKinopoisk, ratingImdb}) => (
                    <CatalogFilm posterUrl={posterUrl} nameRu={nameRu} nameEn={nameEn}
                                 nameOriginal={nameOriginal} year={year} ratingKinopoisk={ratingKinopoisk} ratingImdb={ratingImdb}/>
                ))
            }
            <div className={styles.films__paginator}><Paginator totalPages={filmsResponse?.totalPages} /></div>
        </div>
    )
}

export default CatalogFilms;