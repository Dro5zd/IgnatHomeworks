import React from 'react'
import Message from './Message';
import s from '../h1/HW1.module.css';

const messageData = {
    avatar: 'https://avatarfiles.alphacoders.com/693/69306.jpg',
    name: 'Homer Simpson',
    message: 'D\'Oh!',
    time: '9:00',
}

function HW1() {

    return (
        <div>
            <hr/>
            homeworks 1
            <div className={s.column}>
                <Message
                    avatar={messageData.avatar}
                    name={messageData.name}
                    message={messageData.message}
                    time={messageData.time}
                />

            </div>
        </div>
    )
}

export default HW1
