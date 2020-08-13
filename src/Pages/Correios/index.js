import React, { useState } from 'react';
import CorreiosApi from '../../services/CorreiosApi';
import './index.css'
import {Menu} from '../../components/menu'
import Footer from '../../components/Footer'
const api = new CorreiosApi();


export default function Correios () {
    


   
    const [cep, setCep] = useState("")
    const [logradouro, setLogradouro] = useState("");
    const [complemento, setComplemento] = useState("");
    const [bairro, setBairro] = useState("");
    const [localidade, setLocalidade] = useState("");
 
       const consultarClick = async () => {
       const resp = await api.consultar(cep);
       setLogradouro(resp.logradouro);
       setComplemento(resp.complemento);
       setBairro(resp.bairro);
       setLocalidade(resp.localidade);

       
       if(resp.erro === true){
         setLogradouro("");
         setComplemento("");
         setBairro("");
         setLocalidade("");
         alert("CEP não encontrado")
       }

       
      
      
    };
    return (
      <>
      
      <Menu/>
     
      <div className="containerCorreios">

      <div className="containerCentralCorreios">

       <h1>Consulta de CEP</h1>

          <div className="inputCorreios">
            <label>Cep:</label><input className="form-control" type="text" onChange={(e) => setCep(e.target.value)} value={cep}></input>
        </div>
        
          <div className="inputCorreios">
            <label>Logradouro:</label><input className="form-control" type="text" readonly value={logradouro}/>
        </div>

          <div className="inputCorreios">
            <label>Complemento:</label><input className="form-control" type="text" readonly value={complemento} />
        </div>

          <div className="inputCorreios">
            <label>Bairro:</label><input className="form-control" type="text" readonly value={bairro} />
        </div>

          <div className="inputCorreios">
            <label>Localidade:</label><input className="form-control" type="text" readonly value={localidade} />
        </div>

          <div className="inputCorreiosButton">
            <button className="btn btn-primary" onClick={consultarClick}>Consultar</button>
        </div>
        
      
    
      </div>

      </div>

      <Footer/>
      </>
    );
}