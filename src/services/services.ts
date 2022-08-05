import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {IMovie} from "../types/types";
import {API_KEY, API_URL} from "../constants/constants";

export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (builder) => ({
        getPopularMovies: builder.query<IMovie[], number>({
            query: (typeNumber) => `/movie?search=${typeNumber}&field=typeNumber&sortField=rating.kp&sortType=-1&token=${API_KEY}`,
        }),
    }),
})


export const { useGetPopularMoviesQuery } = moviesApi;