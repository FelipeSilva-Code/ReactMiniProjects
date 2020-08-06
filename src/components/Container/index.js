import React from 'react'
import './index.css'


export default function Container(){
    return(
        <div className="container">
            
            <div className='trio'>
              <h1>  
                  O "trio de ferro" do Front-End
              </h1>
            </div>
           
            <div className='base'>
                <p className='ling'>O 'trio de ferro' é composto por HTML, CSS e JavaScript. Essas
                    três linguagens são muito importantantes no desenvolvimento WEB
                    e devem ser conhecidas e dominadas por todos os programadores que trabalham com
                    o Front-End.
                </p>
            </div>
            
            <div className='linguagens'>
                <ul>
                    <li>
                      O HTML é a base da programação 
                      (como se fosse o esqueleto o corpo)
                    </li>
                    <li>
                       O CSS é o que dá estilo aos códigos 
                       (como se fosse a roupa que a pessoa utiliza)
                    </li>
                    <li>
                       O Javascript é o que dá movimento e ação  
                       (como se fosse o espírito do corpo)
                    </li>
                </ul>
            </div>
           

        </div>
    )
}