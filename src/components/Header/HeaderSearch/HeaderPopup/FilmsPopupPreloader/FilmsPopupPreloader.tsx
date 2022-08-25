import styles from "./FilmPopupPreloader.module.scss";
import {Skeleton} from "@mui/material";
import React from "react";


const FilmPopupPreloader = React.memo(() => {
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
        </div>
    )
})

const FilmsPopupPreloader = React.memo(() => {
    return (
        <div style={{ width: '100%', maxHeight: 500, overflowY: 'auto' }}>
            { new Array(10).fill(0).map((_, i) => <FilmPopupPreloader key={i} />)  }
        </div>
    )
})

export default FilmsPopupPreloader;