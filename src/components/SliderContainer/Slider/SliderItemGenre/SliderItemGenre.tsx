import React, {FC} from "react";
import styles from "./SliderItemGenre.module.scss";
import classnames from "classnames";
import {useNavigate} from "react-router-dom";



interface ISliderItemGenre {
    genre: string;
    index: number;
}


const SliderItemGenre:FC<ISliderItemGenre> = React.memo(({ genre, index }) => {
    const navigate = useNavigate();
    const onClickGenre = () => {
        navigate(`/catalog?genres=${index + 1}`);
        document.body.scrollIntoView({block: "start", behavior: "smooth",});
    }
    return (
        <div className={classnames(styles.movieCard, styles.movieCard_genre)} onClick={onClickGenre}>
            <div className={styles.movieCard__img}><img src={require(`../../../../assets/img/genreSlider/${index + 1}.jpg`)} alt=""/></div>
            <div className={styles.movieCard__genre_mask}>{genre}</div>
        </div>
    )
})

export default SliderItemGenre;