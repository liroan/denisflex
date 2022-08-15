import styles from "./HeaderSearch.module.scss";
import classNames from "classnames";
import React, {Dispatch, FC, SetStateAction, useRef, useState} from "react";
import HeaderField from "./HeaderField/HeaderField";
import Header from "../Header";
import HeaderPopup from "./HeaderPopup/HeaderPopup";

interface HeaderSearchProps {
    isOpenInput: boolean;
    setIsOpenInput: Dispatch<SetStateAction<boolean>>;
}

const HeaderSearch:FC<HeaderSearchProps> = ({isOpenInput, setIsOpenInput}) => {
    const [isOpenSearchPopup, setIsOpenSearchPopup] = useState(false);
    const [valueSearch, setValueSearch] = useState<string>('');
    const [timeoutId, setTimeoutId] = useState<ReturnType<typeof setTimeout> | undefined>();
    const myRef = useRef<HTMLInputElement>()

    const editValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        clearTimeout(timeoutId);
        setIsOpenSearchPopup(true)
        setTimeoutId(setTimeout(() => {
            setValueSearch(myRef?.current?.value || "");
            if (!myRef?.current?.value) setIsOpenSearchPopup(false)
        }, 1000))
    }


    return (
        <div className={classNames(styles.header__search, { [styles.header__search_hidden]: !isOpenInput })}>
            <HeaderField editValue={editValue} setIsOpenInput={setIsOpenInput}
                         myRef={myRef} setIsOpenSearchPopup={setIsOpenSearchPopup}
                         setValueSearch={setValueSearch} />
            { isOpenSearchPopup && <HeaderPopup valueSearch={valueSearch} /> }
        </div>
    )
}

export default HeaderSearch;