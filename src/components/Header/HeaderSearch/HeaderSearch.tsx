import styles from "./HeaderSearch.module.scss";
import classNames from "classnames";
import React, {
    Dispatch,
    FC,
    RefObject,
    SetStateAction,
    useCallback,
    useEffect,
    useRef,
    useState
} from "react";
import HeaderField from "./HeaderField/HeaderField";
import HeaderPopup from "./HeaderPopup/HeaderPopup";
import {MovieType} from "../../../types/types";
import {useLocation} from "react-router-dom";

interface HeaderSearchProps {
    isOpenInput: boolean;
    setIsOpenInput: Dispatch<SetStateAction<boolean>>;
    openInputIconRef: RefObject<HTMLDivElement>;
}


const HeaderSearch:FC<HeaderSearchProps> = React.memo(({isOpenInput, setIsOpenInput, openInputIconRef}) => {

    const [isOpenSearchPopup, setIsOpenSearchPopup] = useState(false);
    const [queryKeyword, setQueryKeyword] = useState('');
    const [type, setType] = useState<MovieType>("ALL");
    const popupSearchRef = useRef<HTMLDivElement>(null);
    const inputSearchRef = useRef<HTMLInputElement>(null);
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const location = useLocation();

    useEffect(() => {
        const closeOpenMenu = (e: MouseEvent) => {
            const event = e as MouseEvent & { path: Node[]; };
            if (popupSearchRef.current && openInputIconRef.current &&
                !event.path.includes(popupSearchRef.current) && !event.path.includes(openInputIconRef.current)) {
                closePopupWithSaveKeyword();
            }
        }
        window.addEventListener('click', closeOpenMenu);
        return () => window.removeEventListener('click', closeOpenMenu);
    }, [])

    useEffect(() => {
        closePopupWithDeleteKeyword();
    }, [location]);

    const onChangeKeyword = useCallback(() => {
        if (!inputSearchRef.current) return;
        const { value } = inputSearchRef.current;
        setIsOpenSearchPopup(true)
        setIsOpenInput(true)
        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(() => {
            setQueryKeyword(value);
            if (!value) setIsOpenSearchPopup(false)
        }, 500)
    }, [])

    const closePopupWithDeleteKeyword = useCallback(() => {
        closePopupWithSaveKeyword();
        setQueryKeyword('');
        if (inputSearchRef.current?.value) inputSearchRef.current.value = '';
    }, [])


    const closePopupWithSaveKeyword = useCallback(() => {
        setIsOpenSearchPopup(false);
        setIsOpenInput(false);
    }, [])

    return (
        <div ref={popupSearchRef} className={classNames(styles.header__search, { [styles.header__search_hidden]: !isOpenInput })}>
            <HeaderField onChangeKeyword={onChangeKeyword}
                         setIsOpenInput={setIsOpenInput}
                         setIsOpenSearchPopup={setIsOpenSearchPopup}
                         queryKeyword={queryKeyword}
                         closePopupWithDeleteKeyword={closePopupWithDeleteKeyword} type={type}
                         inputSearchRef={inputSearchRef}
            />
            { isOpenSearchPopup && <HeaderPopup queryKeyword={queryKeyword}
                                                type={type}
                                                setType={setType}
                                                closePopupWithDeleteKeyword={closePopupWithDeleteKeyword}/> }
        </div>
    )
})

export default HeaderSearch;