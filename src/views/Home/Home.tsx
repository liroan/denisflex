import styles from "./Home.module.scss";
import Container from "../../components/Container/Container";
import React, {FC, useMemo} from "react";
import SliderContainer from "../../components/SliderContainer/SliderContainer";
import {useGetCountriesAndGenresQuery, useGetCompilationMoviesQuery} from "../../services/services";
import Banner from "./Banner/Banner";
import SliderItemGenre from "../../components/SliderContainer/Slider/SliderItemGenre/SliderItemGenre";
import {IGenre, IMovieTop} from "../../types";
import SliderItemMovie from "../../components/SliderContainer/Slider/SliderItemMovie/SliderItemMovie";

const Home:FC = () => {
    const { data: genresAndCountries, isLoading: genresAndCountriesLoading,
        error: genresAndCountriesError } = useGetCountriesAndGenresQuery(null);
    const { data: popularFilmsContainer, isLoading: popularFilmsLoading, error: popularFilmsError } = useGetCompilationMoviesQuery("TOP_100_POPULAR_FILMS");
    const { data: bestFilmsContainer, isLoading: bestFilmsLoading, error: bestFilmsError } = useGetCompilationMoviesQuery("TOP_250_BEST_FILMS");
    const { data: awaitFilmsContainer, isLoading: awaitFilmsLoading, error: awaitFilmsError } = useGetCompilationMoviesQuery("TOP_AWAIT_FILMS");

    const genres = useMemo(() => genresAndCountries?.genres?.slice(0, 16), [genresAndCountries])
    const bestFilms = bestFilmsContainer?.films;
    const awaitFilms = awaitFilmsContainer?.films;
    const popularFilms = popularFilmsContainer?.films;

    return (
        <div className={styles.home}>
            <Banner />
            <Container>
                <div className={styles.home__movies_margin}>
                    <SliderContainer items={popularFilms}
                                     getSliderCard={(item: IMovieTop) => <SliderItemMovie movie={item} key={item.filmId} />}
                                     isLoading={popularFilmsLoading}
                                     error={popularFilmsError} title="Самые популярные"
                    />
                </div>
                <div className={styles.home__movies_margin}>
                    <SliderContainer items={bestFilms}
                                     getSliderCard={(item: IMovieTop) => <SliderItemMovie movie={item} key={item.filmId} />}
                                     isLoading={bestFilmsLoading}
                                     error={bestFilmsError} title="Самые лучшие"
                    />
                </div>
                <div className={styles.home__movies_margin}>
                    <SliderContainer items={genres}
                                     getSliderCard={(item: IGenre, index) => (
                                         <SliderItemGenre
                                             genreInfo={{ ...item, index }}
                                             key={item.id}
                                     />)}
                                     isLoading={genresAndCountriesLoading}
                                     error={genresAndCountriesError}
                                     title="Жанры"
                                     isWideCard
                    />
                </div>
                <div className={styles.home__movies_margin}>
                    <SliderContainer items={awaitFilms}
                                     getSliderCard={(item: IMovieTop) => <SliderItemMovie movie={item} key={item.filmId} />}
                                     isLoading={awaitFilmsLoading}
                                     error={awaitFilmsError} title="Самые ожидаемые"
                    />
                </div>
            </Container>
        </div>
    )
}

export default Home;
