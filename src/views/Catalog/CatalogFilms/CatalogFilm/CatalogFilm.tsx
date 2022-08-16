import React, {FC, useContext, useState} from "react";
import styles from "./CatalogFilm.module.scss";
import {Button} from "@mui/material";
import OpacityButton from "../../../../components/Buttons/OpacityButton/OpacityButton";
import RedButton from "../../../../components/Buttons/RedButton/RedButton";
import {EditMoviesContext} from "../../../../App";
import {IMoviePreview} from "../../../../types/types";


const favouritesIcon = <svg stroke="#fff" fill="#fff" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>;
const checkMarkIcon = <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>

interface CatalogFilmProps {
    filmData: IMoviePreview;
    isFavourite: boolean;
    editMovies: (movie: IMoviePreview) => void;
}

const CatalogFilm:FC<CatalogFilmProps> = ({filmData, isFavourite, editMovies }) => {

    const { posterUrl, nameOriginal, nameRu, nameEn, year, ratingKinopoisk , ratingImdb } = filmData;

    const toggleIsFavourite = () => {
        editMovies(filmData)
    }

    return (
        <div className={styles.film}>
            <div className={styles.film__info}>
                <div className={styles.film__poster}>
                    <img src={posterUrl} alt=""/>
                </div>
                <div className={styles.film__text}>
                    <h3 className={styles.film__title}>{ nameRu || nameEn || nameOriginal }</h3>
                    <h4 className={styles.film__time}>{ year }</h4>
                    <p className={styles.film__descr}>
                        Описание недоступно. Нажмите на фильм и перейдите на него, чтобы увидеть подробную информацию о нем
                    </p>
                </div>
            </div>
            <div className={styles.film__additionalInfo}>
                <div className={styles.film__rating}>{ ratingKinopoisk || ratingImdb }</div>
                {
                   /* !isFavourite ? <OpacityButton onClick={() => setIsFavourite(true)} startIcon={favouritesIcon}>Буду смотреть</OpacityButton>
                        : <RedButton onClick={() => setIsFavourite(false)} startIcon={checkMarkIcon}>Буду смотреть</RedButton>*/
                    !isFavourite ? (
                        <div className={styles.film__addFavourites}>
                            <Button variant="contained" startIcon={favouritesIcon} onClick={toggleIsFavourite}>
                                <span className={styles.film__textButton}>Буду смотреть</span>
                            </Button>
                        </div>
                    ) : (
                        <div className={styles.film__deleteFavourites}>
                            <Button variant="contained" startIcon={checkMarkIcon} onClick={toggleIsFavourite}>
                                <span className={styles.film__textButton}>Буду смотреть</span>
                            </Button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default CatalogFilm;