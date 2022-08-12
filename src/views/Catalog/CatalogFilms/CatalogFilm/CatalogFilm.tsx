import React, {FC, useState} from "react";
import styles from "./CatalogFilm.module.scss";
import {Button} from "@mui/material";
import OpacityButton from "../../../../components/Buttons/OpacityButton/OpacityButton";
import RedButton from "../../../../components/Buttons/RedButton/RedButton";


const CatalogFilm:FC = () => {

    const [isFavourite, setIsFavourite] = useState(false)

    const favourites = <svg stroke="#fff" fill="#fff" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>;
    const checkMark = <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>

    return (
        <div className={styles.film}>
            <div className={styles.film__info}>
                <div className={styles.film__poster}>
                    <img src="https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/82e2dd2f-74bc-40af-94ad-548f02b316b6/360" alt=""/>
                </div>
                <div className={styles.film__text}>
                    <h3 className={styles.film__title}>Баста. Суперигра</h3>
                    <h4 className={styles.film__time}>2022, 1:38 часа</h4>
                    <p className={styles.film__descr}>Женщина делает домашний анализ ДНК и обнаруживает множество близкихродствен никовродственни ковродс твенников родственник овродств енников авыаыаыа а ыва выа выа выа а а выа ыва ыа ыва ыва а а ыа ываа ы ыв аыа вы аы а а аыва ыв авы а родственников. Женщина делает домашний анализ ДНК и обнаруживает множество близких родственников.Так всплывает шокирующая и тому подобное</p>
                </div>
            </div>
            <div className={styles.film__additionalInfo}>
                <div className={styles.film__rating}>6.6</div>
                {
                    /*!isFavourite ? <OpacityButton onClick={() => setIsFavourite(true)} startIcon={favourites}>Буду смотреть</OpacityButton>
                        : <RedButton onClick={() => setIsFavourite(false)} startIcon={checkMark}>Буду смотреть</RedButton>*/
                    !isFavourite ? (
                        <div className={styles.film__addFavourites}>
                            <Button variant="contained" startIcon={favourites} onClick={() => setIsFavourite(true)}>
                                Буду смотреть
                            </Button>
                        </div>
                    ) : (
                        <div className={styles.film__deleteFavourites}>
                            <Button variant="contained" startIcon={checkMark} onClick={() => setIsFavourite(false)}>
                                Буду смотреть
                            </Button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default CatalogFilm;