import {AppDispatch, IMoviePreview, RootState} from "../types/types";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {useContext, useEffect, useState} from "react";
import {getDataWindow} from "../utils/utils";
import {EditMoviesContext} from "../App";


export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


export const useSizeWindow = () => {
    const [sizeWindow, setSizeWindow] = useState(getDataWindow());
    useEffect(() => {
        const resize = () => {
            setSizeWindow(getDataWindow())
        }
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    }, [])
    return sizeWindow;
}


export const useGetMoviesLocalStorage = (): [IMoviePreview[], (movie: IMoviePreview) => void] => {
    const moviesLocalStorage = useContext(EditMoviesContext)
    let movies: IMoviePreview[] = [];
    let editMovies: (movie: IMoviePreview) => void = (movie) => {};

    if (moviesLocalStorage) {
        movies = moviesLocalStorage.movies;
        editMovies = moviesLocalStorage.editMovies;
    }
    return [movies, editMovies];
}