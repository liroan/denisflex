import styles from "../HeaderButtons.module.scss";
import PersonIcon from "@mui/icons-material/Person";
import classNames from "classnames";
import React, {FC, useCallback} from "react";
import auth from "../../../../firebase.config";
import useClosePopup from "../../../../hooks/useClosePopup";
import {useAppSelector} from "../../../../hooks";

interface HeaderUserPopupProps {
    isShowUserPopup: boolean;
    setIsShowUserPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderUserPopup:FC<HeaderUserPopupProps> = ({ isShowUserPopup, setIsShowUserPopup }) => {

    const {email, number} = useAppSelector(state => state.auth);

    const handleClickAwayPopup = useCallback((ref: React.RefObject<HTMLDivElement>, event: MouseEvent & {path: Node[]}) => {
        if (popupRef.current && !event.path.includes(popupRef.current)) {
            setIsShowUserPopup(false);
        }
    }, [])

    const popupRef = useClosePopup(handleClickAwayPopup);

    const logout = () => auth.signOut();

    return (
        <div className={styles.header__user} ref={popupRef}>
            <PersonIcon className={styles.header__userIcon} onClick={() => setIsShowUserPopup(prevState => !prevState)}/>
            <div className={classNames(styles.header__userPopup, styles.popup, { [styles.popup_active]: isShowUserPopup })}>
                <h3 className={styles.popup__title}>{email || number}</h3>
                <div className={styles.popup__border}/>
                <ul className={styles.popup__options}>
                    <li>Настройки</li>
                    <li onClick={logout}>Выйти</li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderUserPopup;