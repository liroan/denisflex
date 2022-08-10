import styles from "./HomeMovies.module.scss";
import classNames from "classnames";
import Slider from "../../../components/Slider/Slider";
import React, {FC, useRef} from "react";


const HomeMovies:FC<any> = ({ films, isGenre }) => {
    return (
        <div className={styles.home__movies}>
            <div className={styles.home__movieChapterContainer}>
                <div className={classNames(styles.home__movieChapter, styles.movieChapter)}>
                    <div className={styles.movieChapter__title}><h3>Новинки</h3></div>
                    <Slider films={films} isGenre={isGenre}/>
                </div>
            </div>
        </div>
    )
}

export default HomeMovies;