
import styles from "./Favourites.module.scss";
import Paginator from "../../components/Paginator/Paginator";
import {FC, useEffect, useMemo, useState} from "react";
import FavouritesMovie from "./FavoritesMovie/FavouritesMovie";
import Container from "../../components/Container/Container";
import useGetMoviesLocalStorage from "../../hooks/useGetMoviesLocalStorage";
import useGetScreensaver from "../../hooks/useGetScreensaver";

const Favourites:FC = () => {
    const [movies, editMovies] = useGetMoviesLocalStorage();
    const totalPages = Math.ceil(movies.length / 20);

    const [activeNumber, setActiveNumber] = useState(1);
    const screensaver = useGetScreensaver(false, undefined, movies)

    useEffect(() => {
        if (activeNumber > totalPages) setActiveNumber(totalPages)
    }, [movies.length, activeNumber])

    const showingMovies = useMemo(() => movies.slice((activeNumber - 1) * 20, Math.min(activeNumber * 20, movies.length)),
        [activeNumber, movies])


    return (
       <div className={styles.favorites}>
           <Container>
               <div className={styles.favorites__title}>Избранное</div>
               {
                   screensaver ? screensaver :
                       (
                           <div className={styles.favorites__films}>
                               {
                                   showingMovies.map(movie => (
                                       <div className={styles.favorites__movie} key={movie.kinopoiskId}>
                                           <FavouritesMovie movie={movie} key={movie.kinopoiskId} editMovies={editMovies}/>
                                       </div>
                                   ))
                               }
                           </div>
                       )
               }
               <div className={styles.favorites__paginator}>
                   <Paginator totalPages={totalPages} activeNumber={activeNumber} setActiveNumber={setActiveNumber}/>
               </div>
           </Container>
       </div>
    )
}


export default Favourites;