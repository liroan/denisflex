import styles from "./MoviesLoader.module.scss"
import MovieLoader from "./MovieLoader/MovieLoader";
import React, {FC} from "react";

interface MoviesLoaderProps {
    width: number;
    height: number;
}

const MoviesLoader: FC<MoviesLoaderProps> = React.memo(({width, height}) => {
    return (
        <div className={styles.moviesLoader}>
            {
                new Array(10)
                    .fill(0)
                    .map((_, index) => <MovieLoader key={index} width={width} height={height}/>)
            }
        </div>
    )
})


export default MoviesLoader;