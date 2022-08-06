
import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {SortBy} from "../constants/constants";


interface FiltersState  {
    movieTypes: any[];
    rating: [number, number];
    yearsProduction: [number, number];
    genres: string[];
    sortBy: SortBy;
}

const initialState: FiltersState = {
    movieTypes: [],
    rating: [1, 10],
    yearsProduction: [1887, 2022],
    genres: [],
    sortBy: SortBy.RATING,
}

export const popularMoviesSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFilters: (state, action: PayloadAction<Partial<FiltersState>>) => {
            return {
                ...state,
                ...action.payload
            }
        }
    },
})

export const { setFilters } = popularMoviesSlice.actions;

export default popularMoviesSlice.reducer;