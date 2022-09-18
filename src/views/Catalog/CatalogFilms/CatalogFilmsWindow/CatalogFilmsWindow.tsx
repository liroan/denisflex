import CatalogFilm from "../CatalogFilm/CatalogFilm";
import React, {FC} from "react";
import {IMoviePreview} from "../../../../types";

interface CatalogFilmsWindowProps {
    films?: IMoviePreview[];
    editMovies: (movie: IMoviePreview) => void;
    movies: IMoviePreview[];
}

const CatalogFilmsWindow: FC<CatalogFilmsWindowProps> = ({films, editMovies, movies}) => {
    return (
        <>
            {
                films?.map(filmData => (
                    <CatalogFilm filmData={filmData} key={filmData.kinopoiskId}
                                 isFavourite={movies.some(film => film.kinopoiskId === filmData.kinopoiskId)}
                                 editMovies={editMovies}
                    />
                ))
            }
        </>
    )
}

export default CatalogFilmsWindow;