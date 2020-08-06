import React from 'react';
import Front_End from './Pages/Front-End'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import Teste from './Pages/Testes'
import { BrowserRouter, Switch, Route } from 'react-router-dom';


export default function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/frontend" component={Front_End} exact />
                <Route path="/teste" component={Teste} exact />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}
