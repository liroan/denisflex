import {IGenre} from "../Genre/IGenre";

export interface IFiltersResponse {
    genres: IGenre[];
    countries: { id: number, country: string }[];
}