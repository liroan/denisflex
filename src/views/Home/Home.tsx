import styles from "./Home.module.scss";
import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import classNames from "classnames";
import React, {useRef} from "react";
import Slider from "../../components/Slider/Slider";
import HomeMovies from "./HomeMovies/HomeMovies";
import {useGetCountriesAndGenresQuery, useGetPopularMoviesQuery} from "../../services/services";


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
    const { data: films, isLoading: filmsLoading, error: filmsError } = useGetPopularMoviesQuery("FILM");
    const { data: serials, isLoading: serialsLoading, error: serialsError } = useGetPopularMoviesQuery("TV_SERIES");
    const { data: shows, isLoading: showsLoading, error: showsError } = useGetPopularMoviesQuery("TV_SHOW");
    console.log(films, serials, shows)
    return (
        <div className={styles.home}>
            <div className={styles.home__banner} style={{ backgroundImage: "url(https://avatars.mds.yandex.net/get-ott/1672343/2a0000016cc7177239d4025185c488b1bf43/orig)" }}>
                <Container>
                    <div className={styles.home__banner_blackout} />
                    <div className={styles.home__bannerInfo}>
                        <h1 className={styles.home__bannerTitle}>Тор: Любовь и гром</h1>
                        <h2 className={styles.home__bannerDescription}>Джейн Фостер берет на себя обязанности Бога-громовержца и становится обладательницей молота Мьёльнира.</h2>
                        <Button>
                            <span className={styles.home__buttonInner}>
                                Подробнее
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </span>
                        </Button>
                    </div>
                </Container>
            </div>
            <HomeMovies movies={films?.items} isGenre={false} isLoading={filmsLoading} error={filmsError} title="Популярные фильмы"/>
            <HomeMovies movies={serials?.items} isGenre={false} isLoading={serialsLoading} error={serialsError} title="Популярные сериалы"/>
            <HomeMovies movies={shows?.items} isGenre={false} isLoading={showsLoading} error={showsError} title="Популярные ТВ-шоу"/>
            {/*<HomeMovies films={films} isGenre={true} />*/}
        </div>
    )
}

export default Home;
