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
import {MovieType} from "../../../types";
import {useLocation} from "react-router-dom";
import {useDebounce} from "../../../hooks";

interface HeaderSearchProps {
    isOpenInput: boolean;
    setIsOpenInput: Dispatch<SetStateAction<boolean>>;
    openInputIconRef: RefObject<HTMLDivElement>;
}


const HeaderSearch:FC<HeaderSearchProps> = React.memo(({isOpenInput, setIsOpenInput, openInputIconRef}) => {

    const [isOpenSearchPopup, setIsOpenSearchPopup] = useState(false);
    const [type, setType] = useState<MovieType>("ALL");
    const popupSearchRef = useRef<HTMLDivElement>(null);
    const inputSearchRef = useRef<HTMLInputElement>(null);
    const location = useLocation();
    const [inputKeyword, setInputKeyword] = useState('');

    const closePopup = useCallback(() => {
        setIsOpenSearchPopup(false);
        setIsOpenInput(false);
    }, [])

    const action = useCallback((value: string, debounced: string) => {
        if (!value && !debounced) closePopup()
    }, [])

    const queryKeyword = useDebounce(inputKeyword, 700, action);

    useEffect(() => {
        const closeOpenMenu = (e: MouseEvent) => {
            const event = e as MouseEvent & { path: Node[]; };
            if (popupSearchRef.current && openInputIconRef.current &&
                !event.path.includes(popupSearchRef.current) && !event.path.includes(openInputIconRef.current)) {
                closePopup();
            }
        }
        window.addEventListener('click', closeOpenMenu);
        return () => window.removeEventListener('click', closeOpenMenu);
    }, [])

    useEffect(() => {
        closePopupWithDeleteKeyword();
    }, [location]);

    const onChangeKeyword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setIsOpenSearchPopup(true)
        setIsOpenInput(true)
        setInputKeyword(e.target.value);
    }, [])

    const closePopupWithDeleteKeyword = useCallback(() => {
        closePopup();
        setInputKeyword('');
    }, [])


    return (
        <div ref={popupSearchRef} className={classNames(styles.header__search, { [styles.header__search_hidden]: !isOpenInput })}>
            <HeaderField onChangeKeyword={onChangeKeyword}
                         inputKeyword={inputKeyword}
                         setIsOpenInput={setIsOpenInput}
                         setIsOpenSearchPopup={setIsOpenSearchPopup}
                         queryKeyword={queryKeyword}
                         closePopupWithDeleteKeyword={closePopupWithDeleteKeyword} type={type}
                         closePopup={closePopup}
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