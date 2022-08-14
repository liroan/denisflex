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
    const [value, setValue] = useState('');
    const [valueSearch, setValueSearch] = useState<string | undefined>('');
    const [timeoutId, setTimeoutId] = useState<ReturnType<typeof setTimeout> | undefined>();
    const myRef = useRef<HTMLInputElement>()

    const editValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        clearTimeout(timeoutId);
        setTimeoutId(setTimeout(() => {
            console.log(myRef?.current?.value);
            setValueSearch(myRef?.current?.value);
        }, 1000))
        setIsOpenSearchPopup(e.target.value != '')
    }

    const lazyLoadingForInput = () => {

    }

    return (
        <div className={classNames(styles.header__search, { [styles.header__search_hidden]: !isOpenInput })}>
            <HeaderField value={value} editValue={editValue} setIsOpenInput={setIsOpenInput} myRef={myRef}/>
            { isOpenSearchPopup && <HeaderPopup /> }
        </div>
    )
}

export default HeaderSearch;