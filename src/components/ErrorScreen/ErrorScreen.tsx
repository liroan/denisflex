import React, {FC} from "react";
import errorScreen from "../../assets/img/error/errorScreen.json";
import Lottie from 'react-lottie';
import styles from "./ErrorScreen.module.scss"

const ErrorScreen:FC<{ text?: string }> = React.memo(({text}) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: errorScreen,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className={styles.errorScreen}>
            <div>
                <h2>{text}</h2>
                <Lottie options={defaultOptions} height="auto" width="calc(min(400px, 60%))" />
            </div>
        </div>
    )
})


export default ErrorScreen;