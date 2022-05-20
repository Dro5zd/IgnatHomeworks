import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './H11.module.css'

function HW11() {
    const [value1, setValue1] = useState(40)
    const [value2, setValue2] = useState(100)

    const onChangeInputRangeHandle = (num: number) => {
        if (num >= value2) return
        setValue1(num)
    }

    const onChangeDoubleInputRangeHandle = (nums: Array<number>) => {
        setValue1(nums[0])
        setValue2(nums[1])
    }

    return (
        <div>
            <hr/>
            homeworks 11
            <div className={s.container}>
                <div>
                    <SuperRange
                        value={value1}
                        min={0}
                        max={100}
                        onChangeRange={onChangeInputRangeHandle}
                    />
                </div>
                <div>
                    <div className={s.valueContainer}>
                        <span>{value1}</span>
                        <span>{value2}</span>
                    </div>
                    <SuperDoubleRange onChangeRange={onChangeDoubleInputRangeHandle}
                                      value={[value1, value2]}
                                      setValue1={setValue1}
                                      setValue2={setValue2}
                                      min={0}
                                      max={100}
                    />

                </div>
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
