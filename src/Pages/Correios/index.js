import React, { useState } from 'react';
import CorreiosApi from '../../services/CorreiosApi';
import './index.css'
import {Menu} from '../../components/menu'
import Footer from '../../components/Footer'
import ContainerContent from '../../components/ContainerContent'
const api = new CorreiosApi();


export default function Correios () {
    


   
    const [cep, setCep] = useState("")
    const [logradouro, setLogradouro] = useState("");
    const [complemento, setComplemento] = useState("");
    const [bairro, setBairro] = useState("");
    const [localidade, setLocalidade] = useState("");

      const apagaDados = () => {
        setLogradouro("");
        setComplemento("");
        setBairro("");
        setLocalidade("");
      }
 
       const consultarClick = async () => {
       const resp = await api.consultar(cep);
       setLogradouro(resp.logradouro);
       setComplemento(resp.complemento);
       setBairro(resp.bairro);
       setLocalidade(resp.localidade);
       console.log(resp);

       
       if(resp.erro === true){
         apagaDados();
         alert("CEP não encontrado")
       }

       
      
      
    };
    return (
      <>
      
      <Menu/>
     
      <ContainerContent>

      <div className="containerCentralCorreios">
          <div>  
            <h1>Consulta de CEP</h1>
          </div>

        <div className="divInputsCep">

          <div className="inputCorreios">
            <label>Cep:</label><input className="form-control inputCep" type="text" onChange={(e) => setCep(e.target.value)} value={cep}></input>
          </div>
        
          <div className="inputCorreios">
            <label>Logradouro:</label><input className="form-control inputCep" type="text" readOnly value={logradouro}/>
          </div>

          <div className="inputCorreios">
            <label>Complemento:</label><input className="form-control inputCep" type="text" readOnly value={complemento} />
          </div>

          <div className="inputCorreios">
            <label>Bairro:</label><input className="form-control inputCep" type="text" readOnly value={bairro} />
          </div>

          <div className="inputCorreios">
            <label>Localidade:</label><input className="form-control inputCep" type="text" readOnly value={localidade} />
          </div>

        </div> 

          <div className="inputCorreiosButton">
            <button className="btn btn-warning" onClick={consultarClick}>Consultar</button>
        </div>
        
    
    
      </div>


      </ContainerContent>


      <Footer/>
      </>
    );
}