import classNames from "classnames";
import styles from "./HeaderPopup.module.scss";
import React, {Dispatch, FC, SetStateAction} from "react";
import Category from "./Category/Category";
import FilmsPopup from "./FilmsPopup/FilmsPopup";
const films = [
    {id: 1, img: "https://st.kp.yandex.net/images/film_big/4961816.jpg", name: "Джери и Марша играют по крупному", year: 2022, minutes: 96},
    {id: 1, img: "https://st.kp.yandex.net/images/film_big/4961816.jpg", name: "Джери и Марша играют по крупному", year: 2022, minutes: 96},
    {id: 1, img: "https://st.kp.yandex.net/images/film_big/4961816.jpg", name: "Джери и Марша играют по крупному", year: 2022, minutes: 96},
]

interface HeaderPopupProps {
    isOpenSearchPopup: boolean;
}

const HeaderPopup:FC<HeaderPopupProps> = ({ isOpenSearchPopup }) => {
    return (
        <div className={classNames(styles.header__searchPopup, { [styles.header__searchPopup_open]: isOpenSearchPopup })}>
            <Category />
            <FilmsPopup movies={films} />
            <div className={styles.header__showAll}>
                Показать всё
            </div>
        </div>
    )
}

export default HeaderPopup;