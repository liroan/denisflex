import React, {FC, useCallback} from "react";
import styles from "./CatalogFilm.module.scss";

import {IMoviePreview} from "../../../../types";
import {useNavigate} from "react-router-dom";
import {FavouritesButton} from '../../../../components'
import {getRatingAndColor} from "../../../../utils";


interface CatalogFilmProps {
    filmData: IMoviePreview;
    isFavourite: boolean;
    editMovies: (movie: IMoviePreview) => void;
}

const CatalogFilm: FC<CatalogFilmProps> = React.memo(({filmData, isFavourite, editMovies}) => {

    const {posterUrl, nameOriginal, nameRu, nameEn, year, ratingKinopoisk, ratingImdb, kinopoiskId} = filmData;
    const navigate = useNavigate();
    const toggleIsFavourite = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        editMovies(filmData)
    }, [editMovies, filmData])

    const [rating, color] = getRatingAndColor(ratingKinopoisk || ratingImdb)
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
                        Описание недоступно. Нажмите на фильм и перейдите на него, чтобы увидеть подробную информацию о
                        нем
                    </p>
                </div>
            </div>
            <div className={styles.film__additionalInfo}>
                {
                    rating && color ?
                        <div className={styles.film__rating} style={{color}}>{rating}</div> :
                        <div className={styles.film__rating}><span> &#8210;</span></div>
                }
                <FavouritesButton isAdaptive isFavourite={isFavourite} toggler={toggleIsFavourite}/>
            </div>
        </div>
    )
})

export default CatalogFilm;