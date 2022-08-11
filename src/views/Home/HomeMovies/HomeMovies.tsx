import styles from "./HomeMovies.module.scss";
import classNames from "classnames";
import Slider from "../../../components/Slider/Slider";
import React, {FC, useRef} from "react";


const HomeMovies:FC<any> = ({ movies, isGenre, isLoading, error, title }) => {
    if (error || (!movies && !isLoading)) return <div>Не удалось загрузить фильмы</div>;
    if (isLoading) return <div>Загрузка</div>
    return (
        <div className={styles.home__movies}>
            <div className={styles.home__movieChapterContainer}>
                <div className={classNames(styles.home__movieChapter, styles.movieChapter)}>
                    <div className={styles.movieChapter__title}><h3>{title}</h3></div>
                    <Slider movies={movies} isGenre={isGenre}/>
                </div>
            </div>
        </div>
    )
}

export default HomeMovies;