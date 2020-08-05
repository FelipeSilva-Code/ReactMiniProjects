import React from 'react';
import './index.css'
import LogoJS from '../../assets/images/JavaScript.png';

export default function containerOne (){
    return(
        <div className="contOne">
            <div className="texto">
               <p>
                    JavaScript é uma Linguagem de Programação, criada por Brendan Eich, 
                    a pedido da empresa Netscape, em meados de 1995. No início, o JavaScript 
                    foi batizado com outro nome: LiveScript. No entanto, a Netscape não ficou sozinha 
                    com o desenvolvimento do JavaScript. A empresa SUN Microsystems interessou-se por ela 
                    e entrou de cabeça no desenvolvimento desta nova linguagem, uma vez que acreditava na 
                    ideia inovadora que era o JavaScript.
                    <br/>
                    <a href='https://pt.wikipedia.org/wiki/JavaScript'>Saiba Mais</a>
               </p>
            </div>

            <div className="Image">
                <img className="logo" src={LogoJS}/>
            </div>
            
        </div>
    )
}