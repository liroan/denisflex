
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface AuthState  {
    isMobile: boolean;
}

export const initialState: AuthState = {
    isMobile: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsMobile: (state, action: PayloadAction<boolean>) => {
            state.isMobile = action.payload;
        },
    },
})

export const { setIsMobile } = authSlice.actions;

export default authSlice.reducer;