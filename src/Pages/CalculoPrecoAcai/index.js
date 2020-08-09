import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Menu} from '../../components/menu';
import Footer from '../../components/Footer';
import "./index.css"

export default function CalculoAcai () {
   
  
   const [quantidadePequeno, setQuantidadePequeno] = useState(0);
   const [quantidadeMedio, setQuantidadeMedio] = useState(0);
   const [quantidadeGrande, setQuantidadeGrande] = useState(0);
   const [resultado, setResultado] = useState("R$0");
   const [formaPagemento, setFormaPagamento] = useState()
   
   const calcTotal = () => {
       let total = (quantidadePequeno * 10) + (quantidadeMedio * 12) + (quantidadeGrande * 15);

       if(formaPagemento === "Dinheiro"){
        let x =(90 * total / 100);
        setResultado("R$" + x) 
      }
      else
       setResultado("R$" + total);
       toast.success("Confirmado Com Sucesso!!!") //Chamando a função que exibe um alerta
   }


  return (
    <div>
      <Menu />

      <div className="containerCalcAcai">
        <div className="centroCalcAcai">
          <h2>Cálculo total do Açai</h2>
          <div className="qtdPequeno">
            <label>Quantidade Pequeno: &nbsp;</label>
            <input
              className="inputsCalcAcai"
              type="number"
              onChange={(e) => setQuantidadePequeno(e.target.value)}
            ></input>
          </div>

          <div className="qtdMedio">
            <label>Quantidade Médio: &nbsp; &nbsp; &nbsp;</label>
            <input
              className="inputsCalcAcai"
              onChange={(e) => setQuantidadeMedio(e.target.value)}
              type="number"
            ></input>
          </div>

          <div className="qtdGrande">
            <label>Quantidade Grande:&nbsp; &nbsp; &nbsp;</label>
            <input
              className="inputsCalcAcai"
              type="number"
              onChange={(e) => setQuantidadeGrande(e.target.value)}
            ></input>
          </div>

          <div className="radioCalcAcai">
            <div className="formaPagementoCalcAcai">
              <label>
                Cartão
                <input
                  onChange={(e) =>
                    setFormaPagamento(e.target.checked ? "Cartão" : "")
                  }
                  name="rd"
                  type="radio"
                ></input>
              </label>
              <label>
                Dinheiro
                <input
                  onChange={(e) =>
                    setFormaPagamento(e.target.checked ? "Dinheiro" : "")
                  }
                  name="rd"
                  type="radio"
                ></input>
              </label>
            </div>
          </div>

          <div>
            <button className="btnCalcAcai" onClick={calcTotal}>
              Confirmar
            </button>
          </div>

          <h3>O valor final é: &nbsp;{resultado}</h3>
        </div>
      </div>

      <Footer />
      <ToastContainer />
    </div>
  );
}

