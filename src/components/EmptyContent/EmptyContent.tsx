import React from "react";
import empty from "../../assets/img/empty/empty.json";
import Lottie from 'react-lottie';

const EmptyContent = React.memo(() => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: empty,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return <Lottie options={defaultOptions} height="auto" width="calc(min(400px, 60%))" />;
})


export default EmptyContent;