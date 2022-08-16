import {useGetMoviesLocalStorage} from "../../hooks/hooks";
import styles from "./Favourites.module.scss";
import Paginator from "../Catalog/Paginator/Paginator";
import {useState} from "react";
import FavouritesMovie from "./FavoritesMovie/FavouritesMovie";
import Container from "../../components/Container/Container";

const Favourites = () => {
    const [movies, editMovies] = useGetMoviesLocalStorage();

    const totalPages = Math.ceil(movies.length / 20);
    const [activeNumber, setActiveNumber] = useState(1);

    const showingMovies = movies.slice((activeNumber - 1) * 20, Math.min(activeNumber * 20, movies.length))

    return (
       <div className={styles.favorites}>
           <Container>
               <div className={styles.favorites__films}>
                   {
                       showingMovies.map(movie => (
                           <div className={styles.favorites__movie}>
                               <FavouritesMovie movie={movie} key={movie.kinopoiskId} editMovies={editMovies}/>
                           </div>
                       ))
                   }
               </div>
               <div className={styles.favorites__paginator}>
                   <Paginator totalPages={totalPages} activeNumber={activeNumber} setActiveNumber={setActiveNumber}/>
               </div>
           </Container>
       </div>
    )
}


export default Favourites;