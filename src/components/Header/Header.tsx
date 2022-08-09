import styles from "../../style/components/Header.module.scss";
import logo from "../../assets/img/header/logo.png"
import Container from "../Container/Container";
import classNames from "classnames";
import {useState} from "react";
const Header = () => {
    const [isOpenInput, setIsOpenInput] = useState(false);
    return (
        <header className={classNames(styles.header, styles.app__header)}>
            <Container>
                <div className={styles.header__info}>
                    <div className={styles.header__burger}>

                    </div>
                    <div className={styles.header__logo}>
                        <img src={logo} alt=""/>
                    </div>
                </div>
                <div className={styles.header__search}>
                    <div className={classNames(styles.header__field, { [styles.header__field_hidden]: !isOpenInput })}>
                        <div className={styles.header__arrow} onClick={() => setIsOpenInput(false)}>
                            <img src="https://cdn-icons-png.flaticon.com/128/130/130882.png" alt=""/>
                        </div>
                        <div className={classNames(styles.header__input)}>
                            <input type="text"/>
                        </div>
                        <div className={styles.header__cross} onClick={() => setIsOpenInput(false)}>
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828778.png" alt=""/>
                        </div>
                        <div className={styles.header__searchIcon}>
                            <img src="https://cdn-icons-png.flaticon.com/128/149/149852.png" alt=""/>
                        </div>
                    </div>
                    <div className={styles.header__searchPopup}>
                        <div className={styles.header__category}>
                            <div className={styles.header__category_buttons}>
                                <div className={classNames(styles.header__category_button, styles.header__category_activeButton)}>
                                    Фильмы
                                </div>
                                <div className={styles.header__category_button}>
                                    Сериалы
                                </div>
                                <div className={styles.header__category_button}>
                                    Мультики
                                </div>
                            </div>
                        </div>
                        <div className={styles.header__filmsContent}>
                            {/*<div className={styles.header__filmsContent_empty}>
                                По вашему запросу ничего не найдено
                            </div>*/}
                            <div className={styles.header__filmsContent_noEmpty}>
                                <div className={styles.header__film}>
                                    <div className={styles.header__filmInfo}>
                                        <div className={styles.header__filmImg}>
                                            <img src="https://st.kp.yandex.net/images/film_big/4961816.jpg" alt=""/>
                                        </div>
                                        <div className={styles.header__filmContent}>
                                            <p className={styles.header__filmTitle}>Джери и Марша играют по крупному</p>
                                            <p className={styles.header__filmTime}>2022, 96 мин</p>
                                        </div>
                                    </div>
                                    <div className={styles.header__filmRating}>
                                        6.7
                                    </div>
                                </div>
                                <div className={styles.header__film}>
                                    <div className={styles.header__filmInfo}>
                                        <div className={styles.header__filmImg}>
                                            <img src="https://st.kp.yandex.net/images/film_big/4961816.jpg" alt=""/>
                                        </div>
                                        <div className={styles.header__filmContent}>
                                            <p className={styles.header__filmTitle}>Джери и Марша играют по крупному</p>
                                            <p className={styles.header__filmTime}>2022, 96 мин</p>
                                        </div>
                                    </div>
                                    <div className={styles.header__filmRating}>
                                        6.7
                                    </div>
                                </div>
                                <div className={styles.header__film}>
                                    <div className={styles.header__filmInfo}>
                                        <div className={styles.header__filmImg}>
                                            <img src="https://st.kp.yandex.net/images/film_big/4961816.jpg" alt=""/>
                                        </div>
                                        <div className={styles.header__filmContent}>
                                            <p className={styles.header__filmTitle}>Джери и Марша играют по крупному</p>
                                            <p className={styles.header__filmTime}>2022, 96 мин</p>
                                        </div>
                                    </div>
                                    <div className={styles.header__filmRating}>
                                        6.7
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.header__showAll}>
                            Показать всё
                        </div>
                    </div>
                </div>
                <div className={styles.header__loginStatus}>
                    <p>Войти</p>
                    <div className={styles.header__searchIcon_right} onClick={() => setIsOpenInput(true)}>
                        <img src="https://cdn-icons-png.flaticon.com/128/149/149852.png" alt=""/>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header;