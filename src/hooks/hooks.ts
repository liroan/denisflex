import {AppDispatch, RootState} from "../types/types";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getDataWindow} from "../utils/utils";


export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


export const useSizeWindow = () => {
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