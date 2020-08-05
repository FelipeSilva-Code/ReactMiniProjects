import React from "react";
import './index.css'
import Logo from '../../assets/images/WebDev.svg'
import { Link } from "react-router-dom";

function Menu(){
    return(
        <div className='topo'>
            <div className="menu">
               <Link to="/">
                    <img className="LogoDev" src={Logo}/>
                </Link>
            </div>
        </div>

    )
}


export {Menu}