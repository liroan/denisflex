import React, {FC} from "react";
import styles from "./CatalogFilm.module.scss";
import {Button} from "@mui/material";

import {IMoviePreview} from "../../../../types/types";
import {Link, NavLink, useNavigate} from "react-router-dom";
import FavouritesButton from "../../../../components/Buttons/FavouritesButton/FavouritesButton";



interface CatalogFilmProps {
    filmData: IMoviePreview;
    isFavourite: boolean;
    editMovies: (movie: IMoviePreview) => void;
}

const CatalogFilm:FC<CatalogFilmProps> = React.memo(({filmData, isFavourite, editMovies }) => {

    const {posterUrl, nameOriginal, nameRu, nameEn, year, ratingKinopoisk, ratingImdb, kinopoiskId} = filmData;
    const navigate = useNavigate();
    return (
        <div className={styles.film} onClick={() => navigate(`/film/${kinopoiskId}`)}>
            <div className={styles.film__info}>
                <div className={styles.film__poster}>
                    <img src={posterUrl} alt=""/>
                </div>
                <div className={styles.film__text}>
                    <h3 className={styles.film__title}>{nameRu || nameEn || nameOriginal}</h3>
                    <h4 className={styles.film__time}>{year}</h4>
                    <p className={styles.film__descr}>
                        Описание недоступно. Нажмите на фильм и перейдите на него, чтобы увидеть подробную информацию о нем
                    </p>
                </div>
            </div>
            <div className={styles.film__additionalInfo}>
                <div className={styles.film__rating}>{ratingKinopoisk || ratingImdb}</div>
                <FavouritesButton isAdaptive isFavourite={isFavourite} toggler={(e) => {
                    e.stopPropagation();
                    editMovies(filmData)
                }} />
            </div>
        </div>
    )
})

export default CatalogFilm;