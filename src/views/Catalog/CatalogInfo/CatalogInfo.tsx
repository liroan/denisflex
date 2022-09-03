import styles from "./CatalogInfo.module.scss";
import React, {Dispatch, FC, SetStateAction, useCallback} from "react";
import OpacityButton from "../../../components/Buttons/OpacityButton/OpacityButton";
import {Link} from "react-router-dom";


interface CatalogInfo {
    setIsShowFilters: Dispatch<SetStateAction<boolean>>;
    keyword: string;
}

const icon = <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>


const CatalogInfo:FC<CatalogInfo> = React.memo(({ setIsShowFilters, keyword }) => {
    const openFilters = useCallback(() => setIsShowFilters(true), [])

    return (
        <div className={styles.catalog__meta}>
            <h2 className={styles.catalog__title}>
                {keyword ? `Результаты поиска по запросу: ${keyword}` : "Все фильмы"}
            </h2>
            <h3 className={styles.catalog__subtitle}>
                { keyword ? (
                    <span>Ничего не нашли? <Link to="/catalog">Список всех фильмов</Link></span>
                ) : "Подборка фильмов всего мира" }
            </h3>
            <div className={styles.catalog__openFilters}>
                <OpacityButton onClick={openFilters} type="button" startIcon={icon}>
                    Фильтры
                </OpacityButton>
            </div>

        </div>
    )
})

export default CatalogInfo;