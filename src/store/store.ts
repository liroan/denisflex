import { configureStore } from '@reduxjs/toolkit'
import {moviesApi} from "../services/services";
import filtersSlice from "./filtersSlice";

export const store = configureStore({
    reducer: {
        filters: filtersSlice,
        [moviesApi.reducerPath]: moviesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(moviesApi.middleware),
})