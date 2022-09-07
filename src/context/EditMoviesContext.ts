import React from "react";
import {IMoviePreview} from "../types";


interface IEditMoviesContext {
    movies: IMoviePreview[],
    editMovies: (movie: IMoviePreview) => void;
}

export const EditMoviesContext = React.createContext<IEditMoviesContext | null>(null);
