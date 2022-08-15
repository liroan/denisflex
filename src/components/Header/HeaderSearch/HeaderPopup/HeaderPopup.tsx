import classNames from "classnames";
import styles from "./HeaderPopup.module.scss";
import React, {Dispatch, FC, SetStateAction, useState} from "react";
import Category from "./Category/Category";
import FilmsPopup from "./FilmsPopup/FilmsPopup";
import {useGetFiltersMovieQuery} from "../../../../services/services";
import {MovieType} from "../../../../types/types";
import {initialStateFilter} from "../../../../store/filtersSlice";
import {Link} from "react-router-dom";
import FilmsPopupPreloader from "./FilmsPopupPreloader/FilmsPopupPreloader";
import EmptyFilms from "./FilmsPopup/EmptyFilms/EmptyFilms";
const films = [
    {id: 1, img: "https://st.kp.yandex.net/images/film_big/4961816.jpg", name: "Джери и Марша играют по крупному", year: 2022, minutes: 96},
    {id: 1, img: "https://st.kp.yandex.net/images/film_big/4961816.jpg", name: "Джери и Марша играют по крупному", year: 2022, minutes: 96},
    {id: 1, img: "https://st.kp.yandex.net/images/film_big/4961816.jpg", name: "Джери и Марша играют по крупному", year: 2022, minutes: 96},
]

interface HeaderPopupProps {
    valueSearch: string;
    type: MovieType;
    setType: React.Dispatch<React.SetStateAction<MovieType>>;
    closeSearchPopup: () => void;
}

const HeaderPopup:FC<HeaderPopupProps> = ({ valueSearch, type, setType, closeSearchPopup }) => {


    return (
        <div className={classNames(styles.header__searchPopup)}>
            <Category type={type} setType={setType} />
            { valueSearch ? <FilmsPopup type={type} valueSearch={valueSearch} /> : <EmptyFilms>Фильмы будут загружены после того, как вы перестанете вводить</EmptyFilms>}
            <div className={styles.header__showAll}>
                <Link to={`/catalog?type=${type}&keyword=${valueSearch}`} onClick={closeSearchPopup}>Показать всё</Link>
            </div>
        </div>
    )
}

export default HeaderPopup;