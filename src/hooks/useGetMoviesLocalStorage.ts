import {IMoviePreview} from "../types/types";
import {useContext} from "react";
import EditMoviesContext from "../context/EditMoviesContext";

const useGetMoviesLocalStorage = (): [IMoviePreview[], (movie: IMoviePreview) => void] => {
    const moviesLocalStorage = useContext(EditMoviesContext)
    let movies: IMoviePreview[] = [];
    let editMovies: (movie: IMoviePreview) => void = (movie) => {};

    if (moviesLocalStorage) {
        movies = moviesLocalStorage.movies;
        editMovies = moviesLocalStorage.editMovies;
    }
    return [movies, editMovies];
}

export default useGetMoviesLocalStorage;
