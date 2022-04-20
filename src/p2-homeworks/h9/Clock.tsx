import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './H9.module.css'
import moment, {Moment} from 'moment';

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Moment>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {

        clearTimeout(timerId)

    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(moment())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)

    }

    const onMouseLeave = () => {
        setShow(false)
    }


    const stringTime = date?.format('HH:mm:ss') || <br/>  // fix with date
    const stringDate = date?.format('MMM Do YY') || <br/>// fix with date

    return (
        <div className={s.container}>
            <div className={s.display}>
                <div className={s.title}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    {stringTime}
                </div>

                {show && (
                    <div>
                        {stringDate}
                    </div>
                )}
            </div>

            <div className={s.btn_block}>
                <SuperButton onClick={start} className={s.btn9}>start</SuperButton>
                <SuperButton onClick={stop} className={s.btn9}>stop</SuperButton>
            </div>


        </div>
    )
}

export default Clock
