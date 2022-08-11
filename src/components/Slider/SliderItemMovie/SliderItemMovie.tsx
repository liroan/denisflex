import {FC} from "react";
import styles from "./SliderItemMovie.module.scss";
import classNames from "classnames";
interface IFilmCard {
    posterUrl: string;
    ratingKinopoisk: number | null;
    posterUrlPreview: string;
    year: number | null;
}


const SliderItemMovie:FC<IFilmCard> = ({posterUrl, posterUrlPreview, ratingKinopoisk, year}) => {
    return (
        <div className={styles.movieCardContainer}>
            <div className={styles.movieCard}>
                <img src={posterUrl} alt=""/>
                <div className={styles.movieCard__marks}>
                    <div className={classNames(styles.movieCard__mark, styles.movieCard__mark_gray)}><p>{ratingKinopoisk}</p></div>
                    <div className={classNames(styles.movieCard__mark, styles.movieCard__mark_red)}><p>{year} год</p></div>
                </div>
            </div>
        </div>
    )
}

export default SliderItemMovie;