import styles from "./HeaderUserPopup.module.scss";
import PersonIcon from "@mui/icons-material/Person";
import classNames from "classnames";
import React, {FC, useCallback} from "react";
import auth from "../../../../firebase.config";
import useClosePopup from "../../../../hooks/useClosePopup";
import {useAppSelector} from "../../../../hooks";
import SettingsIcon from '@mui/icons-material/Settings';
import {OverridableComponent} from "@mui/material/OverridableComponent";
import {SvgIconTypeMap} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';

interface IOption {
    name: string;
    onClick?: () => void;
    isRed?: boolean;
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string }
}

const options: IOption[] = [
    {name: "Настройки", Icon: SettingsIcon},
    {name: "Выход", onClick: () => auth.signOut(), Icon: LogoutIcon, isRed: true},
]

interface HeaderUserPopupProps {
    isShowUserPopup: boolean;
    setIsShowUserPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderUserPopup: FC<HeaderUserPopupProps> = ({isShowUserPopup, setIsShowUserPopup}) => {

    const {email, number} = useAppSelector(state => state.auth);

    const handleClickAwayPopup = useCallback((ref: React.RefObject<HTMLDivElement>, event: MouseEvent & { path: Node[] }) => {
        if (popupRef.current && !event.path.includes(popupRef.current)) {
            setIsShowUserPopup(false);
        }
    }, [])

    const popupRef = useClosePopup(handleClickAwayPopup);

    return (
        <div className={styles.header__user} ref={popupRef}>
            <PersonIcon className={styles.header__userIcon}
                        onClick={() => setIsShowUserPopup(prevState => !prevState)}/>
            <div
                className={classNames(styles.header__userPopup, styles.popup, {[styles.popup_active]: isShowUserPopup})}>
                <h3 className={styles.popup__title} title={email || number || undefined}>{email || number}</h3>
                <div className={styles.popup__border}/>
                <ul className={styles.popup__options}>
                    {
                        options.map(({
                                         Icon,
                                         name, onClick, isRed
                                     }) => (
                            <li onClick={onClick} className={classNames(styles.popup__option,
                                {[styles.popup__option_red]: isRed})}
                            >
                                <Icon/>
                                {name}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default HeaderUserPopup;