import React, {FC, Suspense, useEffect} from 'react';
import {Preloader, ErrorBoundary, MoviesProvider } from "./components";
import "./App.scss"
import "./styles/_vars.scss"
import {useAppDispatch, useAppSelector, useLocalStorageMovies} from "./hooks";
import {setIsMobile} from "./store/auth.slice";
import AppRouter from "./components/AppRouter/AppRouter";
import useAuth from "./hooks/useAuth";



const App:FC = () => {
    const moviesState = useLocalStorageMovies();
    const { userData, authLoading } = useAuth();
    const { theme } = useAppSelector(state => state);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setIsMobile(!!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)))
    }, [])

    useEffect(() => {
        window.localStorage.setItem('theme', theme);
        document.body.setAttribute("data-theme", theme)
    }, [theme])

    return (
        <ErrorBoundary>
            <MoviesProvider state={moviesState}>
                <Suspense fallback={<Preloader />}>
                    {
                        authLoading ? <Preloader /> : <AppRouter isAuth={!!userData}/>
                    }
                </Suspense>
            </MoviesProvider>
        </ErrorBoundary>
    )
}

export default App;
