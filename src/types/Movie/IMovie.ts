import {IMoviePreview} from "./IMoviePreview";

export interface IMovie extends IMoviePreview {
    completed: boolean
    coverUrl: string | null;
    description: string | null;
    editorAnnotation: null | string;
    endYear: null | number;
    filmLength: number | null;
    has3D: boolean;
    hasImax: boolean;
    isTicketsAvailable: boolean;
    lastSync: string;
    logoUrl: null | string;
    productionStatus: null | string;
    ratingAgeLimits: string | null;
    ratingAwait: null | number;
    ratingAwaitCount: null | number;
    ratingFilmCritics: number | null;
    ratingFilmCriticsVoteCount: number | null;
    ratingGoodReview: null | number;
    ratingGoodReviewVoteCount: null | number;
    ratingImdbVoteCount: number | null;
    ratingKinopoiskVoteCount: number | null;
    ratingMpaa: string | null;
    ratingRfCritics: number | null;
    ratingRfCriticsVoteCount: number | null;
    reviewsCount: number;
    serial: boolean;
    shortDescription: string | null;
    shortFilm: boolean;
    slogan: string | null;
    startYear: null | number;
    webUrl: string;
}