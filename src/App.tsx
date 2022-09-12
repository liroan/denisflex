import React, {FC, Suspense, useEffect} from 'react';
import {Preloader, ErrorBoundary, MoviesProvider } from "./components";
import "./App.scss"
import "./styles/_vars.scss"
import {useAppDispatch, useAppSelector, useLocalStorageMovies} from "./hooks";
import {setIsMobile, setUserData} from "./store/auth.slice";
import {useAuthState} from "react-firebase-hooks/auth";
import auth from "./firebase.config"
import AppRouter from "./components/AppRouter/AppRouter";



const App:FC = () => {

    const moviesState = useLocalStorageMovies();
    const { theme } = useAppSelector(state => state.theme)
    const dispatch = useAppDispatch();
    const [userData, authLoading] = useAuthState(auth);

    useEffect(() => {
        dispatch(
            setIsMobile(!!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/))
        )
    }, [])
    useEffect(() => {
        document.body.setAttribute("data-theme", theme)
    }, [theme])
    useEffect(() => {
        dispatch(setUserData({ email: userData?.email, number: userData?.phoneNumber }))
    }, [userData])

    return (
        <ErrorBoundary>
            <MoviesProvider state={moviesState}>
                <Suspense fallback={<Preloader />}>
                    <AppRouter authLoading={authLoading} isAuth={!!userData}/>
                </Suspense>
            </MoviesProvider>
        </ErrorBoundary>
    )
}

export default App;
