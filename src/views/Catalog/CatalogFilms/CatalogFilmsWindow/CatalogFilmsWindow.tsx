import CatalogFilm from "../CatalogFilm/CatalogFilm";
import React, {FC} from "react";
import {IMoviePreview} from "../../../../types/types";
import withScreensaver from "../../../../hocs/withScreensaver";

interface CatalogFilmsWindowProps {
    items?: IMoviePreview[];
    editMovies: (movie: IMoviePreview) => void;
    movies: IMoviePreview[];
}

const CatalogFilmsWindow:FC<CatalogFilmsWindowProps> = ({ items, editMovies, movies }) => {
    return (
        <>
            {
                items?.map(filmData => (
                    <CatalogFilm filmData={filmData} key={filmData.kinopoiskId}
                                 isFavourite={movies.some(film => film.kinopoiskId === filmData.kinopoiskId)}
                                 editMovies={editMovies}
                    />
                ))
            }
        </>
    )
}

export default withScreensaver(CatalogFilmsWindow);