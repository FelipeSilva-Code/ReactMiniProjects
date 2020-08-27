import React, { useState, useEffect } from 'react';
import './index.css'
import { Menu } from '../../components/menu'
import Footer from '../../components/Footer'
import WeatherApi from '../../services/WeatherApi';
import ContainerContent from '../../components/ContainerContent'


const api = new WeatherApi();

export default function Weather () {

    const [show, setShow] = useState(false)

    const [name, setName] = useState("");

    const [coord, setCoord] = useState({
        "lon":0,
        "lat":0
    })
    
    const [wind, setWind] = useState({
        "speed": 0,
        "deg": 0
    })

    const [weather, setWeather] = useState([{
        "id":0,
        "main": "",
        "description":"",
        "icon":""
    }]);

    const [main, setMain] = useState({
        "temp": 0,
        "feels_like": 0,
        "temp_min": 0,
        "temp_max": 0,
        "pressure": 0,
        "humidity": 0
    })

    const [city, setCity] = useState("São Paulo");

    useEffect(() => { 
        consultClick();
    }, [])

    const [urlIcon, setUrlIcon] = useState("")

    

        const consultClick = async ()  => {
       
            try{
    
                const result = await api.ConsultNow(city);


                setName(result.name)
                
                setWeather(result.weather);

                setMain(result.main);

                setWind(result.wind);

                setCoord(result.coord);

                setUrlIcon("http://openweathermap.org/img/wn/" + result.weather[0].icon + "@2x.png");

                

                console.log(result)

               
                setShow(false);
                setShow(true)
       
       
       
    }   catch(e){
        console.log(e.response)
        }
         

    }

    

    return(
        <div>
            <Menu/>
              <ContainerContent>
                 <div className="containerWeather">
                   <div className="containerTitleWeather">
                     <div><h2>Consulte o clima da sua cidade</h2></div>
                    <div className="containerInputsWeather">
                        <div>
                         <label>Cidade:   
                        <input
                        className="form-control inputCityWeather"
                        placeholder="ex: São Paulo"
                        onChange={(e) => setCity(e.target.value)}
                        />
                        </label>

                        <button
                        className="btn btn-primary btnWeather"
                        onClick={consultClick}
                        >Procurar</button>
                        </div>
                        </div>   
                    </div>  


                            <div className="contentWeather">
                              <div className="otherDatas">
                                  <div>
                                      <h4>Tempo agora em: {name}</h4>  
                                      <br/>
                                      <h6>Vento: {wind.speed} m/s²</h6>
                                      <br />
                                      <h6>Humidade: {main.humidity}%</h6>
                                      <br />
                                      <h6>Pressão atmosférica: {main.pressure} hPa</h6>
                                      <br />
                                      <h6>Latitulde: {coord.lat} </h6>
                                      <br />
                                      <h6>Longitulde: {coord.lon}</h6>
                                  </div>
                              </div>

                                <div className="weatherNow">
                                    <h2>{main.temp}º</h2>

                                    <h4>Sensação de {main.feels_like}º</h4>

                                    <h4>{weather[0].description}</h4>

                                   <img className="weatherIcon" src={urlIcon}></img>
                                </div>

                            </div>

                   
                 </div>
              </ContainerContent>

            <Footer/>
        </div>
    )
}