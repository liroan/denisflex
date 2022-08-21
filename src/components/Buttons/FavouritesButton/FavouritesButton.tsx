import styles from "./FavouritesButton.module.scss";
import {Button} from "@mui/material";
import React, {FC} from "react";


const favouritesIcon = <svg stroke="#fff" fill="#fff" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg>;
const checkMarkIcon = <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12" /></svg>

interface FavouritesButtonProps {
    toggler: () => void;
    isFavourite: boolean;
}

const FavouritesButton:FC<FavouritesButtonProps> = ({ toggler, isFavourite }) => {
    return (
        <div className={!isFavourite ? styles.film__addFavourites : styles.film__deleteFavourites}>
            <Button variant="contained" startIcon={!isFavourite ? favouritesIcon : checkMarkIcon} onClick={toggler}>
                <span className={styles.film__textButton}>Буду смотреть</span>
            </Button>
        </div>
    )
}
export default FavouritesButton;