import styles from "./FilmsPopup.module.scss";
import {FC} from "react";
import FilmPopup from "./FilmPopup/FilmPopup";
import EmptyFilms from "./EmptyFilms/EmptyFilms";
import {IMoviePreview, MovieType} from "../../../../../types/types";
import {useGetFiltersMovieQuery} from "../../../../../services/services";
import {initialStateFilter} from "../../../../../store/filtersSlice";
import FilmsPopupPreloader from "../FilmsPopupPreloader/FilmsPopupPreloader";

interface FilmsPopupProps {
    type: MovieType;
    queryKeyword: string;
}

const FilmsPopup:FC<FilmsPopupProps> = ({ type, queryKeyword }) => {
    const { data: movies, isFetching, error, isLoading } = useGetFiltersMovieQuery({ ...initialStateFilter, type, keyword: queryKeyword })
    if (isFetching) return <FilmsPopupPreloader />
    if (!movies || movies.total === 0 || error) return <EmptyFilms>По вашему запросу ничего не найдено</EmptyFilms>
    return (
        <div className={styles.header__filmsContent}>
            <div className={styles.header__filmsContent_noEmpty}>
                { movies.items.map((movie, index) => <FilmPopup key={index} filmId={movie.kinopoiskId}
                                                  img={movie.posterUrlPreview}
                                                  name={movie.nameRu || movie.nameEn}
                                                  year={movie.year || 0}
                                                  minutes={0}
                />) }
            </div>
        </div>
    )
}

export default FilmsPopup;