import Container from "../Container/Container";
import styles from "./Footer.module.scss";
import FooterNetworks from "./FooterNetworks/FooterNetworks";
import FooterRefs from "./FooterRefs/FooterRefs";
import FooterButtons from "./FooterButtons/FooterButtons";
import FooterInfo from "./FooterInfo/FooterInfo";

const Footer = () => {
    return (
        <section className={styles.footer}>
            <Container>
                <FooterNetworks/>
                <FooterRefs/>
                <FooterButtons/>
                <FooterInfo/>
            </Container>
        </section>
    )
}

export default Footer;