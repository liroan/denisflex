import styles from "./RedButton.module.scss";
import {Button} from "@mui/material";
import React, {FC} from "react";

interface RedButtonProps {
    onClick: () => void;
    startIcon?: React.ReactNode;
    children?: React.ReactNode;
}

const RedButton:FC<RedButtonProps> = ({ onClick, startIcon, children }) => {
    return (
        <div className={styles.redButton}>
            <Button variant="contained" startIcon={startIcon} onClick={onClick}>
                { children }
            </Button>
        </div>
    )
}


export default RedButton;