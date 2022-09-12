import styles from "./HeaderLogin.module.scss";
import React, {FC, RefObject} from "react";
import LightModeIcon from '@mui/icons-material/LightMode';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {Theme} from "../../../constants";
import {setTheme} from "../../../store/theme.slice";
import {Link} from "react-router-dom";
import auth from "../../../firebase.config";

interface HeaderLoginProps {
    setIsOpenInput: React.Dispatch<React.SetStateAction<boolean>>;
    openInputIconRef: RefObject<HTMLDivElement>;
}

const HeaderLogin:FC<HeaderLoginProps> = React.memo(({ setIsOpenInput, openInputIconRef }) => {
    const { theme } = useAppSelector(state => state.theme);
    const {email, number} = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();

    const toggleTheme = (theme: Theme) => {
        dispatch(setTheme(theme))
    }

    const authData = email || number;

    const logout = () => {
        auth.signOut();
    }

    return (
        <div className={styles.header__loginStatus}>
            <div className={styles.header__user} >
                { !!authData ? <span onClick={logout}>{authData}</span> :
                    <Link to="/login">Войти</Link> }
            </div>
            <div className={styles.header__theme}>
                {
                    theme === Theme.DARK ? <LightModeIcon onClick={() => toggleTheme(Theme.LIGHT)}/>
                        :  <Brightness3Icon onClick={() => toggleTheme(Theme.DARK)} />
                }
            </div>
            <div ref={openInputIconRef} className={styles.header__searchIcon_right} onClick={() => setIsOpenInput(true)}>
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </div>
        </div>
    )
})

export default HeaderLogin;