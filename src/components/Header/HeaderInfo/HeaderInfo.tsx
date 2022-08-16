import React, {FC, useEffect, useState} from "react";
import styles from "./HeaderInfo.module.scss";
import classnames from "classnames";
import logo from "../../../assets/img/header/logo.png"
import {Link, useLocation} from "react-router-dom";


const mainIcon = <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
const CatalogIcon = <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
const FavouritesIcon =  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>

const links = [
    { id: 1, icon: mainIcon, label: 'Главная', to: '/' },
    { id: 2, icon: CatalogIcon, label: 'Каталог', to: '/catalog' },
    { id: 3, icon: FavouritesIcon, label: 'Избранное', to: '/favourites' },
]


const HeaderInfo:FC = () => {

    const [isOpenMenu, setIsOpenMenu] = useState(false);
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
                <div className={styles.header__burger_centerLine} />
            </div>
            <div className={styles.header__logo}>
                <img src={logo} alt=""/>
            </div>
            <nav className={classnames(styles.header__nav, {[styles.header__nav_show]: isOpenMenu, [styles.header__nav_hidden]: !isOpenMenu})} >
                <ul>
                    {
                        links.map(({ id, icon, label, to }) => (
                            <li key={id}>
                                <Link to={to}>
                                    { icon }
                                    { label }
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}

export default HeaderInfo;