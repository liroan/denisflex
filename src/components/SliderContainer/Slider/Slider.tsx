import React, {useCallback, useEffect, useRef, useState} from "react";
import styles from "./Slider.module.scss";
import classNames from "classnames";
import {useAppSelector} from "../../../hooks";

interface SliderProps<T> {
    items: T[];
    getSliderCard: (item: T, index: number) => React.ReactNode;
    isWideCard?: boolean;
}

function Slider<T>(props: SliderProps<T>) {
    const {items, getSliderCard, isWideCard} = props;
    const [translate, setTranslate] = useState(0);
    const [maxTranslate, setMaxTranslate] = useState(0);
    const [lastTranslate, setLastTranslate] = useState(0);
    const translateWrapper = useRef<HTMLDivElement>(null);

    const widthItem = !isWideCard ? 240 : 320;
    const width = translateWrapper?.current?.clientWidth || 0;

    const isMobile = useAppSelector(state => state.auth.isMobile)

    // if (isMobile) {
    //     // User-Agent is IPhone, IPod, IPad, Android or BlackBerry
    // }

    useEffect(() => {
        setMaxTranslate(widthItem * items.length)
    }, [items.length])

    const nextItem = useCallback(() => {
        if (maxTranslate >= translate + width && maxTranslate < translate + width + widthItem) {
            setTranslate(maxTranslate - width + 50);
            setLastTranslate(translate);
        } else if (maxTranslate >= translate + width)
            setTranslate(prevState => prevState + widthItem);
        else
            setTranslate(0);
    }, [maxTranslate, translate, width])

    const previousItem = useCallback(() => {
        if (translate === maxTranslate - width + 50) {
            setTranslate(lastTranslate)
        } else
            setTranslate(prevState => prevState - widthItem);
    }, [maxTranslate, translate, width])

    return (
        <div className={classNames(styles.movieChapter__slider, styles.slider)} ref={translateWrapper}>

            <div onClick={previousItem} className={classNames(styles.slider__arrow, styles.slider__arrow_left,
                {[styles.slider__arrow_wide]: isWideCard, [styles.slider__arrow_noOpacity]: isMobile})}>
                {translate > 0 && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/>
                </svg>}
            </div>

            <div className={styles.slider__translateWrapper} style={{transform: `translateX(${-translate}px`}}>
                {items.map(getSliderCard)}
            </div>

            {maxTranslate > width && (
                <div onClick={nextItem} className={classNames(styles.slider__arrow, styles.slider__arrow_right,
                    {[styles.slider__arrow_wide]: isWideCard, [styles.slider__arrow_noOpacity]: isMobile})}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/>
                    </svg>
                </div>
            )}

        </div>
    )
}

export default Slider;