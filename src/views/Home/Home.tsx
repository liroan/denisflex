import styles from "./Home.module.scss";
import Container from "../../components/Container/Container";
import React from "react";
import HomeMovies from "./HomeMovies/HomeMovies";
import {useGetCountriesAndGenresQuery, useGetCompilationMoviesQuery} from "../../services/services";
import Banner from "./Banner/Banner";

const Home = () => {

    const { data: genresAndCountries, isLoading: genresAndCountriesLoading,
        error: genresAndCountriesError } = useGetCountriesAndGenresQuery(null);
    const { data: popularFilms, isLoading: popularFilmsLoading, error: popularFilmsError } = useGetCompilationMoviesQuery("TOP_100_POPULAR_FILMS");
    const { data: bestFilms, isLoading: bestFilmsLoading, error: bestFilmsError } = useGetCompilationMoviesQuery("TOP_250_BEST_FILMS");
    const { data: awaitFilms, isLoading: awaitFilmsLoading, error: awaitFilmsError } = useGetCompilationMoviesQuery("TOP_AWAIT_FILMS");

    console.log(genresAndCountries?.genres?.slice(0, 16), popularFilms?.films, bestFilms?.films, awaitFilms?.films)

    return (
        <div className={styles.home}>
            <Banner />
            <Container>
                <HomeMovies movies={popularFilms?.films} isLoading={popularFilmsLoading}
                            error={popularFilmsError} title="Самые популярные"/>
                <HomeMovies movies={bestFilms?.films} isLoading={bestFilmsLoading}
                            error={bestFilmsError} title="Самые лучшие"/>
                <HomeMovies movies={genresAndCountries?.genres?.slice(0, 16)} isLoading={genresAndCountriesLoading}
                            error={genresAndCountriesError} title="Жанры"/>
                <HomeMovies movies={awaitFilms?.films} isLoading={awaitFilmsLoading}
                            error={awaitFilmsError} title="Самые ожидаемые"/>
            </Container>
        </div>
    )
}

export default Home;
