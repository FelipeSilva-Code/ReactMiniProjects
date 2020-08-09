import React, { useState } from 'react';
import CorreiosApi from '../../services/CorreiosApi';

const api = new CorreiosApi();


export default function Correios () {
    


    const [resultado, setResultado] = useState();
 
    const consultarClick = async () => {
       setResultado(await api.consultar())
      console.log("Esse é o resultado" + resultado)
    };
    return (
      <div>
        <button onClick={consultarClick}>Aperte Aqui</button>

   
      </div>
    );
}