import styles from "./OpacityButton.module.scss";
import {Button} from "@mui/material";
import React, {FC} from "react";

interface OpacityButtonProps {
    onClick: () => void;
    startIcon?: React.ReactNode;
    children?: React.ReactNode;
    type: "button" | "submit" | "reset" | undefined;
}

const OpacityButton:FC<OpacityButtonProps> = ({ onClick, startIcon, type, children }) => {
    return (
        <div className={styles.opacityButton}>
            <Button variant="contained" startIcon={startIcon} onClick={onClick} type={type}>
                { children }
            </Button>
        </div>
    )
}


export default OpacityButton;