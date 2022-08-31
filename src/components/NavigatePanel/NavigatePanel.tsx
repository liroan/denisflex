import {NavLink} from "react-router-dom";
import React, {FC} from "react";
import styles from "./NavigatePanel.module.scss";

const mainIcon = <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
const CatalogIcon = <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>
const FavouritesIcon =  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
const links = [
    { id: 0, icon: mainIcon, label: 'Главная', to: '/' },
    { id: 1, icon: CatalogIcon, label: 'Каталог', to: '/catalog' },
    { id: 2, icon: FavouritesIcon, label: 'Избранное', to: '/favourites' },
]

interface NavigatePanelProps {
    className?: string;
}

const NavigatePanel:FC<NavigatePanelProps> = ({ className}) => {
    return (
        <nav className={className ? className : styles.panel} >
            <ul>
                {
                    links.map(({ id, icon, label, to }) => (
                        <li key={id}>
                            <NavLink to={to} className={({ isActive }) => isActive ? styles.panel__activeLink : ""} onClick={() => window.scrollTo(0, 0)}>
                                { icon }
                                { label }
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default NavigatePanel;