import React, { useState, useEffect, useRef } from "react";
import './index.css'
import { Menu } from '../../components/menu'
import Footer from '../../components/Footer'
import WeatherApi from '../../services/WeatherApi';
import ContainerContent from '../../components/ContainerContent'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingBar from 'react-top-loading-bar';



const api = new WeatherApi();

export default function Weather () {

    const loadingBar = useRef(null);

    const [name, setName] = useState("");

    const [country, setCountry] = useState("")

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


    const [urlIcon, setUrlIcon] = useState("")

    

        const consultClick = async ()  => {
       
            try{
    
                const result = await api.ConsultNow(city);

                loadingBar.current.continuousStart();

                const r = await api.ConsultForecast();
                console.log(result);
                console.log(r);

                setName(result.name)
                
                setWeather(result.weather);

                setMain(result.main);

                setWind(result.wind);

                setCoord(result.coord);

                setCountry(result.sys.country);

                setUrlIcon("https://openweathermap.org/img/wn/" + result.weather[0].icon + "@2x.png");
    
                loadingBar.current.complete();
      }catch(e){
        
        if(e.response.data.message === "city not found")
        toast.error("Cidade não encontrada");
        else
        toast.error("Aconteceu um erro, tente novamente")
        
        }
    }

    useEffect(() => {
        consultClick();
    }, [])

    

    return (
      <div>
        <LoadingBar height={3} color="aqua" ref={loadingBar} />
        <Menu />
        <ContainerContent>
          <div className="containerWeather">
            <div className="containerTitleWeather">
              <div>
                <h2>Consulte o clima da sua cidade</h2>
              </div>
              <div className="containerInputsWeather">
                <div>
                  <label>
                    Cidade:
                    <input
                      className="form-control inputCityWeather"
                      placeholder="ex: São Paulo"
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </label>

                  <button
                    className="btn btn-primary btnWeather"
                    onClick={consultClick}
                  >
                    Procurar
                  </button>
                </div>
              </div>
            </div>

            <div className="contentWeather">
              <div className="otherDatas">
                <h6>Vento: {wind.speed} m/s²</h6>

                <h6>Umidade: {main.humidity}%</h6>

                <h6>Latitude: {coord.lat} </h6>

                <h6>Longitude: {coord.lon}</h6>

                <h6>Pressão: {main.pressure} hPa</h6>
              </div>

              <div className="weatherNow">
                <h2>{main.temp}ºC</h2>

                <h4>Sensação de {main.feels_like}ºC</h4>

                <h4>{weather[0].description}</h4>

                <img className="weatherIcon" src={urlIcon}></img>

                <p>
                  Tempo agora em: {name}, {country}
                </p>
              </div>
            </div>
          </div>
        </ContainerContent>

        <Footer />
        <ToastContainer />
      </div>
    );
}