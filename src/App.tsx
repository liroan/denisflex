import React, {FC, Suspense, useEffect} from 'react';
import {Outlet, Route, Routes} from 'react-router-dom';
import {Header, NavigatePanel, Preloader, ErrorBoundary, Footer, MoviesProvider } from "./components";
import "./App.scss"
import "./styles/_vars.scss"
import {useAppDispatch, useAppSelector, useLocalStorageMovies} from "./hooks";
import {setIsMobile} from "./store/auth.slice";
import Login from "./views/Login/Login";
import {initializeApp} from "firebase/app";


const HomeLazy = React.lazy(() => import('./views/Home/Home'));
const CatalogLazy = React.lazy(() => import('./views/Catalog/Catalog'));
const FavouritesLazy = React.lazy(() => import('./views/Favourites/Favourites'));
const PersonLazy = React.lazy(() => import('./views/Person/Person'));
const FilmContainerLazy = React.lazy(() => import('./views/Film/FilmContainer'));
const RoomLazy = React.lazy(() => import('./views/Room/Room'));

const firebaseConfig = {
    apiKey: "AIzaSyACUAfxiwjq_AdoHYV6V39ZZj_qdXM_2mE",
    authDomain: "mileynflix.firebaseapp.com",
    projectId: "mileynflix",
    storageBucket: "mileynflix.appspot.com",
    messagingSenderId: "801205831921",
    appId: "1:801205831921:web:584faa0903cec46bbbc150"
};

const app = initializeApp(firebaseConfig);

const Dashboard = React.memo(() => {
    return (
        <div className='app'>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            <NavigatePanel />
        </div>
    );
})


const App:FC = () => {

    const moviesState = useLocalStorageMovies();
    const { theme } = useAppSelector(state => state.theme)
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(
            setIsMobile(!!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/))
        )
    }, [])
    useEffect(() => {
        document.body.setAttribute("data-theme", theme)
    }, [theme])

    return (
        <ErrorBoundary>
            <MoviesProvider state={moviesState}>
                <Suspense fallback={<Preloader />}>
                    <Routes>
                        <Route path="/" element={<Dashboard />}>
                            <Route index element={<HomeLazy />} />
                            <Route path="catalog" element={<CatalogLazy />} />
                            <Route path="favourites" element={<FavouritesLazy />} />
                            <Route path="film/:filmId" element={<FilmContainerLazy />} />
                            <Route path="name/:personId" element={<PersonLazy />} />
                            <Route path="room/:filmId" element={<RoomLazy />}/>
                            <Route path="login" element={<Login />}/>
                        </Route>
                    </Routes>
                </Suspense>
            </MoviesProvider>
        </ErrorBoundary>
    )
}

export default App;
