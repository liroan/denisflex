import classNames from "classnames";
import styles from "./CatalogFilms.module.scss";
import React from "react";
import CatalogFilm from "./CatalogFilm/CatalogFilm";


const CatalogFilms = () => {
    return (
        <div className={styles.films}>
            <CatalogFilm />
            <CatalogFilm />
            <CatalogFilm />
            <CatalogFilm />
        </div>
    )
}

export default CatalogFilms;