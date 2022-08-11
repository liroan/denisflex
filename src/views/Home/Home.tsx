import styles from "./Home.module.scss";
import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import classNames from "classnames";
import React, {useRef} from "react";
import Slider from "../../components/Slider/Slider";
import HomeMovies from "./HomeMovies/HomeMovies";
import {useGetCountriesAndGenresQuery, useGetPopularMoviesQuery, useGetCompilationMoviesQuery} from "../../services/services";
import Banner from "./Banner/Banner";


const films = [
    {rating: 5.5, price: 299, img: "https://i.pinimg.com/originals/8f/ef/79/8fef79d50e79201be484ceb478892916.jpg"},
    {rating: 5.5, price: 299, img: "https://i.pinimg.com/originals/8f/ef/79/8fef79d50e79201be484ceb478892916.jpg"},
    {rating: 5.5, price: 299, img: "https://i.pinimg.com/originals/8f/ef/79/8fef79d50e79201be484ceb478892916.jpg"},
    {rating: 5.5, price: 299, img: "https://i.pinimg.com/originals/8f/ef/79/8fef79d50e79201be484ceb478892916.jpg"},
    {rating: 5.5, price: 299, img: "https://i.pinimg.com/originals/8f/ef/79/8fef79d50e79201be484ceb478892916.jpg"},
    {rating: 5.5, price: 299, img: "https://i.pinimg.com/originals/8f/ef/79/8fef79d50e79201be484ceb478892916.jpg"},
    {rating: 5.5, price: 299, img: "https://i.pinimg.com/originals/8f/ef/79/8fef79d50e79201be484ceb478892916.jpg"}
]
const Home = () => {
    const { data: genresAndCountries,
        isLoading: genresAndCountriesLoading, error: genresAndCountriesError } = useGetCountriesAndGenresQuery(null);
    const { data: films, isLoading: filmsLoading, error: filmsError } = useGetCompilationMoviesQuery("TOP_100_POPULAR_FILMS");
    const { data: serials, isLoading: serialsLoading, error: serialsError } = useGetCompilationMoviesQuery("TOP_250_BEST_FILMS");
    const { data: shows, isLoading: showsLoading, error: showsError } = useGetCompilationMoviesQuery("TOP_AWAIT_FILMS");


    return (
        <div className={styles.home}>
            <Banner />
            <Container>
                <HomeMovies movies={films?.films} isGenre={false} isLoading={filmsLoading} error={filmsError} title="Самые популярные"/>
                <HomeMovies movies={serials?.films} isGenre={false} isLoading={serialsLoading} error={serialsError} title="Самые лучшие"/>
                <HomeMovies movies={genresAndCountries?.genres?.slice(0, 16)} isGenre={true} isLoading={genresAndCountriesLoading} error={genresAndCountriesError} title="Жанры"/>
                <HomeMovies movies={shows?.films} isGenre={false} isLoading={showsLoading} error={showsError} title="Самые ожидаемые"/>
            </Container>
        </div>
    )
}

export default Home;
