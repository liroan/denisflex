import styles from "./FooterNetworks.module.scss";


const networks = [
    { img: "https://avatars.mds.yandex.net/get-bunker/118781/0ae3d1ca27d3794204beec7d3810025f8c2b7e87/svg", link: "/"  },
    { img: "https://avatars.mds.yandex.net/get-bunker/61205/97123f0bc0c689932a2fb6b62d3ab8ce04d7e936/svg", link: "/"  },
    { img: "https://avatars.mds.yandex.net/get-bunker/56833/9f570502e378d5e28a5a173a273fa811c4490a73/svg", link: "/"  },
    { img: "https://avatars.mds.yandex.net/get-bunker/128809/65fe1abdd405eb82aec7490588a1ec6745d9ab87/svg", link: "/"  },
]

const FooterNetworks = () => {
    return (
        <div className={styles.footer__socialNetworks}>
            {
                networks.map(({img, link}, index)=> (
                    <div className={styles.footer__socialNetwork} key={index}>
                        <a href={link}>
                            <img src={img} alt=""/>
                        </a>
                    </div>
                ))
            }
        </div>
    )
}

export default FooterNetworks;