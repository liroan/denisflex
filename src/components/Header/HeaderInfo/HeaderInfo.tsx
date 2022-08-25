import React, {FC, useEffect, useState} from "react";
import styles from "./HeaderInfo.module.scss";
import classnames from "classnames";
import logo from "../../../assets/img/header/logo.png"
import {Link, NavLink, useLocation} from "react-router-dom";


const mainIcon = <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
const CatalogIcon = <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>
const FavouritesIcon =  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>

const links = [
    { id: 0, icon: mainIcon, label: 'Главная', to: '/' },
    { id: 1, icon: CatalogIcon, label: 'Каталог', to: '/catalog' },
    { id: 2, icon: FavouritesIcon, label: 'Избранное', to: '/favourites' },
]

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
                <div className={classnames(styles.header__burger_centerLine, { [styles.header__burger_close]: isOpenMenu })} />
            </div>
            <div className={styles.header__logo}>
                <img src={logo} alt=""/>
            </div>
            <nav className={classnames(styles.header__nav, {[styles.header__nav_show]: isOpenMenu, [styles.header__nav_hidden]: !isOpenMenu})} >
                <ul>
                    {
                        links.map(({ id, icon, label, to }) => (
                            <li key={id}>
                                <NavLink to={to} className={({ isActive }) => isActive ? styles.header__activeLink : ""}>
                                    { icon }
                                    { label }
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
})

export default HeaderInfo;