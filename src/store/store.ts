import { configureStore } from '@reduxjs/toolkit'
import {moviesApi} from "../services/services";
import filtersSlice from "./filtersSlice";
import authSlice from "./auth.slice";
import themeSlice from "./theme.slice";
export const store = configureStore({
    reducer: {
        filters: filtersSlice,
        auth: authSlice,
        theme: themeSlice,
        [moviesApi.reducerPath]: moviesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(moviesApi.middleware),
})