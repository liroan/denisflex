import arrow from "../../assets/img/home/arrow.png";
import {FC, Ref, useCallback, useEffect, useRef, useState} from "react";
import SliderItemGenre from "./SliderItemGenre/SliderItemGenre";
import styles from "./Slider.module.scss";
import classNames from "classnames";
import SliderItemMovie from "./SliderItemMovie/SliderItemMovie";
import {IGenre, IMovieTop} from "../../types/types";
interface ISlider {
    movies: IMovieTop[] | IGenre[];
}

const Slider:FC<ISlider> = ({movies}) => {
    const [translate, setTranslate] = useState(0);
    const [maxTranslate, setMaxTranslate] = useState(0);
    const [lastTranslate, setLastTranslate] = useState(0);
    const translateWrapper = useRef<HTMLDivElement>(null);

    const widthItem = "filmId" in movies[0] ? 320 : 240;
    const width = translateWrapper?.current?.clientWidth || 0;


    useEffect(() => {
        setMaxTranslate(widthItem * movies.length)
    }, [movies.length])

    const nextItem = () => {
        if (maxTranslate >= translate + width && maxTranslate < translate + width + widthItem) {
            setTranslate(maxTranslate - width + 50);
            setLastTranslate(translate);
        }
        else if (maxTranslate >= translate + width)
            setTranslate(prevState => prevState + widthItem);
        else
            setTranslate(0);
    }

    const previousItem = () => {
        if (translate === maxTranslate - width + 50) {
            setTranslate(lastTranslate)
        }
        else
            setTranslate(prevState => prevState - widthItem);
    }

    return (
        <div className={classNames(styles.movieChapter__slider, styles.slider)} ref={translateWrapper}>

            <div onClick={previousItem} className={classNames(styles.slider__arrow, styles.slider__arrow_left)}>
                {translate > 0 && <img src={arrow} alt=""/>}
            </div>

            <div className={styles.slider__translateWrapper} style={{transform: `translateX(${-translate}px`}}>
                {movies.map((film, index) => {
                    let item, key;
                    if ("filmId" in film) {
                        item = <SliderItemMovie posterUrl={film.posterUrl} rating={film.rating} year={film.year}/>;
                        key = film.filmId;
                    }
                    else {
                        item = <SliderItemGenre genre={film.genre} index={index}/>;
                        key = film.id;
                    }
                    return (
                        <div className={styles.slider__item} key={key}>
                            { item }
                        </div>
                    )
                })}
            </div>

            <div onClick={nextItem} className={classNames(styles.slider__arrow, styles.slider__arrow_right)}>
                <img src={arrow} alt=""/>
            </div>

        </div>
    )
}

export default Slider;