import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>("") // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
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

    const totalUsers = users.length // need to fix

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
