import React, {FC, useCallback} from "react";
import styles from "./HeaderInfo.module.scss";
import classnames from "classnames";
import logo from "../../../assets/img/header/logo.png"
import {Link, useLocation} from "react-router-dom";
import NavigatePanel from "../../NavigatePanel/NavigatePanel";
import useClosePopup from "../../../hooks/useClosePopup";


interface HeaderInfoProps {
    isOpenMenu: boolean;
    setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderInfo: FC<HeaderInfoProps> = React.memo(({isOpenMenu, setIsOpenMenu}) => {
    let location = useLocation();

    React.useEffect(() => {
        setIsOpenMenu(false);
    }, [location]);


    const handleClickAwayPopup = useCallback((ref: React.RefObject<HTMLDivElement>, event: MouseEvent & { path: Node[] }) => {
        if (popupRef.current && !event.path.includes(popupRef.current)) {
            setIsOpenMenu(false);
        }
    }, [])

    const popupRef = useClosePopup(handleClickAwayPopup);

    return (
        <div className={styles.header__info} ref={popupRef}>
            <div className={styles.header__burger} onClick={() => setIsOpenMenu(prevState => !prevState)}>
                <div className={classnames(styles.header__burger_open, {[styles.header__burger_close]: isOpenMenu})}/>
            </div>
            <div className={styles.header__logo}>
                <Link to="/"><img src={logo} alt=""/></Link>
            </div>
            <NavigatePanel className={classnames(styles.header__nav, {
                [styles.header__nav_show]: isOpenMenu,
                [styles.header__nav_hidden]: !isOpenMenu
            })}/>
        </div>
    )
})

export default HeaderInfo;