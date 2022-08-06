
import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {MovieType} from "../types/types";


type SortBy = "RATING" | "NUM_VOTE" | "YEAR";

interface FiltersState  {
    genre: number;
    order: SortBy;
    type: MovieType;
    ratingFrom: number;
    ratingTo: number;
    yearFrom: number;
    yearTo: number;
    keyword: string;
    page: number;
}

const initialState: FiltersState = {
    genre: 1,
    order: "RATING",
    type: "ALL",
    ratingFrom: 0,
    ratingTo: 10,
    yearFrom: 1870,
    yearTo: 2022,
    keyword: "",
    page: 1,
}

export const popularMoviesSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        changeFiltersFromUrl: (state, action: PayloadAction<Partial<FiltersState>>) => {
            return {
                ...initialState,
                ...action.payload
            }
        },
        changeFiltersHandle: (state, action: PayloadAction<Partial<FiltersState>>) => {
            return {
                ...state,
                ...action.payload
            }
        }
    },
})

export const { changeFiltersHandle, changeFiltersFromUrl } = popularMoviesSlice.actions;

export default popularMoviesSlice.reducer;