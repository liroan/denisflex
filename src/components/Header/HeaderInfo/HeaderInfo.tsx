import React, {FC, useEffect, useState} from "react";
import styles from "./HeaderInfo.module.scss";
import classnames from "classnames";
import logo from "../../../assets/img/header/logo.png"
const HeaderInfo:FC = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const PopupRef = React.useRef<HTMLDivElement>(null);
    useEffect(() => {
        const closeOpenMenu = (e: any) => {
            if (PopupRef.current && !e.path.includes(PopupRef.current)) {
                setIsOpenMenu(false);
            }
        }
        window.addEventListener('click', closeOpenMenu);
        return () => window.removeEventListener('click', closeOpenMenu);
    }, [])
    return (
        <div className={styles.header__info} ref={PopupRef}>
            <div className={styles.header__burger} onClick={() => setIsOpenMenu(prevState => !prevState)}>
                <div className={styles.header__burger_centerLine} />
            </div>
            <div className={styles.header__logo}>
                <img src={logo} alt=""/>
            </div>
            <nav className={classnames(styles.header__nav, {[styles.header__nav_show]: isOpenMenu, [styles.header__nav_hidden]: !isOpenMenu})} >
                <ul>
                    <li>
                        <a href="">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>
                            Главная
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>
                            Каталог
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>
                            Избранное
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default HeaderInfo;