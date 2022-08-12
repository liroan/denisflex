import styles from "./Button.module.scss";
import React, {FC} from "react";

interface ButtonProps {
    children?: React.ReactNode;
    icon?: React.ReactNode;
}

const Button:FC<ButtonProps> = ({ children }) => {
    return (
        <button className={styles.button}>
            { children }
        </button>
    )
}

export default Button;