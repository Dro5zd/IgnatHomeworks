import React from 'react'
import png from './png.png'
import s from "../Header.module.css"

function Error404() {
    return (
        <div className={s.div}>
            <div className={s.png}><img src={png} alt="cry" className={s.png2}/></div>
            <div className={s.title1}>404</div>
            <div className={s.title2}>Page not found!</div>
        </div>
    )
}

export default Error404
