import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {API_KEY, API_URL} from "../constants/constants";
import {
    IFilmTopResponse, IBudgetResponse, IDistributorsResponse,
    IFactsAndErrors,
    IFilmSearchByFiltersResponse,
    IFiltersResponse,
    IMovie, IPerson, IMoviesSimilar,
    IPersonStaff,
    MovieTopType
} from "../types";
import {FiltersState} from "../store/filtersSlice";
import removeUnwantedProperties from "../utils/removeUnwantedProperties";

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
        getCompilationMovies: builder.query<IFilmTopResponse, MovieTopType>({
            query: (type) => ({
                url: "v2.2/films/top",
                params: { type }
            }),
        }),
        getCountriesAndGenres: builder.query<IFiltersResponse, null>({
            query: () => `v2.2/films/filters`,
        }),
        getFiltersMovie: builder.query<IFilmSearchByFiltersResponse, FiltersState>({
            query: (filters) => ({
                url: "v2.2/films",
                params: { ...removeUnwantedProperties(filters) }
            })
        }),
        getMovieById: builder.query<IMovie, number>({
            query: (id) => `v2.2/films/${id}`,
        }),
        getFactsAndErrorsMovieById: builder.query<IFactsAndErrors, number>({
            query: (id) => `v2.2/films/${id}/facts`,
        }),
        getStaffMovieById: builder.query<IPersonStaff[], number>({
            query: (filmId) => ({
                url: "v1/staff",
                params: { filmId }
            }),
        }),
        getSimilarMovieById: builder.query<IMoviesSimilar, number>({
            query: (id) => `v2.2/films/${id}/similars`,
        }),
        getReviewsMovieById: builder.query<IMoviesSimilar, {id: number, page: number}>({
            query: ({id, page}) => ({
                url: `v2.2/films/${id}/reviews`,
                params: { page }
            }),
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


export const { useGetCompilationMoviesQuery,
    useGetPersonByIdQuery,
    useGetBoxOfficeMovieByIdQuery, useGetDistributorsMovieByIdQuery,
    useGetSimilarMovieByIdQuery, useGetMovieByIdQuery,
 useGetCountriesAndGenresQuery, useGetFiltersMovieQuery, useGetFactsAndErrorsMovieByIdQuery, useGetStaffMovieByIdQuery } = moviesApi;