import React from 'react';
import './index.css'
import LogoNotFound from '../../assets/images/NotFound.webp'

export default function NotFound (){
    return(
        <div>
             <img className="Notf" src={LogoNotFound} />
        </div>
    )
}