import styles from "./Film.module.scss";
import Container from "../../components/Container/Container";
import RedButton from "../../components/Buttons/RedButton/RedButton";
import OpacityButton from "../../components/Buttons/OpacityButton/OpacityButton";

const Film = () => {
    return (
        <div className={styles.film}>
            <Container>
                <div className={styles.film__back}>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    <p>Назад</p>
                </div>
                <div className={styles.film__content}>
                    <div className={styles.film__img}><img src="https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/92aa795e-6092-46ee-8867-054abfdb3d3c/x1000" alt=""/></div>
                    <div className={styles.film__info}>
                        <h1 className={styles.film__title}>В пасти безумия (1994)</h1>
                        <h1 className={styles.film__subtitle}>In the Mouth of Madness</h1>
                        <div className={styles.film__buttons}>
                            <RedButton>Смотреть</RedButton>
                            <OpacityButton>Смотреть</OpacityButton>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Film;