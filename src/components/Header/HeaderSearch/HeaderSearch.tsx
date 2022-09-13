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
import useClosePopup from "../../../hooks/useClosePopup";

interface HeaderSearchProps {
    isOpenInput: boolean;
    setIsOpenInput: Dispatch<SetStateAction<boolean>>;
    openInputIconRef: RefObject<HTMLDivElement>;
}


const HeaderSearch:FC<HeaderSearchProps> = React.memo(({isOpenInput, setIsOpenInput, openInputIconRef}) => {

    const [isOpenSearchPopup, setIsOpenSearchPopup] = useState(false);
    const [type, setType] = useState<MovieType>("ALL");
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

    const handleClickAwayPopup = useCallback((ref: React.RefObject<HTMLDivElement>, event: MouseEvent & {path: Node[]}) => {
        if (popupRef.current &&
            openInputIconRef.current &&
            !event.path.includes(popupRef.current) &&
            !event.path.includes(openInputIconRef.current)) {
                closePopup();
        }
    }, [])

    const popupRef = useClosePopup(handleClickAwayPopup);

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
        <div ref={popupRef} className={classNames(styles.header__search, { [styles.header__search_hidden]: !isOpenInput })}>
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