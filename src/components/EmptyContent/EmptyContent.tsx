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

    return <Lottie options={defaultOptions} height={400} width={400} />;
})


export default EmptyContent;