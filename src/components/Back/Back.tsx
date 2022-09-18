import React, {FC} from "react";
import styles from './Back.module.scss'
import {useNavigate} from "react-router-dom";

interface BackProps {
    title?: string;
}

const Back: FC<BackProps> = React.memo(({title}) => {
    const navigate = useNavigate();
    return (
        <div className={styles.back} onClick={() => navigate(-1)}>
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round"
                 strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            <p>{title || "Назад"}</p>
        </div>
    )
})

export default Back;