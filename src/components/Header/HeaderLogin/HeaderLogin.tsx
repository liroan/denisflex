import styles from "./HeaderLogin.module.scss";
import React, {FC, RefObject} from "react";

interface HeaderLoginProps {
    setIsOpenInput: React.Dispatch<React.SetStateAction<boolean>>;
    openInputIconRef: RefObject<HTMLDivElement>;
}

const HeaderLogin:FC<HeaderLoginProps> = React.memo(({ setIsOpenInput, openInputIconRef }) => {
    return (
        <div className={styles.header__loginStatus}>
            <p>Войти</p>
            <div ref={openInputIconRef} className={styles.header__searchIcon_right} onClick={() => {setIsOpenInput(true)}}>
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </div>
        </div>
    )
})

export default HeaderLogin;