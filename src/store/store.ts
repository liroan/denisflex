import { configureStore } from '@reduxjs/toolkit'
import {moviesApi} from "../services/services";
import filtersSlice from "./filtersSlice";
import authSlice from "./auth.slice";

export const store = configureStore({
    reducer: {
        filters: filtersSlice,
        auth: authSlice,
        [moviesApi.reducerPath]: moviesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(moviesApi.middleware),
})