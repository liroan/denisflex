import styles from "./Banner.module.scss";
import {Container, RedButton} from "../../../components";
import React, {FC} from "react";
import {Link} from "react-router-dom";

const arrow = <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round"
                   strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
</svg>;


const Banner: FC = React.memo(() => {
    return (
        <div className={styles.home__banner}>
            <video autoPlay loop muted className={styles.home__bgVideo} id="bgvideo">
                <source src="/videos/film2.mp4" type="video/mp4"/>
            </video>
            <Container>
                <div className={styles.home__banner_blackout}/>
                <div className={styles.home__bannerInfo}>
                    <h1 className={styles.home__bannerTitle}>Бэтмен</h1>
                    <h2 className={styles.home__bannerDescription}>
                        После двух лет поисков правосудия на улицах Готэма Бэтмен становится для горожан олицетворением
                        беспощадного возмездия. Когда в городе происходит серия жестоких нападений на высокопоставленных
                        чиновников, улики приводят Брюса Уэйна в самые тёмные закоулки преступного мира, где он
                        встречает Женщину-Кошку, Пингвина, Кармайна Фальконе и Загадочника. Теперь под прицелом
                        оказывается сам Бэтмен, которому предстоит отличить друга от врага и восстановить справедливость
                        во имя Готэма.
                    </h2>
                    <Link to={`/film/${590286}`}>
                        <RedButton startIcon={arrow}>
                            Подробнее
                        </RedButton>
                    </Link>
                </div>
            </Container>
        </div>
    )
})

export default Banner;