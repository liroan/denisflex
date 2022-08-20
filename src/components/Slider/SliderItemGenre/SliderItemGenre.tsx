import React, {FC} from "react";
import styles from "./SliderItemGenre.module.scss";
import classnames from "classnames";
import {Link} from "react-router-dom";



interface ISliderItemGenre {
    genre: string;
    index: number;
}


const SliderItemGenre:FC<ISliderItemGenre> = React.memo(({ genre, index }) => {
    return (
        <Link to={`/catalog?genres=${index + 1}`}>
            <div className={classnames(styles.movieCard, styles.movieCard_genre)}>
                <div className={styles.movieCard__img}><img src={require(`../../../assets/img/genreSlider/${index + 1}.jpg`)} alt=""/></div>
                <div className={styles.movieCard__genre_mask}>{genre}</div>
            </div>
        </Link>
    )
})

export default SliderItemGenre;