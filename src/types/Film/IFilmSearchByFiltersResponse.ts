import {IMoviePreview} from "../Movie/IMoviePreview";

export interface IFilmSearchByFiltersResponse {
    total: number;
    totalPages: number;
    items: IMoviePreview[];
}