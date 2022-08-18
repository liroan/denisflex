import {MovieType} from "../types/types";


// export const API_KEY = "dcdbea88-8c9c-4f9c-9ef4-bc55c1597048";
export const API_KEY = "c9b8bd8d-0691-44ab-86ef-ec16b61c44f9";
export const API_URL = "https://kinopoiskapiunofficial.tech/api/";


export const MovieTypeFilter: MovieType[] = ["ALL", "FILM", "TV_SHOW", "TV_SERIES"];


export const MovieTypeDict: { [key in MovieType]: string; } = {
    "ALL": 'все',
    "FILM": 'фильмы',
    "TV_SHOW": 'тв-шоу',
    "TV_SERIES": 'сериалы'
}
