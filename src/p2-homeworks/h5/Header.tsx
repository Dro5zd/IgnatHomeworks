import React from 'react'
import {NavLink} from 'react-router-dom';
import {PATH} from './Routes';
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.header}>
            <NavLink to={PATH.PRE_JUNIOR} className={navData => navData.isActive ? s.active : s.link}>
                PreJunior
            </NavLink>
            <NavLink to={PATH.JUNIOR} className={navData => navData.isActive ? s.active : s.link}>
                Junior
            </NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={navData => navData.isActive ? s.active : s.link}>
                JuniorPlus
            </NavLink>
            <div className={s.block}>☰</div>
        </div>
    )
}

export default Header
