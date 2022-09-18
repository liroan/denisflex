import styles from "./FavouritesButton.module.scss";
import {Button} from "@mui/material";
import React, {FC} from "react";
import classNames from "classnames";


const favouritesIcon = <svg stroke="#fff" fill="#fff" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round"
                            strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
</svg>;
const checkMarkIcon = <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round"
                           strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <polyline points="20 6 9 17 4 12"/>
</svg>

interface FavouritesButtonProps {
    toggler: (e: React.MouseEvent) => void;
    isFavourite: boolean;
    isAdaptive?: boolean;
}

const FavouritesButton: FC<FavouritesButtonProps> = ({toggler, isFavourite, isAdaptive}) => {
    return (
        <div className={classNames({
            [styles.button__addFavourites]: !isFavourite,
            [styles.button__deleteFavourites]: isFavourite,
            [styles.button__adaptive]: isAdaptive
        })}>
            <Button variant="contained" startIcon={!isFavourite ? favouritesIcon : checkMarkIcon} onClick={toggler}>
                <span className={styles.button__text}>Буду смотреть</span>
            </Button>
        </div>
    )
}
export default FavouritesButton;