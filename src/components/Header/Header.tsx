import styles from "../../style/components/Header.module.scss";
import Container from "../Container/Container";
import classNames from "classnames";
import {FC, useEffect, useRef, useState} from "react";
import HeaderInfo from "./HeaderInfo/HeaderInfo";
import HeaderSearch from "./HeaderSearch/HeaderSearch";
import HeaderLogin from "./HeaderLogin/HeaderLogin";
const Header:FC = () => {
    const [isOpenInput, setIsOpenInput] = useState(false);
    const [scrolledUp, setScrolledUp] = useState(false);
    const [prevScrollY, setPrevScrollY] = useState(0);
    const openInputIconRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const checkScrolled = () => {
            setScrolledUp(window.scrollY - prevScrollY <= 0);
            setPrevScrollY(window.scrollY);
        }
        window.addEventListener('scroll', checkScrolled);
        return () => window.removeEventListener('scroll', checkScrolled)
    }, [prevScrollY])

    return (
        <header className={classNames(styles.header, styles.app__header,
            {[styles.app__header_scrolled]: !scrolledUp && prevScrollY !== 0, [styles.app__header_started]: prevScrollY === 0 })}>
            <Container>
                <HeaderInfo />
                <HeaderSearch isOpenInput={isOpenInput} setIsOpenInput={setIsOpenInput} openInputIconRef={openInputIconRef}/>
                <HeaderLogin setIsOpenInput={setIsOpenInput} openInputIconRef={openInputIconRef}/>
            </Container>
        </header>
    )
}

export default Header;