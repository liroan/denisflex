import styles from "./FilmPopup.module.scss";
import React, {FC} from "react";
import {Link} from "react-router-dom";
import {IMoviePreview} from "../../../../../../types";
import {getRatingAndColor} from "../../../../../../utils";

interface FilmPopupProps {
    movie: IMoviePreview;
}

const FilmPopup:FC<FilmPopupProps> = React.memo(({ movie: { posterUrl, nameRu, nameEn,
    nameOriginal, year, kinopoiskId, ratingImdb, ratingKinopoisk } }) => {
    const [rating, color] = getRatingAndColor(ratingKinopoisk || ratingImdb)
    return (
        <Link to={`film/${kinopoiskId}`}>
            <div className={styles.header__film}>
                <div className={styles.header__filmInfo}>
                    <div className={styles.header__filmImg}>
                        <img src={posterUrl} alt=""/>
                    </div>
                    <div className={styles.header__filmContent}>
                        <p className={styles.header__filmTitle}>{nameRu || nameEn || nameOriginal}</p>
                        <p className={styles.header__filmTime}>{year}</p>
                    </div>
                </div>
                {
                    rating && color ?
                        <div className={styles.header__filmRating} style={{ color }}>{ rating }</div> :
                        <div className={styles.header__filmRating}><span> &#8210;</span></div>
                }
            </div>
        </Link>
    )
})

export default FilmPopup;