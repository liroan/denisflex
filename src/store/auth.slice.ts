import { createUserWithEmailAndPassword,
    signInWithEmailAndPassword, signInWithPhoneNumber, RecaptchaVerifier, signInWithPopup } from "firebase/auth";
import {AnyAction, AsyncThunk, createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import auth, {githubProvider, provider} from "../firebase.config"
import firebaseErrorParser from "../utils/firebaseErrorParser";

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>
type PendingAction = ReturnType<GenericAsyncThunk['pending']>

function isRejectedAction(action: AnyAction): action is RejectedAction {
    return action.type.endsWith('/rejected')
}

function isFulfilledAction(action: AnyAction): action is FulfilledAction {
    return action.type.endsWith('/fulfilled')
}

function isPendingAction(action: AnyAction): action is PendingAction {
    return action.type.endsWith('/pending')
}

export interface AuthState  {
    isMobile: boolean;
    currentStepMobileAuth: "number" | "code";
    email: string | null | undefined,
    number: string | null | undefined,
    error: string | null | undefined,
    isLoading: boolean;
}

export const initialState: AuthState = {
    isMobile: false,
    currentStepMobileAuth: "number",
    email: null,
    number: null,
    error: null,
    isLoading: false,
}

interface IUserData {
    email: string | null | undefined;
    number: string | null | undefined;
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<IUserData>) => {
            state.email = action.payload.email;
            state.number = action.payload.number;
        },
        setIsMobile: (state, action: PayloadAction<boolean>) => {
            state.isMobile = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
        setStepMobileAuth: (state, action: PayloadAction<"number" | "code">) => {
            state.currentStepMobileAuth = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(sendNumber.fulfilled, (state) => {
                state.currentStepMobileAuth = "code";
            })
        builder
            .addCase(sendOTP.fulfilled, (state) => {
                state.currentStepMobileAuth = "number";
            })
        builder
            .addMatcher(isRejectedAction, (state, action) => {
                state.isLoading = false;
                state.error = firebaseErrorParser(action.payload as string);
            })
        builder
            .addMatcher(isFulfilledAction, (state) => {
                state.isLoading = false;
            })
        builder
            .addMatcher(isPendingAction, (state) => {
                state.isLoading = true;
            })
        // builder
        //     .addCase(authUser.rejected, (state, action) => {
        //         state.error = action.payload as string;
        //     })
        // builder
        //     .addCase(registrationUser.rejected, (state, action) => {
        //         state.error = action.payload as string;
        //     })
        // builder
        //     .addCase(sendNumber.rejected, (state, action) => {
        //         state.error = action.payload as string;
        //     })
        // builder
        //     .addCase(sendOTP.rejected, (state, action) => {
        //         state.error = action.payload as string;
        //     })
    },
})

export const authUser = createAsyncThunk(
    'auth/authUser',
    async ({email, password}: { email: string, password: string }, thunkAPI) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch(error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const authWithGoogle = createAsyncThunk(
    'auth/authUser',
    async (_, thunkAPI) => {
        try {
            await signInWithPopup(auth, provider);
        } catch(error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const authWithGithub = createAsyncThunk(
    'auth/authUser',
    async (_, thunkAPI) => {
        try {
            await signInWithPopup(auth, githubProvider);
        } catch(error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const registrationUser = createAsyncThunk(
    'auth/registrationUser',
    async ({email, password}: { email: string, password: string }, thunkAPI) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch(error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const sendNumber = createAsyncThunk(
    'auth/sendNumber',
    async (number: string, thunkAPI) => {
        try {
            if (!window.recaptchaVerifier) {
                window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
                    'size': 'invisible',
                    'callback': async (response: any) => {
                    }
                }, auth);
            }
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
            await window.confirmationResult.confirm(code.replace(/\s+/g, '').trim());
        } catch(error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const { setIsMobile, setUserData, setError, setStepMobileAuth } = authSlice.actions;



export default authSlice.reducer;