import styles from "./HeaderSearch.module.scss";
import classNames from "classnames";
import {FC, useState} from "react";


const HeaderSearch:FC<any> = ({isOpenInput, setIsOpenInput}) => {
    const [isOpenSearchPopup, setIsOpenSearchPopup] = useState(false);
    const [value, setValue] = useState('');

    const editValue = (e: any) => {
        setValue(e.target.value)
        setIsOpenSearchPopup(e.target.value != '')
    }

    return (
        <div className={classNames(styles.header__search, { [styles.header__search_hidden]: !isOpenInput })}>
            <div className={classNames(styles.header__field)}>
                <div className={styles.header__arrow} onClick={() => setIsOpenInput(false)}>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="15 18 9 12 15 6"></polyline></svg>                </div>
                <div className={classNames(styles.header__input)}>
                    <input type="text" value={value} onChange={editValue} placeholder="Поиск..."/>
                </div>
                <div className={styles.header__cross} onClick={() => setIsOpenInput(false)}>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </div>
                <div className={styles.header__searchIcon}>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </div>
            </div>
            <div className={classNames(styles.header__searchPopup, { [styles.header__searchPopup_open]: isOpenSearchPopup })}>
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
    )
}

export default HeaderSearch;