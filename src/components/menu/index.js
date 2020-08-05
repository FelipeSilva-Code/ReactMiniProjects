import React from "react";
import './index.css'
import Logo from '../../assets/images/WebDev.svg'

function Menu(){
    return(
        <div className='topo'>
            <div className="menu">
                <img className="LogoDev" src={Logo}/>
            </div>
        </div>

    )
}


export {Menu}