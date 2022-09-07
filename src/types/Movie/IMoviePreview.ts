import {MovieType} from "./MovieType";
import {IGenre} from "../Genre/IGenre";

export interface IMoviePreview {
    countries: {country: string}[];
    genres: IGenre[];
    imdbId: string | null;
    kinopoiskId: number;
    nameEn: null | string;
    nameOriginal: string | null;
    nameRu: string | null;
    posterUrl: string;
    posterUrlPreview: string;
    ratingImdb: number | null;
    ratingKinopoisk: number | null;
    type: MovieType;
    year: number | null;
}