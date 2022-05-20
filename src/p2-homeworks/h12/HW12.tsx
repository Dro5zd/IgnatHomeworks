import React from 'react';
import s from './HW12.module.css';
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect';
import {useDispatch, useSelector} from 'react-redux';
import {changeThemeAC} from './bll/themeReducer';
import {AppStoreType} from '../h10/bll/store';

const themes = ['some', 'dark', 'red'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(store => store.theme.theme)

    const dispatch = useDispatch()

    const onChangeCallback = (theme: string) => {
        dispatch(changeThemeAC(theme))
    }
    return (
        <div>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
                  </span>
            <div className={s[theme]}>
                <SuperSelect
                    onChange={(e) => onChangeCallback(e.currentTarget.value)}
                    options={themes}/>


            </div>
            <hr/>
        </div>

    );
}

export default HW12;
