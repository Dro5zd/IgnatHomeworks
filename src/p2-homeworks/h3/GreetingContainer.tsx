import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3';

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value.trim()
        setName(value)
        if (value && !+(value)) {
            setName(value)
            setError('')
        } else {
            setError('Wrong Name!')
            setName('')
        }
    }

    const addUser = () => {
        addUserCallback(name)
        alert(`Hello ${name} !`)
        setName('')
    }

    const onKeyPressAddUserHandler = ({charCode}: KeyboardEvent<HTMLInputElement>) => {
        if (charCode === 13 && name) addUser()
    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyPressAddUserHandler={onKeyPressAddUserHandler}
        />
    )
}

export default GreetingContainer
