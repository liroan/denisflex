import styles from "./Marks.module.scss";
import React, {FC} from "react";


const Marks:FC = () => {
    return (
        <div className={styles.filter__info}>
            <div className={styles.filter__mark}>Рейтинг: 1 - 10</div>
            <div className={styles.filter__mark}>Года производства: 1960 - 2022</div>
            <div className={styles.filter__mark}>Жанр: Все жанры</div>
            <div className={styles.filter__mark}>Год выхода: Сначала новые</div>
        </div>
    )
}

export default Marks;