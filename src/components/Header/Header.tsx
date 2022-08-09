import styles from "../../style/components/Header.module.scss";
import Container from "../Container/Container";
import classNames from "classnames";
import {useState} from "react";
import HeaderInfo from "./HeaderInfo/HeaderInfo";
import HeaderSearch from "./HeaderSearch/HeaderSearch";
import HeaderLogin from "./HeaderLogin/HeaderLogin";
const Header = () => {
    const [isOpenInput, setIsOpenInput] = useState(true);
    return (
        <header className={classNames(styles.header, styles.app__header)}>
            <Container>
                <HeaderInfo />
                <HeaderSearch isOpenInput={isOpenInput} setIsOpenInput={setIsOpenInput}/>
                <HeaderLogin setIsOpenInput={setIsOpenInput}/>
            </Container>
        </header>
    )
}

export default Header;