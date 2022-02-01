import React from 'react'
import Message from "./Message";

const messageData = {
    avatar: 'https://avatarfiles.alphacoders.com/693/69306.jpg',
    name: 'Homer Simpson',
    message: "D'Oh!",
    time: '9:00',
}

function HW1() {

    return (
        <div>
            <hr/>
            homeworks 1
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
