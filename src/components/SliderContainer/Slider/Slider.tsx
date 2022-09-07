import arrow from "../../../assets/img/home/arrow.png";
import React, {useCallback, useEffect, useRef, useState} from "react";
import styles from "./Slider.module.scss";
import classNames from "classnames";
import withScreensaver from "../../../hocs/withScreensaver";

interface SliderProps<T> {
    items: T[];
    getSliderCard: (item: T, index: number) => React.ReactNode;
    isWideCard?: boolean;
}

function Slider<T>(props: SliderProps<T>) {
    const { items, getSliderCard, isWideCard } = props;
    const [translate, setTranslate] = useState(0);
    const [maxTranslate, setMaxTranslate] = useState(0);
    const [lastTranslate, setLastTranslate] = useState(0);
    const translateWrapper = useRef<HTMLDivElement>(null);

    const widthItem = !isWideCard ? 240 : 320;
    const width = translateWrapper?.current?.clientWidth || 0;


    useEffect(() => {
        setMaxTranslate(widthItem * items.length)
    }, [items.length])

    const nextItem = useCallback(() => {
        if (maxTranslate >= translate + width && maxTranslate < translate + width + widthItem) {
            setTranslate(maxTranslate - width + 50);
            setLastTranslate(translate);
        }
        else if (maxTranslate >= translate + width)
            setTranslate(prevState => prevState + widthItem);
        else
            setTranslate(0);
    }, [maxTranslate, translate, width])

    const previousItem = useCallback(() => {
        if (translate === maxTranslate - width + 50) {
            setTranslate(lastTranslate)
        }
        else
            setTranslate(prevState => prevState - widthItem);
    }, [maxTranslate, translate, width])

    return (
        <div className={classNames(styles.movieChapter__slider, styles.slider)} ref={translateWrapper}>

            <div onClick={previousItem} className={classNames(styles.slider__arrow, styles.slider__arrow_left,
                { [styles.slider__arrow_wide]: isWideCard })}>
                {translate > 0 && <img src={arrow} alt=""/>}
            </div>

            <div className={styles.slider__translateWrapper} style={{transform: `translateX(${-translate}px`}}>
                {items.map(getSliderCard)}
            </div>

            { maxTranslate > width && (
                 <div onClick={nextItem} className={classNames(styles.slider__arrow, styles.slider__arrow_right,
                     { [styles.slider__arrow_wide]: isWideCard })}>
                    <img src={arrow} alt=""/>
                </div>
            )}

        </div>
    )
}

export default withScreensaver(Slider);