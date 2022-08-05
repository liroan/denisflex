import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {IResponseData} from "../types/types";
import {API_KEY, API_URL} from "../constants/constants";

export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (builder) => ({
        getPopularMovies: builder.query<IResponseData, number>({
            query: (typeNumber) => `/movie?limit=20&search=${typeNumber}&field=typeNumber&sortField=rating.kp&sortType=-1&token=${API_KEY}`,
        }),
    }),
})


export const { useGetPopularMoviesQuery } = moviesApi;