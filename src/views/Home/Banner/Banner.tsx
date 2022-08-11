import styles from "./Banner.module.scss";
import Container from "../../../components/Container/Container";
import Button from "../../../components/Button/Button";
import React, {FC} from "react";



const Banner:FC = () => {
    return (
        <div className={styles.home__banner}>
            <Container>
                <div className={styles.home__banner_blackout} />
                <div className={styles.home__bannerInfo}>
                    <h1 className={styles.home__bannerTitle}>Однажды в Голливуде</h1>
                    <h2 className={styles.home__bannerDescription}>1969 год, золотой век Голливуда уже закончился. Известный актёр Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.</h2>
                    <Button>
                            <span className={styles.home__buttonInner}>
                                Подробнее
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </span>
                    </Button>
                </div>
            </Container>
        </div>
    )
}

export default Banner;