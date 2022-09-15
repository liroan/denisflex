import styles from "./FilmReviewsInfo.module.scss";

const statistics = [
    { count: 132, name: "Всего", color: "var(--color-primary)" },
    { count: 132, name: "Положительные", color: "green", percent: "100.00" },
    { count: 0, name: "Отрицательные", color: "red", percent: "0.00" },
    { count: 0, name: "Нейтральные", color: "#777", percent: "0.00" },
]

const FilmReviewsInfo = () => {
    return (
        <div className={styles.statistics}>
            {
                statistics.map(({ count, name, color, percent }) => (
                    <div className={styles.statistics__info}>
                        <div className={styles.statistics__countInfo}>
                            <div className={styles.statistics__counter} style={{ color }}>
                                { count }
                            </div>
                            { percent && <div className={styles.statistics__percent}>{percent}%</div> }
                        </div>
                        <div className={styles.statistics__counterName}>{name}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default FilmReviewsInfo;