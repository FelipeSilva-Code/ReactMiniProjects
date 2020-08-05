import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Menu}  from './components/menu'
import ContJavaScript from './components/ContainerJavaScript'
import ContHTML from './components/ContainerHTML'
import ContCss from './components/ContainerCss'
import Container from './components/Container'
import Footer from './components/Footer'


ReactDOM.render(
  <React.StrictMode>
   <Menu/>
   <Container/>
   <ContHTML/>
   <ContCss/>
   <ContJavaScript/>
   <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

