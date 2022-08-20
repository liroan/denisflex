import React, {FC} from "react";
import styles from "./SliderItemMovie.module.scss";
import classNames from "classnames";
import {Link} from "react-router-dom";
interface IFilmCard {
    filmId: number;
    posterUrl: string;
    rating?: string | null;
    year?: string | null;
}


const SliderItemMovie:FC<IFilmCard> = React.memo(({filmId, posterUrl, rating, year}) => {
    return (
        <Link to={"/film/" + filmId}>
            <div className={styles.movieCardContainer}>
                <div className={styles.movieCard}>
                    <img src={posterUrl} alt=""/>
                    <div className={styles.movieCard__marks}>
                        { rating && <div className={classNames(styles.movieCard__mark, styles.movieCard__mark_gray)}><p>{rating}</p></div> }
                        { year && <div className={classNames(styles.movieCard__mark, styles.movieCard__mark_red)}><p>{year} год</p></div> }
                    </div>
                </div>
            </div>
        </Link>
    )
})

export default SliderItemMovie;