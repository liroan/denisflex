import styles from "./FilmsPopup.module.scss";
import React, {FC} from "react";
import FilmPopup from "./FilmPopup/FilmPopup";
import EmptyFilms from "./EmptyFilms/EmptyFilms";
import {MovieType} from "../../../../../types/types";
import {useGetFiltersMovieQuery} from "../../../../../services/services";
import {initialStateFilter} from "../../../../../store/filtersSlice";
import FilmsPopupPreloader from "./FilmsPopupPreloader/FilmsPopupPreloader";

interface FilmsPopupProps {
    type: MovieType;
    queryKeyword: string;
}

const FilmsPopup:FC<FilmsPopupProps> = React.memo(({ type, queryKeyword }) => {
    const { data: movies, isFetching, error } = useGetFiltersMovieQuery({ ...initialStateFilter, type, keyword: queryKeyword })
    if (isFetching) return <FilmsPopupPreloader />
    if (!movies || movies.total === 0 || error) return <EmptyFilms>По вашему запросу ничего не найдено</EmptyFilms>
    return (
        <div className={styles.header__filmsContent}>
            <div className={styles.header__filmsContent_noEmpty}>
                { movies.items.map((movie, index) => <FilmPopup key={index} movie={movie} />) }
            </div>
        </div>
    )
})

export default FilmsPopup;