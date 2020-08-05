import React from 'react';
import './index.css';
import { Menu } from '../../components/menu'
import ContJavaScript from '../../components/ContainerJavaScript'
import ContHTML from '../../components/ContainerHTML'
import ContCss from '../../components/ContainerCss'
import Container from '../../components/Container'
import Footer from '../../components/Footer'


function Front_End(){
     return(
         <>
         <Menu/>
         <Container/>
         <ContHTML/>
         <ContCss/>
         <ContJavaScript/>
         <Footer/>
         </>
     )
}


export default Front_End;