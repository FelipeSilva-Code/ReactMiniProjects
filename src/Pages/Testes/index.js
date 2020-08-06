import React, { useState } from 'react';


export default function Teste (){
    let [nome, setNome] = useState("Jovski")
    return(
        <>
    
        {nome === "Felipe" &&
        <h3>{nome} é lindo</h3>}

        

        {nome !== "Felipe" &&
        <h3>{nome} o Felipe é mais lindo que você</h3>}
        
        </>
    )
}

