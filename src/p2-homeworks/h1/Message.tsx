import React from 'react'
import s from './Message.module.css'

type MessageProps ={
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props:MessageProps) {
    return (
        <div className={s.container}>
            <img src={props.avatar} alt="Avatar"/>

            <div className={s.messages_container}>
                <p className={s.name}>{props.name}</p>
                <p className={s.msg}>{props.message}</p>
                <span className={s.time}>{props.time}</span>
            </div>

        </div>
    )
}

export default Message