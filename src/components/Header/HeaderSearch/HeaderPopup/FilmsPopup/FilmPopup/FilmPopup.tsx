import styles from "./FilmPopup.module.scss";
import {FC} from "react";
import {Link} from "react-router-dom";


const FilmPopup:FC<any> = ({ img, name, year, minutes, filmId }) => {
    return (
        <Link to={`film/${filmId}`}>
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
        </Link>
    )
}

export default FilmPopup;