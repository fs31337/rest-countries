import React from 'react';
import DarkMode from '../DarkMode/DarkMode';
import '../../Scss/styles.scss';
import {ReactComponent as Moon} from '../../img/moon.svg'

export default function Nav() {
    return (
        <div className= "nav flex">        
           <span className="tituloPrincipal">Where in the World?</span>
            <div className="contenedorDM">
                <Moon className="iconoDM"/>
                <DarkMode />
            </div>       
        </div>
    )
};