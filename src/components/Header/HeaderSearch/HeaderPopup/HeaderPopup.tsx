import classNames from "classnames";
import styles from "./HeaderPopup.module.scss";
import React, {FC, useEffect} from "react";
import Category from "./Category/Category";
import FilmsPopup from "./FilmsPopup/FilmsPopup";
import {MovieType} from "../../../../types";
import {Link} from "react-router-dom";
import EmptyFilms from "./FilmsPopup/EmptyFilms/EmptyFilms";
import useSizeWindow from "../../../../hooks/useSizeWindow";


interface HeaderPopupProps {
    queryKeyword: string;
    type: MovieType;
    setType: React.Dispatch<React.SetStateAction<MovieType>>;
    closePopupWithDeleteKeyword: () => void;
}

const HeaderPopup:FC<HeaderPopupProps> = React.memo(({ queryKeyword, type, setType, closePopupWithDeleteKeyword }) => {

    const { width } = useSizeWindow();

    useEffect(() => { // убираем второй скролл у окна фильтров
        document.body.style.overflowY = width <= 850 ? "hidden" : "unset";
        return () => {
            document.body.style.overflowY = "unset";
        }
    }, [width])

    return (
        <div className={classNames(styles.header__searchPopup)}>
            <Category type={type} setType={setType} />
            <div className={classNames(styles.header__filmsWrapper)}>
                { queryKeyword ?
                    <FilmsPopup type={type} queryKeyword={queryKeyword} /> :
                    <EmptyFilms>Фильмы будут загружены после того, как вы перестанете вводить</EmptyFilms>
                }
            </div>
            <div className={styles.header__showAll}>
                <Link to={`/catalog?type=${type}&keyword=${queryKeyword}`} onClick={closePopupWithDeleteKeyword}>Показать всё</Link>
            </div>
        </div>
    )
})

export default HeaderPopup;