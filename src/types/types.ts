import {store} from "../store/store";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

type TypeMovie = "movie" | "tv-series" | "cartoon" | "anime" | "animated-series" | "tv-show";
interface IExternalIdMovie {
    tmdb: number;
    imdb: string;
}
interface IRatingMovie {
    await: number;
    filmCritics: number;
    imdb: number;
    kp: number;
    russianFilmCritics: number;
}
interface IVotesMovie {
    kp: number;
    tmdb: number;
    imdb: number;
}
interface IImagesMovie {
    url: string;
    previewUrl: string;
}
interface IVideosMovie {
    trailers: IVideoMovie[];
    teasers: IVideoMovie[];
}
interface IMoneyMovie {
    value: number;
    currency: string;
}
interface IVideoMovie {
    url: string;
    name: string;
    site: string;
    size: number;
    type: string;
}
interface IFeesMovie {
    world: IMoneyMovie;
    russia: IMoneyMovie;
    usa: IMoneyMovie;
}
interface IDistributorsMovie {
    distributor: string;
    distributorRelease: string;
}
interface IPremiereMovie {
    country: string;
    world: string;
    russia: string;
    digital: string;
    bluray: string;
    dvd: string;
}
interface ICountImagesMovie {
    postersCount: number;
    backdropsCount: number;
    framesCount: number;
}
interface IProductionCompaniesMovie {
    name: string;
    url: string;
    previewUrl: string;
}
interface ISpokenLanguagesMovie {
    name: string;
    nameEn: string;
}
interface IGenreMovie {
    name: string;
}
interface IFactMovie {
    name: string;
}
interface IPersonMovie {
    id: number;
    name: string;
    enName: string;
    photo: string;
    enProfession: string;
    description: string;
}
interface ISeasonMovie {
    number: number;
    episodesCount: number;
}

export interface IResponseData extends IPagesData {
    docs: IPreviewMovie[]
}

interface IPagesData {
    total: number,
    limit: number,
    page: number,
    pages: number,
}

interface ISequelsMovie {
    alternativeName: string;
    enName: string;
    id: number;
    poster: IImagesMovie;
    type: string;
}

interface ITechnologyMovie {
    has3D: boolean;
    hasImax: boolean;
}

export interface IPreviewMovie {
    id: number;
    name: string;
    alternativeName: string;
    enName: string;
    names: {name: string}[];
    typeNumber: number;
    type: TypeMovie;
    description: string;
    slogan: string;
    year: number;
    movieLength: number;
    status: string;
    externalId: IExternalIdMovie;
    rating: IRatingMovie;
    votes: IVotesMovie;
    poster: IImagesMovie;
    backdrop: IImagesMovie;
    videos: IVideosMovie;
    budget: IMoneyMovie;
    fees: IFeesMovie;
    distributors: IDistributorsMovie;
    premiere: IPremiereMovie;
    images: ICountImagesMovie;
    productionCompanies: IProductionCompaniesMovie;
    spokenLanguages: ISpokenLanguagesMovie;
    genres: IGenreMovie[];
    facts: IFactMovie[];
    persons: IPersonMovie[];
    seasonsInfo?: ISeasonMovie[];
}

export interface IMovie extends IPreviewMovie {
    ageRating: number;
    countries: {name: string}[];
    createDate: Date;
    ratingMpaa: string;
    sequelsAndPrequels: ISequelsMovie[];
    lists: [];
    logo: {url: string}
    shortDescription: string;
    similarMovies: IPreviewMovie[];
    technology: ITechnologyMovie;
    ticketsOnSale: boolean;
    updateDates: Date[];
    updatedAt: Date;
}
