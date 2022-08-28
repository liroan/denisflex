import React from "react";
import error from "../../assets/img/error/errorGif.json";
import Lottie from 'react-lottie';

const ErrorContent = React.memo(() => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: error,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return <Lottie options={defaultOptions} height="auto" width="calc(min(400px, 60%))" />;
})


export default ErrorContent;