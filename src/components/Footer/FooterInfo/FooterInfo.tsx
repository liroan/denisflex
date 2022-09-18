import styles from "./FooterInfo.module.scss";
import CopyrightIcon from "@mui/icons-material/Copyright";


const FooterInfo = () => {
    return (
        <div className={styles.footer__info}>
            <div className={styles.footer__copyright}>
                <CopyrightIcon style={{height: 15, width: 15}}/>
                <span>2022, Mileynflix</span>
            </div>
            <div className={styles.footer__company}>
                Проект компании <a>Mileynflix</a>
            </div>
        </div>
    )
}

export default FooterInfo;