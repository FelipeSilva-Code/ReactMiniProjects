import React from 'react';
import './index.css'
import LogoCSS from '../../assets/images/css3.svg'


export default function containerThree() {
    return (
        <div className="contThree">
            <div className="texto3">
                <p>
                     O Cascading Style Sheets (CSS) foi proposto pela primeira vez
                     em Outubro de 1994, por Hakon Lie, que queria facilitar a 
                     programação de sites, que na época era muito mais complexa. 
                     As pessoas tinham que utilizar mais códigos para chegar a um 
                     resultado simples, como criar uma tabela.

                     Em 1995 o CSS1 foi desenvolvido pela W3C, um grupo de empresas 
                     do ramo da informática. A linguagem de estilos ganhou muito destaque
                     entre 1997 e 1999, neste período ficou conhecido por grande parte 
                     dos programadores.
                    <br />
                    <a href='https://pt.wikipedia.org/wiki/CSS'>Saiba Mais</a>
                </p>
            </div>

            <div className="Image3">
                <img className="logo3" alt="Logo Css" src={LogoCSS} />
            </div>

        </div>
    )
}