import Container from "../Container/Container";
import styles from "./Footer.module.scss";
import Button from "../Buttons/Button/Button";
import CopyrightIcon from '@mui/icons-material/Copyright';
import AppleIcon from '@mui/icons-material/Apple';
import ShopIcon from '@mui/icons-material/Shop';
import FooterNetworks from "./FooterNetworks/FooterNetworks";
import FooterRefs from "./FooterRefs/FooterRefs";
import FooterButtons from "./FooterButtons/FooterButtons";
import FooterInfo from "./FooterInfo/FooterInfo";

const Footer = () => {
    return (
        <section className={styles.footer}>
            <Container>
                <FooterNetworks />
                <FooterRefs />
                <FooterButtons />
                <FooterInfo />
            </Container>
        </section>
    )
}

export default Footer;