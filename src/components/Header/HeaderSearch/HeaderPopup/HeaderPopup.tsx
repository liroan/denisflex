import classNames from "classnames";
import styles from "./HeaderPopup.module.scss";
import React, {FC} from "react";
import Category from "./Category/Category";
import FilmsPopup from "./FilmsPopup/FilmsPopup";
import {MovieType} from "../../../../types/types";
import {Link} from "react-router-dom";
import EmptyFilms from "./FilmsPopup/EmptyFilms/EmptyFilms";


interface HeaderPopupProps {
    queryKeyword: string;
    type: MovieType;
    setType: React.Dispatch<React.SetStateAction<MovieType>>;
    closePopupWithDeleteKeyword: () => void;
}

const HeaderPopup:FC<HeaderPopupProps> = React.memo(({ queryKeyword, type, setType, closePopupWithDeleteKeyword }) => {

    return (
        <div className={classNames(styles.header__searchPopup)}>
            <Category type={type} setType={setType} />
            { queryKeyword ?
                <FilmsPopup type={type} queryKeyword={queryKeyword} /> :
                <EmptyFilms>Фильмы будут загружены после того, как вы перестанете вводить</EmptyFilms>
            }
            <div className={styles.header__showAll}>
                <Link to={`/catalog?type=${type}&keyword=${queryKeyword}`} onClick={closePopupWithDeleteKeyword}>Показать всё</Link>
            </div>
        </div>
    )
})

export default HeaderPopup;