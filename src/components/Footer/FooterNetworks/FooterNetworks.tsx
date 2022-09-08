import styles from "./FooterNetworks.module.scss";
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
const networks = [
    { icon: <InstagramIcon/>, link: "/"  },
    { icon: <FacebookIcon/>, link: "/"  },
    { icon: <TwitterIcon/>, link: "/"  },
    { icon: <YouTubeIcon/>, link: "/"  },
]

const FooterNetworks = () => {
    return (
        <div className={styles.footer__socialNetworks}>
            {
                networks.map(({icon, link}, index)=> (
                    <div className={styles.footer__socialNetwork} key={index}>
                        <a href={link}>
                            {icon}
                        </a>
                    </div>
                ))
            }
        </div>
    )
}

export default FooterNetworks;