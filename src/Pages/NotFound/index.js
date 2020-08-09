import React from 'react';
import './index.css'
import Gif from '../../assets/videos/wolfgif.gif'

export default function NotFound (){
    return(
        <div className="ntf">
             <h1>Ta perdido? Aqui não tem nada.</h1>
            <img alt="Giff" src={Gif}/>
        </div>
    )
}