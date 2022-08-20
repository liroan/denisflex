import useLocalStorage from "use-local-storage";
import {IMoviePreview} from "../types/types";
import {useCallback, useMemo} from "react";


const useStateMovies = () =>{
    const [movies, setMovies] = useLocalStorage<IMoviePreview[]>("favourites", []);

    const editMovies = useCallback((movie: IMoviePreview) => {
        let filteredMovies = movies.filter(({ kinopoiskId }) => kinopoiskId !== movie.kinopoiskId);
        if (filteredMovies.length === movies.length) filteredMovies = [...filteredMovies, movie];
        setMovies(filteredMovies);
    }, [movies, setMovies])

    return useMemo(() => ({movies, editMovies}), [movies, editMovies]);
}

export default useStateMovies;