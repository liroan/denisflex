import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {API_KEY, API_URL} from "../constants/constants";
import {
    FilmTopResponse,
    IFactsAndErrors,
    IFilmSearchByFiltersResponse,
    IFiltersResponse,
    IMovie, ISimilarMovies,
    IStaffPerson,
    MovieType, TopMovieType
} from "../types/types";
import {FiltersState} from "../store/filtersSlice";
import * as queryString from "query-string";
import {removeNullableProperty} from "../utils/utils";

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
        getCompilationMovies: builder.query<FilmTopResponse, TopMovieType>({
            query: (type) => `v2.2/films/top?type=${type}`,
        }),
        getCountriesAndGenres: builder.query<IFiltersResponse, null>({
            query: () => `v2.2/films/filters`,
        }),
        getFiltersMovie: builder.query<IFilmSearchByFiltersResponse, FiltersState>({
            query: (filters) => {
                return `v2.2/films?${queryString.stringify(removeNullableProperty(filters))}`
            }
        }),
        getMovieById: builder.query<IMovie, number>({
            query: (id) => `v2.2/films/${id}`,
        }),
        getFactsAndErrorsMovieById: builder.query<IFactsAndErrors, number>({
            query: (id) => `v2.2/films/${id}/facts`,
        }),
        getStaffMovieById: builder.query<IStaffPerson[], number>({
            query: (filmId) => `v1/staff?filmId=${filmId}`,
        }),
        getSimilarMovieById: builder.query<ISimilarMovies, number>({
            query: (id) => `v2.2/films/${id}/similars`,
        }),
        getReviewsMovieById: builder.query<ISimilarMovies, {id: number, page: number}>({
            query: ({id, page}) => `v2.2/films/${id}/reviews?page=${page}`,
        }),
    }),
})


export const { useGetCompilationMoviesQuery, useGetReviewsMovieByIdQuery,
 useGetCountriesAndGenresQuery, useGetFiltersMovieQuery } = moviesApi;