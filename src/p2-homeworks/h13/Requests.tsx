import React, {ChangeEvent, memo, useCallback, useState} from 'react';
import {requestAPI} from './dal/request-api';
import s from './HW13.module.css';

export const Request = memo(() => {

    const [isChecked, setIsChecked] = useState(false)
    const [error, setError] = useState('')

    const checkedHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.currentTarget.checked)
    }
    const sendHandler = useCallback( () => {
        requestAPI.sendRequest(isChecked)
            .then((res) => {setError(res.data.errorText)})
            .catch((error) => {
                // console.log({...error});
                // console.log(error.response ? error.response.data.errorText : error.message);
                setError(error.response ? error.response.data.errorText : error.message);
            })
    }, [isChecked])

    return (
        <div className={s.loadingContainer}>
            <div><button onClick={sendHandler}>Send</button></div>
            <div> <input type="checkbox" onChange={checkedHandler}/></div>
            <div><span >{error}</span></div>
        </div>
    );
});