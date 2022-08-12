import classNames from "classnames";
import styles from "../Catalog.module.scss";
import RangeSlider from "../../../components/RangeSlider/RangeSlider";
import {Button, FormControl, FormControlLabel, InputLabel, MenuItem, Select, Switch} from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import React, {FC} from "react";


const Filter:FC<any> = ({ lol, setLol, age, handleChange, lol22, setLol22 }) => {
    return (
        <div className={classNames(styles.catalog__filter, styles.filter, { [styles.catalog__filter_transform]: lol22 })}>
            <div className={styles.filter__header}>
                <div className={classNames(styles.filter__button, styles.filter__button_apply, styles.filter__button_resetHeader)}>
                    <Button variant="contained">
                        Применить
                    </Button>
                </div>
                <h5>Фильтры</h5>
                <div className={styles.filter__exit}>
                    <button onClick={() => setLol22(false)}>
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </div>
            </div>
            <div className={styles.filter__wrapper}>
                <div className={styles.filter__info}>
                    <div className={styles.filter__mark}>Рейтинг: 1 - 10</div>
                    <div className={styles.filter__mark}>Года производства: 1960 - 2022</div>
                    <div className={styles.filter__mark}>Жанр: Все жанры</div>
                    <div className={styles.filter__mark}>Год выхода: Сначала новые</div>
                </div>
                <div className={classNames(styles.filter__accordion, styles.accordion)}>
                    <div className={styles.accordion__title}>
                        <h6>Рейтинг</h6>
                        <div className={classNames(styles.accordion__arrow, { [styles.accordion__arrow_rotate]: lol })} onClick={() => setLol((prevState: boolean) => !prevState)}>
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </div>
                    </div>
                    {
                        lol && (
                            <div>
                                <RangeSlider min={1} max={10} />
                            </div>
                        )
                    }
                </div>
                <div className={classNames(styles.filter__accordion, styles.accordion)}>
                    <div className={styles.accordion__title}>
                        <h6>Годы производства</h6>
                        <div className={classNames(styles.accordion__arrow, { [styles.accordion__arrow_rotate]: lol })} onClick={() => setLol((prevState: boolean) => !prevState)}>
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </div>
                    </div>
                    {
                        lol && (
                            <div>
                                <RangeSlider min={1960} max={2022} />
                            </div>
                        )
                    }
                </div>
                <div className={classNames(styles.filter__accordion, styles.accordion)}>
                    <div className={styles.accordion__title}>
                        <h6>Жанры</h6>
                        <div className={classNames(styles.accordion__arrow, { [styles.accordion__arrow_rotate]: lol })} onClick={() => setLol((prevState: boolean) => !prevState)}>
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </div>
                    </div>
                    {
                        lol && (
                            <div className={classNames(styles.filter__genresSelect)}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Жанры</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        value={age}
                                        label="Жанры"
                                        color="secondary"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        )
                    }
                </div>
                <div className={classNames(styles.filter__accordion, styles.accordion)}>
                    <div className={styles.accordion__title}>
                        <h6>Сортировка</h6>
                        <div className={classNames(styles.accordion__arrow, { [styles.accordion__arrow_rotate]: lol })} onClick={() => setLol((prevState: boolean) => !prevState)}>
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </div>
                    </div>
                    {
                        lol && (
                            <div className={classNames(styles.filter__checkboxes)}>
                                <FormGroup>
                                    <FormControlLabel control={<Switch defaultChecked />} label="по рейтингу" />
                                    <FormControlLabel control={<Switch defaultChecked />} label="по голосам" />
                                    <FormControlLabel control={<Switch defaultChecked />} label="по дате выхода" />
                                </FormGroup>
                            </div>
                        )
                    }
                </div>
                <div className={classNames(styles.filter__buttons)}>
                    <div className={classNames(styles.filter__button, styles.filter__button_apply)}>
                        <Button variant="contained">
                            Применить
                        </Button>
                    </div>
                    <div className={classNames(styles.filter__button, styles.filter__button_reset)}>
                        <Button variant="outlined" >
                            Сбросить
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter;