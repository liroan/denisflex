import styles from "../Favourites.module.scss";
import FavouritesMovie from "../FavoritesMovie/FavouritesMovie";
import React, {FC} from "react";
import {IMoviePreview} from "../../../types";

interface FavouritesMoviesProps {
    items: IMoviePreview[];
    editMovies: (movie: IMoviePreview) => void;
}

const FavouritesMovies:FC<FavouritesMoviesProps> = ({ items, editMovies }) => {
    return (
        <div className={styles.favorites__films}>
            {
                items.map(movie => (
                    <div className={styles.favorites__movie} key={movie.kinopoiskId}>
                        <FavouritesMovie movie={movie} key={movie.kinopoiskId} editMovies={editMovies}/>
                    </div>
                ))
            }
        </div>
    )
}

export default FavouritesMovies;