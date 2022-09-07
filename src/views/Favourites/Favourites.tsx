
import styles from "./Favourites.module.scss";
import Paginator from "../../components/Paginator/Paginator";
import React, {FC, useEffect, useMemo, useState} from "react";
import Container from "../../components/Container/Container";
import useGetMoviesLocalStorage from "../../hooks/useGetMoviesLocalStorage";
import FavouritesMovies from "./FavouritesMovies/FavouritesMovies";
import ScreensaverWrapper from "../../components/ScreensaverWrapper/ScreensaverWrapper";

const Favourites:FC = () => {
    const [movies, editMovies] = useGetMoviesLocalStorage();
    const totalPages = Math.ceil(movies.length / 20);

    const [activeNumber, setActiveNumber] = useState(1);

    useEffect(() => {
        if (activeNumber > totalPages) setActiveNumber(totalPages)
    }, [movies.length, activeNumber])

    const showingMovies = useMemo(() => movies.slice((activeNumber - 1) * 20, Math.min(activeNumber * 20, movies.length)),
        [activeNumber, movies])

    return (
       <div className={styles.favorites}>
           <Container>
               <div className={styles.favorites__title}>Избранное</div>
               <ScreensaverWrapper isLoading={false} error={undefined}>
                   <FavouritesMovies items={showingMovies}
                                     editMovies={editMovies}
                   />
               </ScreensaverWrapper>

               <div className={styles.favorites__paginator}>
                   <Paginator totalPages={totalPages} activeNumber={activeNumber} setActiveNumber={setActiveNumber}/>
               </div>
           </Container>
       </div>
    )
}


export default Favourites;