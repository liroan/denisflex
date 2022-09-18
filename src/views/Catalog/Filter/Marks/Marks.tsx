import styles from "./Marks.module.scss";
import React, {FC} from "react";
import {FiltersState, SortBy} from "../../../../store/filtersSlice";
import {MovieType} from "../../../../types";

interface MarksProps {
    filters: FiltersState;
    genresNames: string[];
}

export const MovieTypeDict: { [key in MovieType]: string; } = {
    "ALL": 'все',
    "FILM": 'фильмы',
    "TV_SHOW": 'тв-шоу',
    "TV_SERIES": 'сериалы'
}

const sortByDict: { [key in SortBy]: string; } = {
    "RATING": "по рейтингу",
    "NUM_VOTE": "по голосам",
    "YEAR": "по дате выхода"
}


const Marks: FC<MarksProps> = React.memo(({filters, genresNames}) => {
    return (
        <div className={styles.filter__info}>
            <div className={styles.filter__mark}>Тип произведения: {MovieTypeDict[filters.type]}</div>
            <div className={styles.filter__mark}>Рейтинг: {filters.ratingFrom} - {filters.ratingTo}</div>
            <div className={styles.filter__mark}>Года производства: {filters.yearFrom} - {filters.yearTo}</div>
            <div className={styles.filter__mark}>Жанр: {genresNames[filters.genres]}</div>
            <div className={styles.filter__mark}>Сортировка: {sortByDict[filters.order]}</div>
        </div>
    )
})

export default Marks;