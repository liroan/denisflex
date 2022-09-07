import React, {FC} from "react";
import {EditMoviesContext} from "../../context";
import {IMoviePreview} from "../../types";

interface MoviesProviderProps {
    children: React.ReactNode;
    state:  {movies: IMoviePreview[], editMovies: (movie: IMoviePreview) => void}
}

const MoviesProvider:FC<MoviesProviderProps> = ({
                                                    children,
                                                    state
}) => {
    return (
        <EditMoviesContext.Provider value={state}>
            { children }
        </EditMoviesContext.Provider>
    )
}


export default MoviesProvider;