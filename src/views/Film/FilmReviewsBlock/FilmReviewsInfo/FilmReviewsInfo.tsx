import styles from "./FilmReviewsInfo.module.scss";
import {FC} from "react";

const statistics = [
    { name: "Всего", color: "var(--color-primary)" },
    { name: "Положительные", color: "green" },
    { name: "Отрицательные", color: "red" },
    { name: "Нейтральные", color: "#777" },
]


interface FilmReviewsInfoProps {
    counters: number[];
}

const FilmReviewsInfo:FC<FilmReviewsInfoProps> = ({ counters }) => {
    return (
        <div className={styles.statistics}>
            {
                statistics.map(({ name, color }, index) => {
                    const percent = index !== 0 && (counters[index] / counters[0]) * 100;
                    return (
                        <div className={styles.statistics__info}>
                            <div className={styles.statistics__countInfo}>
                                <div className={styles.statistics__counter} style={{color}}>
                                    {counters[index]}
                                </div>
                                {percent !== false &&  (
                                    <div className={styles.statistics__percent}>
                                        {percent.toFixed(2)}%
                                    </div>
                                )}
                            </div>
                            <div className={styles.statistics__counterName}>{name}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FilmReviewsInfo;