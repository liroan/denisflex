import styles from "./OpacityButton.module.scss";
import {Button} from "@mui/material";
import React, {FC} from "react";

interface OpacityButtonProps {
    onClick: () => void;
    startIcon?: React.ReactNode;
    children?: React.ReactNode;
}

const OpacityButton:FC<OpacityButtonProps> = ({ onClick, startIcon, children }) => {
    return (
        <div className={styles.opacityButton}>
            <Button variant="contained" startIcon={startIcon} onClick={onClick}>
                { children }
            </Button>
        </div>
    )
}


export default OpacityButton;