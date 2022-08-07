
import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {MovieType} from "../types/types";


type SortBy = "RATING" | "NUM_VOTE" | "YEAR";

export interface FiltersState  {
    genre: number | null;
    order: SortBy | null;
    type: MovieType | null;
    ratingFrom: number | null;
    ratingTo: number | null;
    yearFrom: number | null;
    yearTo: number | null;
    keyword: string | null;
    page: number | null;
}

const initialState: FiltersState = {
    genre: null,
    order: null,
    type: null,
    ratingFrom: null,
    ratingTo: null,
    yearFrom: null,
    yearTo: null,
    keyword: null,
    page: null,
}

export const filterSlice = createSlice({
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

export const { changeFiltersHandle, changeFiltersFromUrl } = filterSlice.actions;

export default filterSlice.reducer;