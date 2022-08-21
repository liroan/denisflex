import React, {FC} from "react";
import styles from "./CatalogFilm.module.scss";
import {Button} from "@mui/material";

import {IMoviePreview} from "../../../../types/types";
import {Link} from "react-router-dom";
import FavouritesButton from "../../../../components/Buttons/FavouritesButton/FavouritesButton";



interface CatalogFilmProps {
    filmData: IMoviePreview;
    isFavourite: boolean;
    editMovies: (movie: IMoviePreview) => void;
}

const CatalogFilm:FC<CatalogFilmProps> = React.memo(({filmData, isFavourite, editMovies }) => {

    const {posterUrl, nameOriginal, nameRu, nameEn, year, ratingKinopoisk, ratingImdb, kinopoiskId} = filmData;
    
    return (
        <div className={styles.film}>
            <div className={styles.film__info}>
                <div className={styles.film__poster}>
                    <Link to={`/film/${kinopoiskId}`}>
                        <img src={posterUrl} alt=""/>
                    </Link>
                </div>
                <div className={styles.film__text}>
                    <h3 className={styles.film__title}><Link to={`/film/${kinopoiskId}`}>{nameRu || nameEn || nameOriginal}</Link></h3>
                    <h4 className={styles.film__time}>{year}</h4>
                    <p className={styles.film__descr}>
                        <Link to={`/film/${kinopoiskId}`}>
                            Описание недоступно. Нажмите на фильм и перейдите на него, чтобы увидеть подробную информацию о нем
                        </Link>
                    </p>
                </div>
            </div>
            <div className={styles.film__additionalInfo}>
                <div className={styles.film__rating}>{ratingKinopoisk || ratingImdb}</div>
                <FavouritesButton isFavourite={isFavourite} toggler={() => editMovies(filmData)}/>
            </div>
        </div>
    )
})

export default CatalogFilm;