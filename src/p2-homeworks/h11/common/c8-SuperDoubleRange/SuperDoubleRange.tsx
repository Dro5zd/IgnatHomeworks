import React from 'react'
import s from '../c7-SuperRange/SuperRange.module.css'
import Slider from '@mui/material/Slider';
import {Box} from '@mui/material';

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number[]) => void
    // onChangeRange?: (value1: number) => void

    value?: number[]
    min?: number,
    max?: number,
    step?: number,
    disable?: boolean
}

const SuperDoubleRange = (props: SuperDoubleRangePropsType) => {
    // сделать самому, можно подключать библиотеки

    const handleChange = (event: Event, newValue: number | number[]) => {
        props.onChangeRange && props.onChangeRange(newValue as [number, number]);

    };

    return (
        <div className={s.container}>
            <Box sx={{ width: 300 }}>
            <Slider
                value={props.value}
                onChange={handleChange}
                valueLabelDisplay="auto"
            />
            </Box>
        </div>
    )
}

export default SuperDoubleRange
