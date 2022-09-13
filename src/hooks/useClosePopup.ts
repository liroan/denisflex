import React, {useEffect} from "react";


const useClosePopup = (handlerClick: (ref: React.RefObject<HTMLDivElement>, event: MouseEvent & {path: Node[]}) => void) => {
    const popupRef = React.useRef<HTMLDivElement>(null);
    useEffect(() => {
        const closeOpenMenu = (e: MouseEvent) => {
            const event = e as MouseEvent & { path: Node[]; };
            handlerClick(popupRef, event);
        }
        window.addEventListener('click', closeOpenMenu);
        return () => window.removeEventListener('click', closeOpenMenu);
    }, [])
    return popupRef;
}

export default useClosePopup;