import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from './Routes';

function Header() {
    return (
        <div className="menu">
            <NavLink to={PATH.PRE_JUNIOR}><button>PreJunior</button></NavLink>
            <NavLink to={PATH.JUNIOR}><button>Junior</button></NavLink>
            <NavLink to={PATH.JUNIOR_PLUS}><button>JuniorPlus</button></NavLink>

        </div>
    )
}

export default Header
