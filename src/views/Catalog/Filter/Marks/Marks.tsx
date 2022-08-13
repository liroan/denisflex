import styles from "./Marks.module.scss";
import React, {FC} from "react";
import {FiltersState, SortBy} from "../../../../store/filtersSlice";

interface MarksProps {
    filters: FiltersState;
    genresNames: string[];
}

type ISortByDict = {
    [key in SortBy]: string;
};

const sortByDict: ISortByDict = {
    "RATING": "по рейтингу",
    "NUM_VOTE": "по голосам",
    "YEAR": "по дате выхода"
}


const Marks:FC<MarksProps> = ({ filters, genresNames }) => {
    return (
        <div className={styles.filter__info}>
            <div className={styles.filter__mark}>Рейтинг: {filters.ratingFrom} - {filters.ratingTo}</div>
            <div className={styles.filter__mark}>Года производства: {filters.yearFrom} -  {filters.yearTo}</div>
            <div className={styles.filter__mark}>Жанр: {genresNames[filters.genres]}</div>
            <div className={styles.filter__mark}>Сортировка: { sortByDict[filters.order] }</div>
        </div>
    )
}

export default Marks;