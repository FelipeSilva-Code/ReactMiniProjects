import React from 'react';
import './index.css';
import {Menu} from "../../components/menu"
import { Link } from 'react-router-dom';
import Gif from '../../assets/videos/wolfgif.gif';
import Footer from '../../components/Footer'

function Home (){
    return (
      <>
        <Menu />

        <div className="containerHome">
          <h1 className="tituloHome">
            Bem vindo ao WebDeveloper, um lugar onde eu (Felipe Lindo) treino os
            meus conhecimentos sobre o ReactJS
          </h1>

          <div className="divHome">
            <p className="txtHome">
              Links das maravilhosas paginas feitas por mim:
            </p>
            <ul>
              <li>
                <Link className="linkHome" to="/frontend">
                  Front-End
                </Link>
              </li>
              <li>
                <Link className="linkHome" to="/CalculoPrecoAcai">
                  Calcular Preço do Açai
                </Link>
              </li>
              <li>
                <Link className="linkHome" to="/calculadora/imc">
                  Calculadora de IMC
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Footer />
      </>
    );
}

export default Home;