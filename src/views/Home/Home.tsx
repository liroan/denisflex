import styles from "./Home.module.scss";
import Container from "../../components/Container/Container";
import React, {FC, useMemo} from "react";
import SliderContainer from "../../components/SliderContainer/SliderContainer";
import {useGetCountriesAndGenresQuery, useGetCompilationMoviesQuery} from "../../services/services";
import Banner from "./Banner/Banner";

const Home:FC = () => {
    const { data: genresAndCountries, isLoading: genresAndCountriesLoading,
        error: genresAndCountriesError } = useGetCountriesAndGenresQuery(null);
    const { data: popularFilms, isLoading: popularFilmsLoading, error: popularFilmsError } = useGetCompilationMoviesQuery("TOP_100_POPULAR_FILMS");
    const { data: bestFilms, isLoading: bestFilmsLoading, error: bestFilmsError } = useGetCompilationMoviesQuery("TOP_250_BEST_FILMS");
    const { data: awaitFilms, isLoading: awaitFilmsLoading, error: awaitFilmsError } = useGetCompilationMoviesQuery("TOP_AWAIT_FILMS");

    const genres = useMemo(() => genresAndCountries?.genres?.slice(0, 16), [genresAndCountries])

    return (
        <div className={styles.home}>
            <Banner />
            <Container>
                <div className={styles.home__movies_margin}>
                    <SliderContainer movies={popularFilms?.films} isLoading={popularFilmsLoading}
                                     error={popularFilmsError} title="Самые популярные"

                    />
                </div>
                <div className={styles.home__movies_margin}>
                    <SliderContainer movies={bestFilms?.films} isLoading={bestFilmsLoading}
                                     error={bestFilmsError} title="Самые лучшие"/>
                </div>
                <div className={styles.home__movies_margin}>
                    <SliderContainer movies={genres} isLoading={genresAndCountriesLoading}
                                     error={genresAndCountriesError} title="Жанры" isWideCard />
                </div>
                <div className={styles.home__movies_margin}>
                    <SliderContainer movies={awaitFilms?.films} isLoading={awaitFilmsLoading}
                                     error={awaitFilmsError} title="Самые ожидаемые"/>
                </div>
            </Container>
        </div>
    )
}

export default Home;
