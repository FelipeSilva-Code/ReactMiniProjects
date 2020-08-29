import React, { useState } from 'react';
import './index.css'
import {Menu} from '../../components/menu'
import Footer from '../../components/Footer'
import ContainerContent from '../../components/ContainerContent'
export default function Eventos(){

    const [texto, setTexto] = useState();
    const [nome, setNome] = useState("");
    const [altura, setAltura] = useState(0.0);
    const [peso, setPeso] = useState(0.0)

    const imcResultado = () => {
        let imc = peso / (altura ** 2);
         imc = imc.toFixed(1);
        if(imc <= 18.5)
           setTexto(`Olá ${nome}, o seu imc é de ${imc}, você está abaixo do peso`);
        else if (imc >= 18.6 && imc <=24.9)
            setTexto(`Olá ${nome}, o seu imc é de ${imc}, você está com o peso ideal`);  
        else if(imc >= 25)
            setTexto(`Olá ${nome}, o seu imc é de ${imc}, você está acima do peso`);     
    }

  


    return(
     <>
       <Menu/>
      
       <ContainerContent>

        <div className="calc">
           
                <h1 className="tituloCalc">Calculadora de IMC</h1>

                <div className="inputs">
                    <label>Nome: &nbsp; </label> 
                        <input className="imc form-control" type="text" onChange={(e) => setNome(e.target.value)}></input>
                    <br/>
                </div>

                <div className="inputs">
                    <label>Altura: &nbsp;</label>
                        <input className="imc form-control" type="number" onChange={(e) => setAltura(e.target.value)}></input>
                    <br/>
                </div>

                <div className="inputs">    
                        <label>Peso:&nbsp; &nbsp; &nbsp;</label>
                        <input className="imc form-control" type="number" onChange={(e) =>setPeso(e.target.value)}></input>
                    <br/>
                </div>    

                   <button className="calcular" onClick={imcResultado}>Calcular</button>
                
                <h4 className="resultadoCalcImc">{texto}</h4>

        </div>
       
   
       </ContainerContent>
        
    
        <Footer/>
     </>
    )
}