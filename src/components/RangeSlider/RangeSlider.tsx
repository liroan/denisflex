import * as React from 'react';
import { Range, getTrackBackground } from 'react-range';
import styles from "./RangeSlider.module.scss"
import {TextField} from "@mui/material";

const STEP = 1;


const RangeSlider: React.FC<any> = ({ min, max }) => {
    const [fromValue, setFromValue] = React.useState(min);
    const [beforeValue, setBeforeValue] = React.useState(max);

    const onChangeFromValue = (e: any) => {
        const newValue = e.target.value ? +e.target.value : '';
        if (newValue !== '' && newValue < 1) setFromValue(min);
        else if (newValue !== '' && newValue > beforeValue) setFromValue(beforeValue);
        else setFromValue(newValue);
    }
    const onBlurFromValue = (e: any) => {
        const newValue = e.target.value ? +e.target.value : '';
        if (newValue === '' || newValue < min) setFromValue(min)
        else if (newValue > beforeValue) setFromValue(beforeValue);
    }
    const onChangeBeforeValue = (e: any) => {
        const newValue = e.target.value ? +e.target.value : '';
        setBeforeValue(newValue);
    }
    const onBlurBeforeValue = (e: any) => {
        const newValue = e.target.value ? +e.target.value : '';
        if (newValue === '' || newValue > max) setBeforeValue(max)
        else if (newValue < fromValue) setBeforeValue(fromValue);
    }
    const values = [Math.min(Math.max(fromValue, min), max), Math.min(Math.max(beforeValue, fromValue), max)];
    return (
        <div className={styles.rangeSlider}>
            <div className={styles.rangeSlider__fields}>
                <div className={styles.rangeSlider__input}>
                    <TextField
                        id="outlined-number"
                        label="От"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={fromValue}
                        onChange={onChangeFromValue}
                        onBlur={onBlurFromValue}
                    />
                </div>
                <div className={styles.rangeSlider__input}>
                    <TextField
                        id="outlined-number2"
                        label="До"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={beforeValue}
                        onChange={onChangeBeforeValue}
                        onBlur={onBlurBeforeValue}
                    />
                </div>
            </div>
            <div
                style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}
            >
                <Range values={values} step={STEP} min={min} max={max} onChange={(values) => {
                    setFromValue(values[0])
                    setBeforeValue(values[1])
                }}
                    renderTrack={({ props, children }) => (
                        <div onMouseDown={props.onMouseDown} onTouchStart={props.onTouchStart}
                             style={{...props.style, height: '16px', display: 'flex', width: '100%',}}
                        >
                            <div
                                ref={props.ref}
                                style={{height: '3px', borderRadius: '3px', width: '100%',
                                    background: getTrackBackground({values, colors: ['#333', '#E50914', '#333'],
                                        min,
                                        max,
                                    }),
                                    alignSelf: 'center'
                                }}
                            >
                                {children}
                            </div>
                        </div>
                    )}
                    renderThumb={({ props, isDragged }) => (
                        <div
                            {...props}
                            style={{...props.style, height: '17px', width: '17px', borderRadius: '50%', backgroundColor: '#FFF',
                                outline: 'none',
                            }}
                        >
                        </div>
                    )}
                />
            </div>
        </div>
    );
};

export default RangeSlider;