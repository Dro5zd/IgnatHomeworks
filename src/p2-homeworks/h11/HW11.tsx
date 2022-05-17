import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from '../h10/H10.module.css';

function HW11() {
    const [value1, setValue1] = useState(40)
    const [value2, setValue2] = useState(100)
    const [value, setValue] = React.useState<number[]>([4, 37])



    return (
        <div >
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={s.container}>
                <div>
                    <span>{value1}</span>
                    <SuperRange onChangeRange={setValue1}

                        // сделать так чтоб value1 изменялось
                    />
                </div>
                <div className={s.loadingContainer}>
                    <span>{value[0]}</span>
                    <SuperDoubleRange onChangeRange={setValue} value={value}
                        // сделать так чтоб value1 и value2 изменялось
                    />
                    <span>{value[1]}</span>
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
