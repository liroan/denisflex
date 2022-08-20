import {useEffect, useState} from "react";
import {getDataWindow} from "../utils/utils";

const useSizeWindow = () => {
    const [sizeWindow, setSizeWindow] = useState(getDataWindow());
    useEffect(() => {
        const resize = () => {
            setSizeWindow(getDataWindow())
        }
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    }, [])
    return sizeWindow;
}

export default useSizeWindow;

