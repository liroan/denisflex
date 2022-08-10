import {FC} from "react";
import styles from "./SliderItemMovie.module.scss";
import classNames from "classnames";
interface IFilmCard {
    img: string,
    rating?: string | number,
    price?: number,
    card?: any
}


const SliderItemMovie:FC<IFilmCard> = ({img, rating, price, card}) => {
    return (
        <div className={styles.movieCard} ref={card}>
            <img src={img} alt=""/>
            <div className={styles.movieCard__marks}>
                <div className={classNames(styles.movieCard__mark, styles.movieCard__mark_gray)}><p>{rating}</p></div>
                <div className={classNames(styles.movieCard__mark, styles.movieCard__mark_red)}><p>{price} Р</p></div>
            </div>
        </div>
    )
}

export default SliderItemMovie;