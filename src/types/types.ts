import {store} from "../store/store";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type MovieType = "FILM" | "TV_SHOW" | "TV_SERIES" | "ALL";
export type TopMovieType = "TOP_250_BEST_FILMS" | "TOP_100_POPULAR_FILMS" | "TOP_AWAIT_FILMS";

export interface FilmTopResponse {
    pagesCount: number;
    films: IMovieTop[];
}

export interface IGenre {
    id: number;
    genre: string;
}

export interface IMovieTop {
    filmId: number;
    nameRu: string | null;
    nameEn: string | null;
    year: string | null;
    filmLength: string | null;
    countries: { id: number, country: string }[];
    genres: IGenre[];
    rating:	string | null;
    ratingVoteCount: number | null;
    posterUrl: string;
    posterUrlPreview: string;
}

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


export interface IFilmSearchByFiltersResponse {
    total: number;
    totalPages: number;
    items: IMoviePreview[];
}

export interface IFiltersResponse {
    genres: IGenre[];
    countries: { id: number, country: string }[];
}

export interface IFactOrError {
    text: string;
    type: "BLOOPER" | "FACT"
    spoiler: boolean;
}

export interface IFactsAndErrors {
    total: number;
    items: IFactOrError[];
}


export interface IStaffPerson {
    staffId: number,
    nameRu: string,
    nameEn: string,
    description: string,
    posterUrl: string,
    professionText: string,
    professionKey: string
}

export interface ISimilarMovie {
    filmId: number;
    nameEn: string;
    nameOriginal: string;
    nameRu: string;
    posterUrl: string;
    posterUrlPreview: string;
    relationType: "SIMILAR"
}

export interface ISimilarMovies {
    items: ISimilarMovie[];
    total: number;
}

export interface ICountry {
    country: string;
    id: string;
}


export interface IDistributorsResponse {
    items: IDistributors[];
    total: number;
}

export interface IDistributors {
    companies: string[];
    country: ICountry;
    date: string;
    reRelease: boolean;
    subType: null;
    type: "PREMIERE" | "WORLD_PREMIER";
}

export interface IBudgetResponse {
    items: IBudget[];
    total: number;
}

export interface IBudget {
    amount: number;
    currencyCode: string;
    name: string;
    symbol: string;
    type: string;
}

