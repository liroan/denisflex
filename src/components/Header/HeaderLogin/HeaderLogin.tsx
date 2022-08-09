import styles from "./HeaderLogin.module.scss";
import {FC} from "react";


const HeaderLogin:FC<any> = ({ setIsOpenInput }) => {
    return (
        <div className={styles.header__loginStatus}>
            <p>Войти</p>
            <div className={styles.header__searchIcon_right} onClick={() => {
                console.log('lol')
                setIsOpenInput(true)
            }}>
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
        </div>
    )
}

export default HeaderLogin;