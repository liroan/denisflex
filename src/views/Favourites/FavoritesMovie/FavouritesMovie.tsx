import {IMoviePreview} from "../../../types";
import {FC} from "react";
import styles from "./FavouritesMovie.module.scss";
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import {RedButton, OpacityButton} from "../../../components";
import {Link} from "react-router-dom";
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
            <div className={styles.movie__poster}>
                <img src={movie.posterUrl} alt="" />
                <div className={styles.movie__blind}>
                    <div className={styles.movie__blindContent}>
                        <Link to={`/film/${movie.kinopoiskId}`}>
                            <RedButton startIcon={<LiveTvIcon/>}>
                                Перейти к просмотру
                            </RedButton>
                        </Link>
                        <OpacityButton startIcon={<BookmarkRemoveIcon/>} onClick={removeMovie}>
                            Удалить из избранного
                        </OpacityButton>
                    </div>
                </div>
            </div>
            <h6 className={styles.movie__title}>
                <span>{movie.nameRu || movie.nameEn || movie.nameOriginal}</span>
            </h6>
        </div>
    )
}

export default FavouritesMovie;