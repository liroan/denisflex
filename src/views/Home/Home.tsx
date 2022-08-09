import styles from "./Home.module.scss";

const Home = () => {
    return (
        <div className={styles.home}>
            <div className={styles.home__banner} style={{ background: "url(https://avatars.mds.yandex.net/get-ott/1672343/2a0000016cc7177239d4025185c488b1bf43/orig)" }}>
                <div className={styles.home__banner_blackout} />
                <div className={styles.home__bannerInfo}>
                    <h1 className={styles.home__bannerTitle}>Тор: Любовь и гром</h1>
                    <h2 className={styles.home__bannerDescription}>Джейн Фостер берет на себя обязанности Бога-громовержца и становится обладательницей молота Мьёльнира.</h2>
                    <button></button>
                </div>
            </div>
        </div>
    )
}

export default Home;
