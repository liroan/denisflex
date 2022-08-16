import {IMoviePreview} from "../../../types/types";
import {FC} from "react";
import styles from "./FavouritesMovie.module.scss";

interface FavoritesMovieProps {
    movie: IMoviePreview;
    editMovies: (movie: IMoviePreview) => void;
}

const FavouritesMovie:FC<FavoritesMovieProps> = ({ movie, editMovies }) => {

    const removeMovie = () => {
        editMovies(movie)
    }

    return (
        <div className={styles.movie}>
            <div className={styles.movie__poster}><img src={movie.posterUrl} alt="" /></div>
            <h6 className={styles.movie__title}>{movie.nameRu || movie.nameEn || movie.nameOriginal}</h6>
            <button onClick={removeMovie}>Убрать</button>
        </div>
    )
}

export default FavouritesMovie;