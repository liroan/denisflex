import styles from "./EmptyFilms.module.scss";
import {FC} from "react";


const EmptyFilms:FC = () => {
    return (
        <div className={styles.header__filmsContent_empty}>
            По вашему запросу ничего не найдено
        </div>
    )
}

export default EmptyFilms;