import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {API_KEY, API_URL} from "../constants/constants";
import {
    FilmTopResponse, IBudgetResponse, IDistributorsResponse,
    IFactsAndErrors,
    IFilmSearchByFiltersResponse,
    IFiltersResponse,
    IMovie, IPerson, ISimilarMovies,
    IStaffPerson,
    MovieType, TopMovieType
} from "../types/types";
import {FiltersState} from "../store/filtersSlice";
import * as queryString from "query-string";
import {removeNullableProperty, removeUnwantedProperties} from "../utils/utils";

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
                return `v2.2/films?${queryString.stringify(removeUnwantedProperties(filters))}`
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
        getDistributorsMovieById: builder.query<IDistributorsResponse, number>({
            query: (id) => `v2.2/films/${id}/distributions`,
        }),
        getBoxOfficeMovieById: builder.query<IBudgetResponse, number>({
            query: (id) => `v2.2/films/${id}/box_office`,
        }),
        getPersonById: builder.query<IPerson, number>({
            query: (id) => `v1/staff/${id}`,
        }),
    }),
})


export const { useGetCompilationMoviesQuery, useGetReviewsMovieByIdQuery,
    useGetPersonByIdQuery,
    useGetBoxOfficeMovieByIdQuery, useGetDistributorsMovieByIdQuery,
    useGetSimilarMovieByIdQuery, useGetMovieByIdQuery,
 useGetCountriesAndGenresQuery, useGetFiltersMovieQuery, useGetFactsAndErrorsMovieByIdQuery, useGetStaffMovieByIdQuery } = moviesApi;