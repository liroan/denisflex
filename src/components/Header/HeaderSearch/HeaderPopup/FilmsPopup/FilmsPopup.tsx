import styles from "../HeaderPopup.module.scss";
import {FC} from "react";
import FilmPopup from "./FilmPopup/FilmPopup";
import EmptyFilms from "./EmptyFilms/EmptyFilms";
import {IMoviePreview} from "../../../../../types/types";

interface FilmsPopupProps {
    movies: any;
}

const FilmsPopup:FC<FilmsPopupProps> = ({ movies }) => {
    if (!movies || movies.length === 0) return <EmptyFilms />
    return (
        <div className={styles.header__filmsContent}>
            <div className={styles.header__filmsContent_noEmpty}>
                { movies.map((movie: any, index: number) => <FilmPopup key={index}
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