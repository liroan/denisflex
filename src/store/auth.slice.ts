import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import auth from "../firebase.config"
export enum HTTPStatus {
    IDLE,
    LOADING,
    SUCCESS,
    ERROR
}


export interface AuthState  {
    isMobile: boolean;
    currentStep: "number" | "otp";
    status: HTTPStatus;
    email: string | null | undefined,
    number: string | null | undefined,
    error: string | null | undefined,
}

export const initialState: AuthState = {
    isMobile: false,
    currentStep: "number",
    status: HTTPStatus.IDLE,
    email: null,
    number: null,
    error: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsMobile: (state, action: PayloadAction<boolean>) => {
            state.isMobile = action.payload;
        },
        logout: (state) => {
            state.status = HTTPStatus.IDLE;
            state.email = null;
            state.number = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(sendNumber.fulfilled, (state, action) => {
                state.currentStep = "otp";
            })
        builder
            .addCase(sendOTP.fulfilled, (state, action) => {
                state.currentStep = "number";
                state.number = action.payload;
                state.status = HTTPStatus.SUCCESS;
            })
        builder
            .addCase(authUser.fulfilled, (state, action) => {
                state.email = action.payload;
                state.status = HTTPStatus.SUCCESS;
            })
        builder
            .addCase(registrationUser.fulfilled, (state, action) => {
                state.email = action.payload;
                state.status = HTTPStatus.SUCCESS;
            })
        builder
            .addCase(authUser.rejected, (state, action) => {
                state.status = HTTPStatus.ERROR;
                state.error = action.payload as string;
            })
        builder
            .addCase(registrationUser.rejected, (state, action) => {
                state.status = HTTPStatus.ERROR;
                state.error = action.payload as string;
            })
        builder
            .addCase(sendNumber.rejected, (state, action) => {
                state.status = HTTPStatus.ERROR;
                state.error = action.payload as string;
            })
        builder
            .addCase(sendOTP.rejected, (state, action) => {
                state.status = HTTPStatus.ERROR;
                state.error = action.payload as string;
            })
    },
})

export const authUser = createAsyncThunk(
    'auth/authUser',
    async ({email, password}: { email: string, password: string }, thunkAPI) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            return userCredential.user.email;
        } catch(error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const registrationUser = createAsyncThunk(
    'auth/registrationUser',
    async ({email, password}: { email: string, password: string }, thunkAPI) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            return userCredential.user.email;
        } catch(error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const sendNumber = createAsyncThunk(
    'auth/sendNumber',
    async (number: string, thunkAPI) => {
        try {
            window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
                'size': 'invisible',
                'callback': async (response: any) => {}
            }, auth);
            window.confirmationResult = await signInWithPhoneNumber(auth, number, window.recaptchaVerifier);
        } catch(error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const sendOTP = createAsyncThunk(
    'auth/sendOTP',
    async (code: string, thunkAPI) => {
        try {
            const userCredential = await window.confirmationResult
                .confirm(code.replace(/\s+/g, '').trim());
            return userCredential.user.phoneNumber;
        } catch(error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const { setIsMobile, logout } = authSlice.actions;



export default authSlice.reducer;