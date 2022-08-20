import React, {FC} from 'react';
import {Outlet, Route, Routes} from 'react-router-dom';
import Header from "./components/Header/Header";
import "./style/App.scss"
import Home from "./views/Home/Home";
import Catalog from "./views/Catalog/Catalog";
import Favourites from "./views/Favourites/Favourites";
import Person from "./views/Person/Person";
import FilmContainer from "./views/Film/FilmContainer";
import EditMoviesContext from "./context/EditMoviesContext";
import useStateMovies from "./hooks/useStateMovies";


const Dashboard = () => {
    return (
        <div className={'app'}>
            <Header />
            <Outlet />
        </div>
    );
}


const App:FC = () => {

    const moviesState = useStateMovies();

    return (
        <EditMoviesContext.Provider value={moviesState}>
            <div>
                <Routes>
                    <Route path="/" element={<Dashboard />}>
                        <Route index element={<Home />} />
                        <Route path="catalog" element={<Catalog />} />
                        <Route path="favourites" element={<Favourites />} />
                        <Route path="film/:filmId" element={<FilmContainer />} />
                        <Route path="name/:personId" element={<Person />} />
                    </Route>
                </Routes>
            </div>
        </EditMoviesContext.Provider>
    )
}

export default App;
