import React from "react";
import errorScreen from "../../assets/img/error/errorScreen.json";
import Lottie from 'react-lottie';
import styles from "./ErrorScreen.module.scss"
const ErrorScreen = React.memo(() => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: errorScreen,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return <div className={styles.errorScreen}>
        <Lottie options={defaultOptions} height="auto" width="calc(min(400px, 60%))" />;
    </div>
})


export default ErrorScreen;