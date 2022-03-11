import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'
import DeleteIcon from '@mui/icons-material/Delete';

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={s.list}>
           <div className={s.title}>
               {props.affair.name}
               <DeleteIcon onClick={deleteCallback} className={s.del_btn}/>

           </div>

        </div>
    )
}

export default Affair
