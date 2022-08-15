import styles from "./FilmPopupPreloader.module.scss";
import {Skeleton} from "@mui/material";
import React from "react";


const FilmPopupPreloader = () => {
    return (
        <div className={styles.preloader}>
            <div className={styles.preloader__info}>
                <div className={styles.preloader__poster}>
                    <Skeleton variant="rounded" width={32} height={48} />
                </div>
                <div className={styles.preloader__text}>
                    <div className={styles.preloader__title}><Skeleton variant="rounded" width={120} height={22} /></div>
                    <div className={styles.preloader__time}><Skeleton variant="rectangular" width={50} height={20} /></div>
                </div>
            </div>
            <div className={styles.preloader__additionalInfo}>
                <div className={styles.preloader__rating}><Skeleton variant="rounded" width={25} height={25} /></div>
            </div>
        </div>
    )
}

const FilmsPopupPreloader = () => {
    return (
        <div style={{ width: '100%', maxHeight: 500, overflowY: 'auto' }}>
            <FilmPopupPreloader />
            <FilmPopupPreloader />
            <FilmPopupPreloader />
            <FilmPopupPreloader />
            <FilmPopupPreloader />
            <FilmPopupPreloader />
            <FilmPopupPreloader />
            <FilmPopupPreloader />
        </div>
    )
}

export default FilmsPopupPreloader;