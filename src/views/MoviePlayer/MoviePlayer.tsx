import {FC, useEffect} from "react";
import styles from "./MoviePlayer.module.scss"
import Back from "../../components/Back/Back";
import {useParams} from "react-router-dom";

interface MoviePlayerProps {
    title?: string;
    id?: number;
}

const MoviePlayer:FC<MoviePlayerProps> = ({ title}) => {

    const { filmId } = useParams();

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//yohoho.cc/yo.js";
        document.body.appendChild(script);
        return () => {
            script.remove();
        };
    }, [])

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [])

    return (
        <div className={styles.video}>
            <div className={styles.video__header}>
                <Back title={title} />
            </div>
            <div className={styles.video__container}>
                <div className={styles.video__movie} id="yohoho" data-kinopoisk={filmId} />
            </div>
        </div>
    )
}

export default MoviePlayer;