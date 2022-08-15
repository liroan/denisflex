import React, {Dispatch, FC, SetStateAction} from "react";
import classNames from "classnames";
import styles from "./HeaderField.module.scss";
import {Link} from "react-router-dom";
import {MovieType} from "../../../../types/types";


interface HeaderFieldProps {
    editValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
    setIsOpenInput: Dispatch<SetStateAction<boolean>>;
    myRef: any;
    setIsOpenSearchPopup:  React.Dispatch<React.SetStateAction<boolean>>;
    valueSearch: string;
    type: MovieType;
    closeSearchPopup: () => void;
}

const HeaderField:FC<HeaderFieldProps> = ({ setIsOpenInput, editValue, myRef, setIsOpenSearchPopup, valueSearch, closeSearchPopup, type }) => {


    const openPopupIfValueSearch = () => {
        if (valueSearch) {
            setIsOpenSearchPopup(true)
            setIsOpenInput(true)
        }
    }

    return (
        <div className={classNames(styles.header__field)}>
            <div className={styles.header__arrow} onClick={() => setIsOpenInput(false)}>
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="15 18 9 12 15 6"></polyline></svg>                </div>
            <div className={classNames(styles.header__input)}>
                <input type="text" onChange={editValue} ref={myRef} placeholder="Поиск..." onFocus={openPopupIfValueSearch}/>
            </div>
            <div className={styles.header__cross} onClick={closeSearchPopup}>
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </div>
            <div className={styles.header__searchIcon}>
                {
                    valueSearch ? (
                        <Link to={`/catalog?type=${type}&keyword=${valueSearch}`} onClick={closeSearchPopup}>
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        </Link>
                    ) : (
                        <div>
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default HeaderField;