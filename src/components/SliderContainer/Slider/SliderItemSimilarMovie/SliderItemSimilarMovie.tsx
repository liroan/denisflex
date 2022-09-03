import React, {FC} from "react";
import styles from "./SliderItemSimilarMovie.module.scss";
import {Link} from "react-router-dom";
import {ISimilarMovie} from "../../../../types/types";

interface SliderItemSimilarMovieProps {
    movie: ISimilarMovie;
}

const SliderItemSimilarMovie:FC<SliderItemSimilarMovieProps> = React.memo(({ movie: { filmId, posterUrl } }) => {

    return (
        <Link to={"/film/" + filmId}>
            <div className={styles.movieCardContainer}>
                <div className={styles.movieCard}>
                    <img src={posterUrl} alt=""/>
                </div>
            </div>
        </Link>
    )
})
export default SliderItemSimilarMovie;