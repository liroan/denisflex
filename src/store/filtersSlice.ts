
import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {MovieType} from "../types";


export type SortBy = "RATING" | "NUM_VOTE" | "YEAR";

export interface FiltersState  {
    genres: number;
    order: SortBy;
    type: MovieType;
    ratingFrom: number;
    ratingTo: number;
    yearFrom: number;
    yearTo: number;
    keyword: string;
    page: number;
}

export const initialStateFilter: FiltersState = {
    genres: 0,
    order: "RATING",
    type: "ALL",
    ratingFrom: 1,
    ratingTo: 10,
    yearFrom: 1900,
    yearTo: 2022,
    keyword: "",
    page: 1,
}

export const filterSlice = createSlice({
    name: 'filters',
    initialState: initialStateFilter,
    reducers: {
        changeFiltersFromUrl: (state, action: PayloadAction<Partial<FiltersState>>) => {
            return {
                ...initialStateFilter,
                ...action.payload
            }
        },
        changeFiltersHandle: (state, action: PayloadAction<Partial<FiltersState>>) => {
            return {
                ...state,
                ...action.payload,
                page: 1
            };
        },
        resetFilters: (state) => {
            return {
                ...initialStateFilter
            };
        },
        setPage: (state, action: PayloadAction<Partial<number>>) => {
            state.page = action.payload;
        }
    },
})

export const { changeFiltersHandle, changeFiltersFromUrl, resetFilters, setPage } = filterSlice.actions;

export default filterSlice.reducer;