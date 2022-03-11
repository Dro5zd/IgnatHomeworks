import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string   // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onKeyPressAddUserHandler: ({charCode}: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressAddUserHandler}
) => {
    // const inputClass = error ? s.errorInput : s.input

    return (
        <div className={s.form}>
            <h1>Say your Name</h1>
            <div>
                <input
                    value={name}
                    onChange={setNameCallback}
                    onKeyPress={onKeyPressAddUserHandler}
                    className={s.errorInput}
                    onBlur={setNameCallback}/>
                <span className={s.error}>{error}</span>
            </div>
            <button onClick={addUser} disabled={!name}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
