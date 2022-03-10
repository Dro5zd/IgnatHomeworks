import React from 'react'
import Header from './Header'
import Routs from './Routes'
import {HashRouter} from 'react-router-dom';

function HW5() {
    return (
        <div>
            <HashRouter>

            <Header/>

            <Routs/>

            </HashRouter>
        </div>
    )
}

export default HW5
