import styles from './CatalogPreloader.module.scss';
import {Skeleton} from "@mui/material";
import React from "react";


const CatalogPreloaderFilm = () => {
    return (
        <div className={styles.preloader}>
            <div className={styles.preloader__info}>
                <div className={styles.preloader__poster}>
                    <Skeleton variant="rounded" width={64} height={96} />
                </div>
                <div className={styles.preloader__text}>
                    <div className={styles.preloader__title}><Skeleton variant="rounded" width={300} height={22} /></div>
                    <div className={styles.preloader__time}><Skeleton variant="rectangular" width={50} height={20} /></div>
                    <div className={styles.preloader__descr}> <Skeleton variant="rectangular" width={400} height={40} /></div>
                </div>
            </div>
        </div>
    )
}

const CatalogPreloader = () => {
    return (
       <div>
           { new Array(10).fill(0).map((_, i) => <CatalogPreloaderFilm key={i}/>) }
       </div>
    )
}

export default CatalogPreloader;