import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {API_KEY, API_URL} from "../constants/constants";
import {IFilmSearchByFiltersResponse, IFiltersResponse, MovieType} from "../types/types";

export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
        prepareHeaders: (headers) => {
            headers.set('X-API-KEY', API_KEY)
            headers.set('Content-Type', 'application/json')
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getPopularMovies: builder.query<IFilmSearchByFiltersResponse, MovieType>({
            query: (typeMovie) => `/films?order=RATING&type=${typeMovie}`,
        }),
        getCountriesAndGenres: builder.query<IFiltersResponse, undefined>({
            query: () => `/films/filters`,
        }),
    }),
})


export const { useGetPopularMoviesQuery } = moviesApi;