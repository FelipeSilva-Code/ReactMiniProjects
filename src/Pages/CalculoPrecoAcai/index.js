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
   const [valorPequeno, setValorPequeno] = useState(10);
   const [valorMedio, setValorMedio] = useState(12);
   const [valorGrande, setValorGrande] = useState(15);
   const [resultado, setResultado] = useState("R$0");
   const [formaPagemento, setFormaPagamento] = useState(false);
   
   const calcTotal = () => {

       
       let total = (quantidadePequeno * valorPequeno) + (quantidadeMedio * valorMedio) + (quantidadeGrande * valorGrande);

       if(formaPagemento === "Dinheiro"){
        let x =(90 * total / 100);
        setResultado("R$" + x) 
        toast.success("Confirmado Com Sucesso!!!");
      }
       else if(formaPagemento === "Cartão"){
       setResultado("R$" + total);
       toast.success("Confirmado Com Sucesso!!!"); //Chamando a função que exibe um alerta
     }
     else
       alert("A forma de pagamento é obrigatória");
    }


  return (
    <div>
      <Menu />

      <div className="containerCalcAcai">
        <div className="centroCalcAcai">
          <h2>Cálcular preço do açai</h2>
          <div className="qtdPequeno">
           
            <label htmlFor="qtd">Qtd Pequeno: &nbsp;
            <input
              value={quantidadePequeno}
              className="inputsCalcAcai"
              type="number"
              onChange={(e) => setQuantidadePequeno(e.target.value)}
            ></input>
            </label>

            <label>Valor: &nbsp;
            <input
            onChange={(e) => setValorPequeno(e.target.value)}
            value={valorPequeno}
            className="valorCalcAcai"
            type="number"></input>
            </label>
          </div>

          <div className="qtdMedio">
            <label>Qtd Médio: &nbsp; &nbsp; &nbsp;
            <input
              value={quantidadeMedio}
              className="inputsCalcAcai"
              onChange={(e) => setQuantidadeMedio(e.target.value)}
              type="number"
              ></input></label>

            <label>Valor:  &nbsp;
            <input
              onChange={(e) => setValorMedio(e.target.value)}
              value={valorMedio}
              className="valorCalcAcai"
              type="number"></input>
            </label>
          </div>

          <div className="qtdGrande">
            <label>Qtd Grande:&nbsp; &nbsp; &nbsp;
            <input
              value={quantidadeGrande}
              className="inputsCalcAcai"
              type="number"
              onChange={(e) => setQuantidadeGrande(e.target.value)}
            ></input>
            </label>

            <label>Valor:  &nbsp;
            <input
              value={valorGrande}
              onChange={(e) => setValorGrande(e.target.value)}
              className="valorCalcAcai"
              type="number"></input>
            </label>
          </div>

          <div className="radioCalcAcai">
            <div className="formaPagementoCalcAcai">
              <label>
                Cartão  &nbsp;
                <input
                  onChange={(e) =>
                    setFormaPagamento(e.target.checked ? "Cartão" : false)
                  }
                  name="rd"
                  type="radio"
                ></input>
              </label>
              <label>
                Dinheiro &nbsp;
                <input
                  onChange={(e) =>
                    setFormaPagamento(e.target.checked ? "Dinheiro" : false)
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

          <h2>O valor final é: &nbsp;{resultado}</h2>
        </div>
      </div>

      <Footer />
      <ToastContainer />
    </div>
  );
}

