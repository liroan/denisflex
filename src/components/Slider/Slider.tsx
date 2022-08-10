import arrow from "../../assets/img/home/arrow.png";
import {FC, Ref, useCallback, useEffect, useRef, useState} from "react";
import SliderItemGenre from "./SliderItemGenre/SliderItemGenre";
import styles from "./Slider.module.scss";
import classNames from "classnames";
import SliderItemMovie from "./SliderItemMovie/SliderItemMovie";
import {useSizeWindow} from "../../hooks/hooks";
interface ISlider {
    films: any,
    isGenre?: boolean
}

const Slider:FC<ISlider> = ({films, isGenre}) => {
    const [translate, setTranslate] = useState(0);
    // const [showArrow, setShowArrow] = useState(true);
    const [maxTranslate, setMaxTranslate] = useState(0);
    const [lastTranslate, setLastTranslate] = useState(0);
    const { width, height }: { width: number, height: number } = useSizeWindow();
    const widthItem = isGenre ? 300 : 400;
    const widthItemWithMargin = widthItem + 20;

    // useEffect(() => {
    //     setShowArrow(width + translate > maxTranslate)
    // }, [width])

    useEffect(() => {
        setMaxTranslate(widthItemWithMargin * films.length)
    }, [films.length])

    const nextItem = () => {
        if (maxTranslate >= translate + width && maxTranslate < translate + width + widthItemWithMargin) {
            setTranslate(maxTranslate - width + 50);
            setLastTranslate(translate);
        }
        else if (maxTranslate >= translate + width)
            setTranslate(prevState => prevState + widthItemWithMargin);
        else
            setTranslate(0);
    }

    const previousItem = () => {
        if (translate === maxTranslate - width + 50) {
            console.log(lastTranslate, translate)
            setTranslate(lastTranslate)
        }
        else
            setTranslate(prevState => prevState - widthItemWithMargin);
    }

    return (
        <div className={classNames(styles.movieChapter__slider, styles.slider)}>
            {true &&
                <div onClick={previousItem} className={classNames(styles.slider__arrow, styles.slider__arrow_left)}>
                    {translate > 0 && <img src={arrow} alt=""/>}
                </div>
            }
            <div className={styles.slider__translateWrapper} style={{transform: `translateX(${-translate}px`}}>
                {films.map((film: any) => {
                    const item = !isGenre ? <SliderItemMovie {...film} /> : <SliderItemGenre {...film} />;
                    return (
                        <div className={styles.slider__item}>
                            { item }
                        </div>
                    )
                })}
            </div>
            {
                true &&
                    <div onClick={nextItem} className={classNames(styles.slider__arrow, styles.slider__arrow_right)}>
                        <img src={arrow} alt=""/>
                    </div>
            }
        </div>
    )
}

export default Slider;