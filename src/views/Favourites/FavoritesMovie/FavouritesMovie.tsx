import {IMoviePreview} from "../../../types/types";
import {FC} from "react";
import styles from "./FavouritesMovie.module.scss";
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import RedButton from "../../../components/Buttons/RedButton/RedButton";
import OpacityButton from "../../../components/Buttons/OpacityButton/OpacityButton";
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
                <div className={styles.lol}>
                    <div className={styles.lol2}>
                        <RedButton startIcon={<LiveTvIcon/>}>
                            Перейти к просмотру
                        </RedButton>
                        <OpacityButton startIcon={<BookmarkRemoveIcon/>} onClick={removeMovie}>
                            Удалить из избранного
                        </OpacityButton>
                    </div>
                </div>
            </div>
            <h6 className={styles.movie__title}>
                {movie.nameRu || movie.nameEn || movie.nameOriginal}
            </h6>
        </div>
    )
}

export default FavouritesMovie;