import React, {FC, Suspense} from 'react';
import {Outlet, Route, Routes} from 'react-router-dom';
import Header from "./components/Header/Header";
import "./App.scss"
import EditMoviesContext from "./context/EditMoviesContext";
import useLocalStorageMovies from "./hooks/useLocalStorageMovies";
import NavigatePanel from "./components/NavigatePanel/NavigatePanel";
import Preloader from "./components/Preloader/Preloader";

const HomeLazy = React.lazy(() => import('./views/Home/Home'));
const CatalogLazy = React.lazy(() => import('./views/Catalog/Catalog'));
const FavouritesLazy = React.lazy(() => import('./views/Favourites/Favourites'));
const PersonLazy = React.lazy(() => import('./views/Person/Person'));
const FilmContainerLazy = React.lazy(() => import('./views/Film/FilmContainer'));

const Dashboard = React.memo(() => {
    return (
        <div className={'app'}>
            <Header />
            <Outlet />
            <NavigatePanel />
        </div>
    );
})


const App:FC = () => {

    const moviesState = useLocalStorageMovies();

    return (
        <EditMoviesContext.Provider value={moviesState}>
            <div>
                <Suspense fallback={<Preloader />}>
                    <Routes>
                        <Route path="/" element={<Dashboard />}>
                                <Route index element={<HomeLazy />} />
                                <Route path="catalog" element={<CatalogLazy />} />
                                <Route path="favourites" element={<FavouritesLazy />} />
                                <Route path="film/:filmId" element={<FilmContainerLazy />} />
                                <Route path="name/:personId" element={<PersonLazy />} />
                        </Route>
                    </Routes>
                </Suspense>
            </div>
        </EditMoviesContext.Provider>
    )
}

export default App;
