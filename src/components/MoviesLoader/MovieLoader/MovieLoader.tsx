import React from "react"
import ContentLoader from "react-content-loader"
import styles from "./MovieLoader.module.scss"

export interface MovieLoaderProps extends React.HTMLAttributes<any> {
    width: number;
    height: number;
}


const MovieLoader:React.FC<MovieLoaderProps> = React.memo(({ width, height }) => (
    <div className={styles.movieLoader}>
        <ContentLoader
            speed={2}
            width={width}
            height={height}
            backgroundColor="#333"
            foregroundColor="#222"
            style={{ borderRadius: 7 }}
        >
            <rect x="0" y="0" rx="0" ry="0" width={width} height={height} />
        </ContentLoader>
    </div>
))

export default MovieLoader;
