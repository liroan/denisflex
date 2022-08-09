import styles from "./HeaderSearch.module.scss";
import classNames from "classnames";
import React, {Dispatch, FC, SetStateAction, useState} from "react";
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

    const editValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        setIsOpenSearchPopup(e.target.value != '')
    }

    return (
        <div className={classNames(styles.header__search, { [styles.header__search_hidden]: !isOpenInput })}>
            <HeaderField value={value} editValue={editValue} setIsOpenInput={setIsOpenInput}/>
            <HeaderPopup isOpenSearchPopup={isOpenSearchPopup} />
        </div>
    )
}

export default HeaderSearch;