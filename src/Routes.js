import React from 'react';
import Front_End from './Pages/Front-End'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import CalculoPrecoAcai from './Pages/CalculoPrecoAcai'
import CalculadoraIMC from './Pages/CalculadoraIMC'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cep from './Pages/Correios';
import Weather from './Pages/Weather';
import Testes from './Pages/Testes'




export default function Router(){
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Frontend" component={Front_End} exact />
          <Route path="/CalculoPrecoAcai" component={CalculoPrecoAcai} exact />
          <Route path="/Calculadora/Imc" component={CalculadoraIMC} exact />
          <Route path="/Weather" component={Weather} exact />
          <Route path="/Cep" component={Cep} exact />
          <Route path="/testes" component={Testes} exact />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
}
