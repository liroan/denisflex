import React, {FC} from "react";
import styles from "./SliderItemMovie.module.scss";
import classNames from "classnames";
import {Link} from "react-router-dom";
import {IMoviePreview, IMovieTop, ISimilarMovie} from "../../../../types/types";

interface SliderItemMovieProps {
    movie: IMovieTop;
}

const SliderItemMovie:FC<SliderItemMovieProps> = React.memo(({ movie: {filmId, posterUrl, rating, year}}) => {
    return (
        <Link to={"/film/" + filmId}>
            <div className={styles.movieCardContainer}>
                <div className={styles.movieCard}>
                    <img src={posterUrl} alt=""/>
                    <div className={styles.movieCard__marks}>
                        <div className={classNames(styles.movieCard__mark, styles.movieCard__mark_green)}><p>{rating}</p></div>
                        <div className={classNames(styles.movieCard__mark, styles.movieCard__mark_red)}><p>{year} год</p></div>
                    </div>
                </div>
            </div>
        </Link>
    )
})

export default SliderItemMovie;