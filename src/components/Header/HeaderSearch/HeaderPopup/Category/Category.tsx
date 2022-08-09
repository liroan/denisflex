import styles from "./Category.module.scss";
import classNames from "classnames";
import {FC} from "react";


const Category:FC = () => {
    return (
        <div className={styles.header__category}>
            <div className={styles.header__category_buttons}>
                <div className={classNames(styles.header__category_button, styles.header__category_activeButton)}>
                    Фильмы
                </div>
                <div className={styles.header__category_button}>
                    Сериалы
                </div>
                <div className={styles.header__category_button}>
                    Мультики
                </div>
            </div>
        </div>
    )
}

export default Category;