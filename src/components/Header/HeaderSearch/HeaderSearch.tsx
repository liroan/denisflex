import styles from "./HeaderSearch.module.scss";
import classNames from "classnames";
import React, {Dispatch, FC, MutableRefObject, RefObject, SetStateAction, useEffect, useRef, useState} from "react";
import HeaderField from "./HeaderField/HeaderField";
import Header from "../Header";
import HeaderPopup from "./HeaderPopup/HeaderPopup";
import {MovieType} from "../../../types/types";

interface HeaderSearchProps {
    isOpenInput: boolean;
    setIsOpenInput: Dispatch<SetStateAction<boolean>>;
    openInputIconRef: RefObject<HTMLDivElement>;
}


const HeaderSearch:FC<HeaderSearchProps> = ({isOpenInput, setIsOpenInput, openInputIconRef}) => {

    const [isOpenSearchPopup, setIsOpenSearchPopup] = useState(false);
    const [inputKeyword, setInputKeyword] = useState('');
    const [queryKeyword, setQueryKeyword] = useState('');
    const [timeoutId, setTimeoutId] = useState<ReturnType<typeof setTimeout> | undefined>();
    const [type, setType] = useState<MovieType>("ALL");
    const popupSearchRef = useRef<HTMLDivElement>(null);

    const onChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setInputKeyword(value)
        setIsOpenSearchPopup(true)
        setIsOpenInput(true)
        clearTimeout(timeoutId);

        setTimeoutId(setTimeout(() => {
            setQueryKeyword(value);
            if (!value) setIsOpenSearchPopup(false)
        }, 1000))
    }

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

    const closePopupWithDeleteKeyword = () => {
        closePopupWithSaveKeyword();
        setQueryKeyword('');
        setInputKeyword('');
    }

    const closePopupWithSaveKeyword = () => {
        setIsOpenSearchPopup(false);
        setIsOpenInput(false);
    }

    return (
        <div ref={popupSearchRef} className={classNames(styles.header__search, { [styles.header__search_hidden]: !isOpenInput })}>
            <HeaderField onChangeKeyword={onChangeKeyword} setIsOpenInput={setIsOpenInput} setIsOpenSearchPopup={setIsOpenSearchPopup}
                         queryKeyword={queryKeyword} closePopupWithDeleteKeyword={closePopupWithDeleteKeyword} type={type}
                         inputKeyword={inputKeyword}
            />
            { isOpenSearchPopup && <HeaderPopup queryKeyword={queryKeyword} type={type} setType={setType}
                                                closePopupWithDeleteKeyword={closePopupWithDeleteKeyword}/> }
        </div>
    )
}

export default HeaderSearch;