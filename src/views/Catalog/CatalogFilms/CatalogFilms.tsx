import classNames from "classnames";
import styles from "./CatalogFilms.scss";
import {Button} from "@mui/material";
import React from "react";
import CatalogFilm from "./CatalogFilm/CatalogFilm";


const CatalogFilms = () => {
    return (
        <div className={classNames(styles.catalog__films, styles.films)}>
            <CatalogFilm />
            <CatalogFilm />
            <CatalogFilm />
            <CatalogFilm />
        </div>
    )
}

export default CatalogFilms;