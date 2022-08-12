import styles from "./CatalogInfo.module.scss";
import React, {Dispatch, FC, SetStateAction} from "react";

interface CatalogInfo {
    setIsShowFilters: Dispatch<SetStateAction<boolean>>;
}


const CatalogInfo:FC<CatalogInfo> = ({ setIsShowFilters }) => {
    return (
        <div className={styles.catalog__meta}>
            <h2 className={styles.catalog__title}>Все фильмы</h2>
            <h3 className={styles.catalog__subtitle}>Подборка фильмов всего мира</h3>
            <div className={styles.catalog__openFilters}><button onClick={() => setIsShowFilters(true)}>Фильтры</button></div>
        </div>
    )
}

export default CatalogInfo;