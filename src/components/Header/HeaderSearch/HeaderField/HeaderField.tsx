import React, {Dispatch, FC, SetStateAction} from "react";
import classNames from "classnames";
import styles from "./HeaderField.module.scss";
import {Link} from "react-router-dom";
import {MovieType} from "../../../../types";


interface HeaderFieldProps {
    onChangeKeyword: (e: React.ChangeEvent<HTMLInputElement>) => void;
    setIsOpenInput: Dispatch<SetStateAction<boolean>>;
    setIsOpenSearchPopup: React.Dispatch<React.SetStateAction<boolean>>;
    queryKeyword: string;
    type: MovieType;
    closePopupWithDeleteKeyword: () => void;
    inputSearchRef: React.RefObject<HTMLInputElement>;
    inputKeyword: string;
    closePopup: () => void;
}

const HeaderField: FC<HeaderFieldProps> = React.memo(({
                                                          setIsOpenInput,
                                                          onChangeKeyword,
                                                          setIsOpenSearchPopup,
                                                          queryKeyword,
                                                          closePopupWithDeleteKeyword,
                                                          inputKeyword,
                                                          closePopup,
                                                          type,
                                                          inputSearchRef
                                                      }) => {
    const openPopupIfValueSearch = () => {
        if (queryKeyword) {
            setIsOpenSearchPopup(true)
            setIsOpenInput(true)
        }
    }

    return (
        <div className={classNames(styles.header__field)}>
            <div className={styles.header__arrow} onClick={closePopup}>
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round"
                     strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="15 18 9 12 15 6"/>
                </svg>
            </div>
            <div className={classNames(styles.header__input)}>
                <input type="text" value={inputKeyword} onChange={onChangeKeyword} ref={inputSearchRef}
                       placeholder="Поиск..." onFocus={openPopupIfValueSearch}/>
            </div>
            <div className={styles.header__cross} onClick={closePopupWithDeleteKeyword}>
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round"
                     strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
            </div>
            <div className={styles.header__searchIcon}>
                {
                    queryKeyword ? (
                        <Link to={`/catalog?type=${type}&keyword=${queryKeyword}`}
                              onClick={closePopupWithDeleteKeyword}>
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24"
                                 strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11" cy="11" r="8"/>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                            </svg>
                        </Link>
                    ) : (
                        <div>
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24"
                                 strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11" cy="11" r="8"/>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                            </svg>
                        </div>
                    )
                }
            </div>
        </div>
    )
})

export default HeaderField;