import React, {FC} from 'react';
import {Outlet, Route, Routes} from 'react-router-dom';
import Header from "./components/Header/Header";
import "./style/App.scss"
import Home from "./views/Home/Home";
import Catalog from "./views/Catalog/Catalog";
import {IMoviePreview} from "./types/types";
import useLocalStorage from "use-local-storage";
import Favourites from "./views/Favourites/Favourites";
import Film from "./views/Film/Film";



const Dashboard = () => {
    return (
        <div className={'app'}>
            <Header />
            <Outlet />
        </div>
    );
}

interface IEditMoviesContext {
    movies: IMoviePreview[],
    editMovies: (movie: IMoviePreview) => void;
}

export const EditMoviesContext = React.createContext<IEditMoviesContext | null>(null);

const App:FC = () => {

    const [movies, setMovies] = useLocalStorage<IMoviePreview[]>("favourites", []);

    const editMovies = (movie: IMoviePreview) => {
        let filteredMovies = movies.filter(({ kinopoiskId }) => kinopoiskId !== movie.kinopoiskId);
        if (filteredMovies.length === movies.length) filteredMovies = [...filteredMovies, movie];
        setMovies(filteredMovies);
    }

    const moviesLocalStorage = {
        movies,
        editMovies
    }


    return (
        <EditMoviesContext.Provider value={moviesLocalStorage}>
            <div>
                <Routes>
                    <Route path="/" element={<Dashboard />}>
                        <Route index element={<Home />} />
                        <Route path="catalog" element={<Catalog />} />
                        <Route path="favourites" element={<Favourites />} />
                        <Route path="film" element={<Film />} />
                    </Route>
                </Routes>
            </div>
        </EditMoviesContext.Provider>
    )
}

export default App;
