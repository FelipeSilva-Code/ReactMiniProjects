import React from 'react';

import { Menu } from '../../components/menu'
import ContJavaScript from '../../components/FrontComponents/ContainerJavaScript'
import ContHTML from '../../components/FrontComponents/ContainerHTML'
import ContCss from '../../components/FrontComponents/ContainerCss'
import Container from '../../components/FrontComponents/Container'
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