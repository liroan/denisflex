
import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Theme} from "../constants";


export interface ThemeState  {
    theme: Theme;
}

export const initialState: ThemeState = {
    theme: Theme.LIGHT,
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<Theme>) => {
            state.theme = action.payload;
        },
    },
})

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;