import classNames from "classnames";
import styles from "./CatalogFilms.module.scss";
import React, {FC} from "react";
import CatalogFilm from "./CatalogFilm/CatalogFilm";
import {IMoviePreview} from "../../../types/types";

interface CatalogFilmsProps {
    films: IMoviePreview[];
}


const CatalogFilms:FC<CatalogFilmsProps> = ({ films }) => {
    return (
        <div className={styles.films}>
            {
                films.map(({posterUrl, nameRu, nameEn, nameOriginal, year, ratingKinopoisk}) => (
                    <CatalogFilm posterUrl={posterUrl} nameRu={nameRu} nameEn={nameEn}
                                 nameOriginal={nameOriginal} year={year} ratingKinopoisk={ratingKinopoisk} />
                ))
            }
        </div>
    )
}

export default CatalogFilms;