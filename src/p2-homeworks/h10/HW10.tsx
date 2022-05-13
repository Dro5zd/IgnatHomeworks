import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from 'react-redux';
import {loadingAC} from './bll/loadingReducer';
import {AppStoreType} from './bll/store';
import img from './Dual Ball-1.3s-108px.svg'
import s from '../h10/H10.module.css';

function HW10() {
    const loading = useSelector<AppStoreType, boolean>(store => store.loading.isLoading)
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(loading))
        setTimeout(() => {
            dispatch(loadingAC(!loading))
        }, 2000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            <div className={s.container}>
                {loading
                    ? (
                        <div className={s.loadingContainer}>
                            <img src={img} alt="loading"/>
                            Stand with Ukraine
                        </div>
                    ) : (
                        <div>
                            <SuperButton className={s.btn10} onClick={setLoading}>set loading...</SuperButton>
                        </div>
                    )
                }
            </div>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
