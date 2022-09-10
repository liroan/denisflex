import {FC, useEffect} from "react";
import styles from "./Room.module.scss"
import {Back} from "../../components";
import {useLocation, useParams} from "react-router-dom";

interface RoomProps {
    title?: string;
    id?: number;
}


const Room:FC<RoomProps> = ({ title}) => {

    const { filmId } = useParams();
    const location = useLocation();
    const locationState = location.state as { name: string };
    
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
        window.scrollTo(0, 0);
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [])

    return (
        <div className={styles.video}>
            <div className={styles.video__header}>
                <Back title={locationState?.name || title} />
            </div>
            <div className={styles.video__container}>
                <div className={styles.video__movie} id="yohoho" data-kinopoisk={filmId} />
            </div>
        </div>
    )
}

export default Room;