import React, {FC, useEffect, useState} from "react";
import styles from "./HeaderInfo.module.scss";
import classnames from "classnames";
import logo from "../../../assets/img/header/logo.png"
import {Link, NavLink, useLocation} from "react-router-dom";
import NavigatePanel from "../../NavigatePanel/NavigatePanel";


interface HeaderInfoProps {
    isOpenMenu: boolean;
    setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderInfo:FC<HeaderInfoProps> = React.memo(({ isOpenMenu, setIsOpenMenu }) => {
    const PopupRef = React.useRef<HTMLDivElement>(null);
    let location = useLocation();

    React.useEffect(() => {
        setIsOpenMenu(false);
    }, [location]);


    useEffect(() => {
        const closeOpenMenu = (e: MouseEvent) => {
            const event = e as MouseEvent & { path: Node[]; };
            if (PopupRef.current && !event.path.includes(PopupRef.current)) {
                setIsOpenMenu(false);
            }
        }
        window.addEventListener('click', closeOpenMenu);
        return () => window.removeEventListener('click', closeOpenMenu);
    }, [])

    return (
        <div className={styles.header__info} ref={PopupRef}>
            <div className={styles.header__burger} onClick={() => setIsOpenMenu(prevState => !prevState)}>
                <div className={classnames(styles.header__burger_open, { [styles.header__burger_close]: isOpenMenu })} />
            </div>
            <div className={styles.header__logo}>
                <Link to="/"><img src={logo} alt=""/></Link>
            </div>
            <NavigatePanel className={classnames(styles.header__nav, {[styles.header__nav_show]: isOpenMenu,
                [styles.header__nav_hidden]: !isOpenMenu})}/>
        </div>
    )
})

export default HeaderInfo;