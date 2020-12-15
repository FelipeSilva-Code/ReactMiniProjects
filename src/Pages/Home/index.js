import React from 'react';
import './index.css';
import {Menu} from "../../components/menu"
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import ContainerContent from '../../components/ContainerContent';

function Home (){
    return (
      <>
        <Menu />

        <ContainerContent>
          <h2 className="tituloHome">
            Bem vindo ao WebDeveloper, um lugar onde eu (Felipe Conceição) faço
            projetos usando a tecnologia React.JS. 
            <br />
            Esse site é voltado para projetos que não envolvem o uso de
            Back-End.
          </h2>

          <div className="divHome">
            <p className="txtHome">
              Links de alguns dos projetos feitos por mim:
            </p>

            <li>
              <Link className="linkHome" to="/weather">
                Consulta do Clima Atual (Consumindo api do OpenWeather)
              </Link>
            </li>

            <ul className="ul">
              <li>
                <Link className="linkHome" to="/cep">
                  Consulta de CEP (Consumindo api do ViaCep)
                </Link>
              </li>

              <li>
                <Link className="linkHome" to="/calculadora/imc">
                  Calculadora de IMC
                </Link>
              </li>

              <li>
                <Link className="linkHome" to="/CalculoPrecoAcai">
                  Calcular Preço do Açai
                </Link>
              </li>

              <li>
                <Link className="linkHome" to="/frontend">
                  Front-End
                </Link>
              </li>
            </ul>
          </div>
        </ContainerContent>
        <Footer />
      </>
    );
}

export default Home;