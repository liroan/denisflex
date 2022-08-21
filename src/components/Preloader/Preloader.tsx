import React from "react";
import preloader from "../../assets/img/preloader/preloader.json";
import Lottie from 'react-lottie';

const Preloader = React.memo(() => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: preloader,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div style={{ width: "100vw", height: "100vh", background: "#000", zIndex: 10000000, position: 'relative',
            display: "flex", alignItems: "center", overflow: "hidden" }}>
            <Lottie options={defaultOptions} height={400} width={400} />;
        </div>
    )
})


export default Preloader;