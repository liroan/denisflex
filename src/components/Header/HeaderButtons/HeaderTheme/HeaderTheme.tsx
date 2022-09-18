import styles from "./HeaderTheme.module.scss";
import {Theme} from "../../../../constants";
import LightModeIcon from "@mui/icons-material/LightMode";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import React from "react";
import {setTheme} from "../../../../store/theme.slice";
import {useAppDispatch, useAppSelector} from "../../../../hooks";


const HeaderTheme = React.memo(() => {

    const {theme} = useAppSelector(state => state);

    const dispatch = useAppDispatch();

    const toggleTheme = (theme: Theme) => {
        dispatch(setTheme(theme))
    }

    return (
        <div className={styles.header__theme}>
            {
                theme === Theme.DARK ? <LightModeIcon onClick={() => toggleTheme(Theme.LIGHT)}/>
                    : <Brightness3Icon onClick={() => toggleTheme(Theme.DARK)}/>
            }
        </div>
    )
})

export default HeaderTheme;