import {FC, useState} from "react";
import styles from "./Catalog.module.scss";
import Container from "../../components/Container/Container";
import classNames from "classnames";
import {Button} from "@mui/material";

const Catalog:FC = () => {
    const [lol, setLol] = useState(true);
    const favourites = <svg stroke="#fff" fill="#fff" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>;
    const checkMark = <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
    return (
        <div className={styles.catalog}>
            <Container>
                <Container>
                    <div className={styles.catalog__meta}>
                        <h2 className={styles.catalog__title}>Все фильмы</h2>
                        <h3 className={styles.catalog__subtitle}>Подборка фильмов всего мира</h3>
                    </div>
                    <div className={styles.catalog__mainInfo}>
                        <div className={classNames(styles.catalog__filter, styles.filter)}>
                            <div className={styles.filter__info}>
                                <div className={styles.filter__mark}>Рейтинг: 1 - 10</div>
                                <div className={styles.filter__mark}>Года производства: 1960 - 2022</div>
                                <div className={styles.filter__mark}>Жанр: Все жанры</div>
                                <div className={styles.filter__mark}>Год выхода: Сначала новые</div>
                            </div>
                            <div className={classNames(styles.filter__accordion, styles.accordion)}>
                                <div className={styles.accordion__title}>
                                    <h6>Рейтинг</h6>
                                    <div className={classNames(styles.accordion__arrow, { [styles.accordion__arrow_rotate]: lol })} onClick={() => setLol(prevState => !prevState)}>
                                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                    </div>
                                </div>
                                {
                                    lol && (
                                        <div style={{ height: 100, background: '#888' }}>lol</div>
                                    )
                                }
                            </div>
                            <div className={classNames(styles.filter__accordion, styles.accordion)}>
                                <div className={styles.accordion__title}>
                                    <h6>Годы производства</h6>
                                    <div className={classNames(styles.accordion__arrow, { [styles.accordion__arrow_rotate]: lol })} onClick={() => setLol(prevState => !prevState)}>
                                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                    </div>
                                </div>
                                {
                                    lol && (
                                        <div style={{ height: 100, background: '#888' }}>lol</div>
                                    )
                                }
                            </div>
                            <div className={classNames(styles.filter__accordion, styles.accordion)}>
                                <div className={styles.accordion__title}>
                                    <h6>Жанры</h6>
                                    <div className={classNames(styles.accordion__arrow, { [styles.accordion__arrow_rotate]: lol })} onClick={() => setLol(prevState => !prevState)}>
                                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                    </div>
                                </div>
                                {
                                    lol && (
                                        <div className={classNames(styles.filter__select)}>
                                            <select>
                                                <option value="grapefruit">Грейпфрут</option>
                                                <option value="lime">Лайм</option>
                                                <option selected value="coconut">Кокос</option>
                                                <option value="lime">Лайм</option>
                                                <option selected value="coconut">Кокос</option>
                                                <option value="lime">Лайм</option>
                                                <option selected value="coconut">Кокос</option> <option value="lime">Лайм</option>
                                                <option selected value="coconut">Кокос</option> <option value="lime">Лайм</option>
                                                <option selected value="coconut">Кокос</option>
                                                <option value="mango">Манго</option>
                                            </select>
                                            <div className={classNames(styles.filter__selectArrow)}>
                                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
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
                                        !lol ? (
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
                                        !lol ? (
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
                                        !lol ? (
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