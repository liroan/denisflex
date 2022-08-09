import styles from "./FilmPopup.module.scss";
import {FC} from "react";


const FilmPopup:FC<any> = ({ img, name, year, minutes }) => {
    return (
        <div className={styles.header__film}>
            <div className={styles.header__filmInfo}>
                <div className={styles.header__filmImg}>
                    <img src={img} alt=""/>
                </div>
                <div className={styles.header__filmContent}>
                    <p className={styles.header__filmTitle}>{name}</p>
                    <p className={styles.header__filmTime}>{year}, {minutes} мин</p>
                </div>
            </div>
            <div className={styles.header__filmRating}>
                6.7
            </div>
        </div>
    )
}

export default FilmPopup;