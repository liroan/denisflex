import {IMovieTop} from "../Movie/IMovieTop";

export interface IFilmTopResponse {
    pagesCount: number;
    films: IMovieTop[];
}