import { IGenre } from "../Genre/IGenre";

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