import React, {FC, useEffect, useState} from "react";
import styles from "./Catalog.module.scss";
import Container from "../../components/Container/Container";
import classNames from "classnames";
import FormGroup from '@mui/material/FormGroup';
import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    Switch
} from "@mui/material";
import RangeSlider from "../../components/RangeSlider/RangeSlider";
import Filter from "./Filter/Filter";

const Catalog:FC = () => {
    const [lol, setLol] = useState(true);
    const [lol22, setLol22] = useState(false);
    const [lol2, setLol2] = useState(false);
    const [genre, setGenre] = useState('');
    const [age, setAge] = React.useState('');

   /* const [isPaddingFilter, setIsPaddingFilter] = useState(false);
    useEffect(() => {
        const scroll = () => {
            setIsPaddingFilter(window.scrollY > 250);
        }
        window.addEventListener('scroll', scroll)
        return () => window.removeEventListener('scroll', scroll);
    })*/


    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    const favourites = <svg stroke="#fff" fill="#fff" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>;
    const checkMark = <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
    return (
        <div className={styles.catalog}>
            <Container>
                <Container>
                    <div className={styles.catalog__meta}>
                        <h2 className={styles.catalog__title}>Все фильмы</h2>
                        <h3 className={styles.catalog__subtitle}>Подборка фильмов всего мира</h3>
                        <div className={styles.catalog__openFilters}><button onClick={() => setLol22(true)}>Фильтры</button></div>
                    </div>
                    <div className={styles.catalog__mainInfo}>
                        <Filter lol={lol} setLol={setLol} age={age} handleChange={handleChange} lol22={lol22} setLol22={setLol22}/>
                        <div className={classNames(styles.catalog__films, styles.films)}>
                            <div className={styles.film}>
                                <div className={styles.film__info}>
                                    <div className={styles.film__poster}><img src="https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/82e2dd2f-74bc-40af-94ad-548f02b316b6/360" alt=""/></div>
                                    <div className={styles.film__text}>
                                        <h3 className={styles.film__title}>Баста. Суперигра</h3>
                                        <h4 className={styles.film__time}>2022, 1:38 часа</h4>
                                        <p className={styles.film__descr}>Женщина делает домашний анализ ДНК и обнаруживает множество близкихродствен никовродственни ковродс твенников родственник овродств енников авыаыаыа а ыва выа выа выа а а выа ыва ыа ыва ыва а а ыа ываа ы ыв аыа вы аы а а аыва ыв авы а родственников. Женщина делает домашний анализ ДНК и обнаруживает множество близких родственников.Так всплывает шокирующая и тому подобное</p>
                                    </div>
                                </div>
                                <div className={styles.film__additionalInfo}>
                                    <div className={styles.film__rating}>6.6</div>
                                    {
                                        !lol2 ? (
                                            <div className={styles.film__addFavourites}>
                                                <Button variant="contained" startIcon={favourites} onClick={() => setLol(prevState => !prevState)}>
                                                    Буду смотреть
                                                </Button>
                                            </div>
                                        ) : (
                                            <div className={styles.film__deleteFavourites}>
                                                <Button variant="contained" startIcon={checkMark} onClick={() => setLol(prevState => !prevState)}>
                                                    Буду смотреть
                                                </Button>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            <div className={styles.film}>
                                <div className={styles.film__info}>
                                    <div className={styles.film__poster}><img src="https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/82e2dd2f-74bc-40af-94ad-548f02b316b6/360" alt=""/></div>
                                    <div className={styles.film__text}>
                                        <h3 className={styles.film__title}>Баста. Суперигра</h3>
                                        <h4 className={styles.film__time}>2022, 1:38 часа</h4>
                                        <p className={styles.film__descr}>Женщина делает домашний анализ ДНК и обнаруживает множество близкихродствен никовродственни ковродс твенников родственник овродств енников авыаыаыа а ыва выа выа выа а а выа ыва ыа ыва ыва а а ыа ываа ы ыв аыа вы аы а а аыва ыв авы а родственников. Женщина делает домашний анализ ДНК и обнаруживает множество близких родственников.Так всплывает шокирующая и тому подобное</p>
                                    </div>
                                </div>
                                <div className={styles.film__additionalInfo}>
                                    <div className={styles.film__rating}>6.6</div>
                                    {
                                        !lol2 ? (
                                            <div className={styles.film__addFavourites}>
                                                <Button variant="contained" startIcon={favourites} onClick={() => setLol(prevState => !prevState)}>
                                                    Буду смотреть
                                                </Button>
                                            </div>
                                        ) : (
                                            <div className={styles.film__deleteFavourites}>
                                                <Button variant="contained" startIcon={checkMark} onClick={() => setLol(prevState => !prevState)}>
                                                    Буду смотреть
                                                </Button>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            <div className={styles.film}>
                                <div className={styles.film__info}>
                                    <div className={styles.film__poster}><img src="https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/82e2dd2f-74bc-40af-94ad-548f02b316b6/360" alt=""/></div>
                                    <div className={styles.film__text}>
                                        <h3 className={styles.film__title}>Баста. Суперигра</h3>
                                        <h4 className={styles.film__time}>2022, 1:38 часа</h4>
                                        <p className={styles.film__descr}>Женщина делает домашний анализ ДНК и обнаруживает множество близкихродствен никовродственни ковродс твенников родственник овродств енников авыаыаыа а ыва выа выа выа а а выа ыва ыа ыва ыва а а ыа ываа ы ыв аыа вы аы а а аыва ыв авы а родственников. Женщина делает домашний анализ ДНК и обнаруживает множество близких родственников.Так всплывает шокирующая и тому подобное</p>
                                    </div>
                                </div>
                                <div className={styles.film__additionalInfo}>
                                    <div className={styles.film__rating}>6.6</div>
                                    {
                                        !lol2 ? (
                                            <div className={styles.film__addFavourites}>
                                                <Button variant="contained" startIcon={favourites} onClick={() => setLol(prevState => !prevState)}>
                                                    Буду смотреть
                                                </Button>
                                            </div>
                                        ) : (
                                            <div className={styles.film__deleteFavourites}>
                                                <Button variant="contained" startIcon={checkMark} onClick={() => setLol(prevState => !prevState)}>
                                                    Буду смотреть
                                                </Button>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            <div className={styles.film}>
                                <div className={styles.film__info}>
                                    <div className={styles.film__poster}><img src="https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/82e2dd2f-74bc-40af-94ad-548f02b316b6/360" alt=""/></div>
                                    <div className={styles.film__text}>
                                        <h3 className={styles.film__title}>Баста. Суперигра</h3>
                                        <h4 className={styles.film__time}>2022, 1:38 часа</h4>
                                        <p className={styles.film__descr}>Женщина делает домашний анализ ДНК и обнаруживает множество близкихродствен никовродственни ковродс твенников родственник овродств енников авыаыаыа а ыва выа выа выа а а выа ыва ыа ыва ыва а а ыа ываа ы ыв аыа вы аы а а аыва ыв авы а родственников. Женщина делает домашний анализ ДНК и обнаруживает множество близких родственников.Так всплывает шокирующая и тому подобное</p>
                                    </div>
                                </div>
                                <div className={styles.film__additionalInfo}>
                                    <div className={styles.film__rating}>6.6</div>
                                    {
                                        !lol2 ? (
                                            <div className={styles.film__addFavourites}>
                                                <Button variant="contained" startIcon={favourites} onClick={() => setLol(prevState => !prevState)}>
                                                    Буду смотреть
                                                </Button>
                                            </div>
                                        ) : (
                                            <div className={styles.film__deleteFavourites}>
                                                <Button variant="contained" startIcon={checkMark} onClick={() => setLol(prevState => !prevState)}>
                                                    Буду смотреть
                                                </Button>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>

                        </div>

                    </div>
                </Container>
            </Container>
        </div>
    )
}

export default Catalog;