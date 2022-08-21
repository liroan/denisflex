import React from "react";
import errorScreen from "../../assets/img/error/errorScreen.json";
import Lottie from 'react-lottie';

const ErrorScreen = React.memo(() => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: errorScreen,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return <div style={{ width: "100vw", height: "100vh", background: "#333", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <Lottie options={defaultOptions} height={500} width={500} />;
    </div>
})


export default ErrorScreen;