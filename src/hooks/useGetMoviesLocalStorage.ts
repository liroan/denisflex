import {IMoviePreview} from "../types";
import {useContext, useMemo} from "react";
import {EditMoviesContext} from "../context";

export const useGetMoviesLocalStorage = (): [IMoviePreview[], (movie: IMoviePreview) => void] => {
    const moviesLocalStorage = useContext(EditMoviesContext)
    let movies: IMoviePreview[] = [];
    let editMovies: (movie: IMoviePreview) => void = (movie) => {};

    if (moviesLocalStorage) {
        movies = moviesLocalStorage.movies;
        editMovies = moviesLocalStorage.editMovies;
    }
    return useMemo(() => ([movies, editMovies]), [movies, editMovies]);
}
