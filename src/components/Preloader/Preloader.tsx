import React, {useEffect} from "react";
import preloader from "../../assets/img/preloader/preloader.json";
import Lottie from 'react-lottie';
import styles from "./Preloader.module.scss"
const Preloader = React.memo(() => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: preloader,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "unset";
        }
    }, [])

    return (

        <div className={styles.preloader}>
            <Lottie options={defaultOptions} height="auto" width="calc(min(400px, 60%))" />;
        </div>
    )
})


export default Preloader;