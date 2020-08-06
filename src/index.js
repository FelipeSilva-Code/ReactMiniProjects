import React from'react';
import Front_End from '../src/Pages/Front-End/'
import Home from '../src/Pages/Home'
import NotFound from './Pages/NotFound'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/frontend" component={Front_End} exact/>
      <Route path="*" component={NotFound} /> 
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

