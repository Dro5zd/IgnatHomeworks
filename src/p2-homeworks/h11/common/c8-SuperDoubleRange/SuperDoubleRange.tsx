import React from 'react'
import s from '../c8-SuperDoubleRange/SuperDoubleRange.module.css'
import SuperRange from '../c7-SuperRange/SuperRange';

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value: [number, number]
    min: number,
    max: number,
    setValue1: (n: number) => void
    setValue2: (n: number) => void
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        min, max,
        ...props
    }
) => {

    const func1 = (n: number) => {
        if (value[1] <= n) return
        props.setValue1(n)
    }
    const func2 = (n: number) => {
        if (value[0] >= n) return
        props.setValue2(n)
    }

    return (
        <div className={s.double}>
            <SuperRange value={value[0]}
                        min={min}
                        max={max}
                        onChangeRange={func1}
                        styleClassNameRange={s.rangePosition}
            />
            <SuperRange value={value[1]} min={min} max={max}
                        onChangeRange={func2}
            />
        </div>
    )
}

export default SuperDoubleRange
