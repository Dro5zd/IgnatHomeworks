import React from "react";
import s from "./HW12.module.css";
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect';
import {useDispatch, useSelector} from 'react-redux';
import {changeThemeAC} from './bll/themeReducer';
import {AppStoreType} from '../h10/bll/store';

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(store =>store.theme.theme)

    // useDispatch, onChangeCallback
const dispatch = useDispatch()

    const onChangeCallback = (theme: string)=>{
        dispatch(changeThemeAC(theme))
    }
    return (
        <div className={s.container}>

            <div className={s[theme]}>
                <hr/>
                <span className={s[theme + '-text']}>
                homeworks 12
            </span>
                {/*should work (должно работать)*/}
                <SuperSelect
                    onChange={(e) => onChangeCallback(e.currentTarget.value)}
                    options={themes}/>

                <hr/>
            </div>
        </div>

    );
}

export default HW12;
