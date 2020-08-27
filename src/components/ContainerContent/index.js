import React from 'react';
import './index.css'

export default function ContainerContent (props) {

    return(
        <div className="containerContent">
            
          {props.children}
       
        </div>
    )
}