import styles from "./Header.module.scss";
import Container from "../Container/Container";
import classNames from "classnames";
import {FC, useEffect, useRef, useState} from "react";
import HeaderInfo from "./HeaderInfo/HeaderInfo";
import HeaderSearch from "./HeaderSearch/HeaderSearch";
import HeaderButtons from "./HeaderButtons/HeaderButtons";
import {useLocation} from "react-router-dom";


const Header:FC = () => {
    const [isOpenInput, setIsOpenInput] = useState(false);
    const [isShowHeader, setIsShowHeader] = useState(true);
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [prevScrollY, setPrevScrollY] = useState(0);
    const [isShowUserPopup, setIsShowUserPopup] = useState(false);
    const openInputIconRef = useRef<HTMLDivElement>(null);
    const location = useLocation();

    useEffect(() => {
        const checkScrolled = () => {
            setIsShowHeader(window.scrollY <= prevScrollY);
            setPrevScrollY(window.scrollY);
        }
        window.addEventListener('scroll', checkScrolled);
        setPrevScrollY(window.scrollY);
        return () => window.removeEventListener('scroll', checkScrolled)
    }, [prevScrollY])

    const isActive =  (isShowHeader || isOpenInput || isOpenMenu || isShowUserPopup);

    return (
        <header className={classNames(styles.header, styles.app__header,
            {
                [styles.app__header_active]: isActive && prevScrollY !== 0,
                [styles.app__header_hidden]: !isActive,
                [styles.app__header_white]: prevScrollY === 0 && location.pathname === '/'
            })}>
            <Container>
                <HeaderInfo isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
                <HeaderSearch isOpenInput={isOpenInput} setIsOpenInput={setIsOpenInput} openInputIconRef={openInputIconRef}/>
                <HeaderButtons setIsOpenInput={setIsOpenInput} isShowUserPopup={isShowUserPopup}
                               setIsShowUserPopup={setIsShowUserPopup}
                               openInputIconRef={openInputIconRef}/>
            </Container>
        </header>
    )
}

export default Header;