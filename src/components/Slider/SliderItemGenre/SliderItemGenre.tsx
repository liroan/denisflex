import {FC} from "react";
import styles from "./SliderItemGenre.module.scss";
import classnames from "classnames";
interface ISliderItemGenre {
    img: string,
    title?: string,
    card: any
    rating?: string | number,
    price?: number,
}


const SliderItemGenre:FC<ISliderItemGenre> = ({img, title, card}) => {
    return (
        <div className={classnames(styles.movieCard, styles.movieCard_genre)} ref={card}>
            <img src={img} alt=""/>
            <div className={styles.movieCard__genre_mask}>{title}</div>
        </div>
    )
}

export default SliderItemGenre;