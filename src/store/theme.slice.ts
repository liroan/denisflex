
import {createSlice, PayloadAction} from '@reduxjs/toolkit'


type themeType = "light" | "dark";

const getTheme = (): themeType => {
    const theme = `${window.localStorage.getItem('theme')}`;
    if (["dark", "light"].includes(theme)) return theme as themeType;
    const matchMediaTheme = window.matchMedia("prefers-color-scheme: light");
    if (matchMediaTheme.matches) return "light";
    return "dark";
}

export const initialState: themeType = getTheme();
export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<themeType>) => action.payload
    },
})

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;