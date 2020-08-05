import React from'react';
import Front_End from '../src/Pages/Front-End/'
import Home from '../src/Pages/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/frontend" component={Front_End} exact/>
      <Route component={() => (<div>Pagina 404</div>)} /> 
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

