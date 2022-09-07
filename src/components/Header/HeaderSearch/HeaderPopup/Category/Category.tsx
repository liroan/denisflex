import styles from "./Category.module.scss";
import classNames from "classnames";
import React, {FC} from "react";
import {MovieType} from "../../../../../types";

interface CategoryProps {
    type: MovieType;
    setType: React.Dispatch<React.SetStateAction<MovieType>>;
}

const movieTypes: { id: number; label: string; value: MovieType }[] = [
    { id: 1, label: "Всё", value: "ALL" },
    { id: 2, label: "Фильмы", value: "FILM" },
    { id: 3, label: "Сериалы", value: "TV_SERIES" },
    { id: 4, label: "ТВ-Шоу", value: "TV_SHOW" }
]

const Category:FC<CategoryProps> = React.memo(({ type, setType }) => {
    return (
        <div className={styles.header__category}>
            <div className={styles.header__category_buttons}>
                {
                    movieTypes.map(({ label, value, id }) => (
                        <div onClick={() => setType(value)} key={id}
                            className={classNames(styles.header__category_button, { [styles.header__category_activeButton]: value === type })}>
                            { label }
                        </div>
                    ))
                }
            </div>
        </div>
    )
})

export default Category;