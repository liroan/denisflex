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
    const [valueSearch, setValueSearch] = useState<string>('');
    const [timeoutId, setTimeoutId] = useState<ReturnType<typeof setTimeout> | undefined>();
    const [type, setType] = useState<MovieType>("ALL");
    const myRef = useRef<HTMLInputElement>()
    const PopupSearch = useRef<HTMLDivElement>(null);

    const editValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        clearTimeout(timeoutId);
        setIsOpenSearchPopup(true)
        setTimeoutId(setTimeout(() => {
            setValueSearch(myRef?.current?.value || "");
            if (!myRef?.current?.value) setIsOpenSearchPopup(false)
        }, 1000))
    }

    useEffect(() => {
        const closeOpenMenu = (e: any) => {
            if (PopupSearch.current && !e.path.includes(PopupSearch.current) && !e.path.includes(openInputIconRef.current)) {
                setIsOpenSearchPopup(false);
                setIsOpenInput(false);
            }
        }
        window.addEventListener('click', closeOpenMenu);
        return () => window.removeEventListener('click', closeOpenMenu);
    }, [])

    const closeSearchPopup = () => {
        if (myRef?.current?.value) myRef.current.value = '';
        setIsOpenSearchPopup(false)
        setValueSearch('')
        setIsOpenInput(false)
    }

    return (
        <div ref={PopupSearch} className={classNames(styles.header__search, { [styles.header__search_hidden]: !isOpenInput })}>
            <HeaderField editValue={editValue} setIsOpenInput={setIsOpenInput}
                         myRef={myRef} setIsOpenSearchPopup={setIsOpenSearchPopup}
                         valueSearch={valueSearch} closeSearchPopup={closeSearchPopup} type={type}
            />
            { isOpenSearchPopup && <HeaderPopup valueSearch={valueSearch} type={type} setType={setType} closeSearchPopup={closeSearchPopup}/> }
        </div>
    )
}

export default HeaderSearch;