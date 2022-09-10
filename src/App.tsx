import React, {FC, Suspense, useEffect} from 'react';
import {Outlet, Route, Routes} from 'react-router-dom';
import {Header, NavigatePanel, Preloader, ErrorBoundary, Footer, MoviesProvider } from "./components";
import "./App.scss"
import "./styles/_vars.scss"
import {useAppDispatch, useAppSelector, useLocalStorageMovies} from "./hooks";
import {setIsMobile} from "./store/auth.slice";
import Login from "./views/Login/Login";

const HomeLazy = React.lazy(() => import('./views/Home/Home'));
const CatalogLazy = React.lazy(() => import('./views/Catalog/Catalog'));
const FavouritesLazy = React.lazy(() => import('./views/Favourites/Favourites'));
const PersonLazy = React.lazy(() => import('./views/Person/Person'));
const FilmContainerLazy = React.lazy(() => import('./views/Film/FilmContainer'));
const RoomLazy = React.lazy(() => import('./views/Room/Room'));

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
                    <Login />
                    {/*<Routes>
                        <Route path="/" element={<Dashboard />}>
                            <Route index element={<HomeLazy />} />
                            <Route path="catalog" element={<CatalogLazy />} />
                            <Route path="favourites" element={<FavouritesLazy />} />
                            <Route path="film/:filmId" element={<FilmContainerLazy />} />
                            <Route path="name/:personId" element={<PersonLazy />} />
                            <Route path="room/:filmId" element={<RoomLazy />}/>
                        </Route>
                    </Routes>*/}
                </Suspense>
            </MoviesProvider>
        </ErrorBoundary>
    )
}

export default App;
