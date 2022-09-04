import styles from "./FooterButtons.module.scss";
import AppleIcon from "@mui/icons-material/Apple";
import ShopIcon from "@mui/icons-material/Shop";
import FooterButton from "./FooterButton/FooterButton";


const buttons = [
    { icon: <AppleIcon />, titleUpload: "Загрузите в", titleApp: "App store" },
    { icon: <ShopIcon />, titleUpload: "Доступно в", titleApp: "Google Play" },
]

const FooterButtons = () => {
    return (
        <div className={styles.footer__uploadButtons}>
            {
                buttons.map((button, index) => (
                    <FooterButton {...button} key={index} />
                ))
            }
        </div>
    )
}

export default FooterButtons;