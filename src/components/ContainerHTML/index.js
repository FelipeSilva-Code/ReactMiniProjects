import React from 'react';
import './index.css'
import LogoHTML from '../../assets/images/HTML.png'


export default function containerTwo (){
    return(
        <div className="contTwo">
            <div className="texto2">
                <p>
                    O HTML foi criado em 1991, por Tim Berners-Lee, 
                    no CERN (European Council for Nuclear Research) na suíça. 
                    Inicialmente o HTML foi projetado para interligar instituições 
                    de pesquisa próximas, e compartilhar documentos com facilidade.
                     Em 1992, foi liberada a biblioteca de desenvolvimento WWW 
                     (World Wide Web), uma rede de alcance mundial, que junto com o 
                     HTML proporcionou o uso em escala mundial da WEB.
                    <br />
                    <a href='https://pt.wikipedia.org/wiki/HTML'>Saiba Mais</a>
                </p>
            </div>

            <div className="Image2">
                <img className="logo2" src={LogoHTML} />
            </div>

        </div>
    )
}