import React, {FC} from "react";
import classNames from "classnames";
import styles from "../Paginator.module.scss";

interface PaginatorButtonProps {
    number: number;
    isActive: boolean;
    onClick: () => void;
}

const PaginatorButton:FC<PaginatorButtonProps> = ({ number, isActive, onClick }) => {
    return (
        <div className={classNames(styles.paginator__button, { [styles.paginator__button_active]: isActive })}>
            <button onClick={onClick}>{number}</button>
        </div>
    )
}

export default PaginatorButton;