import axios from 'axios';

const api = axios.create({
    baseURL:'https://api.openweathermap.org'
});

const apiIcon = axios.create({
    baseURL: "https://openweathermap.org"
});

const key = '2d97be0c385c1aee27ee65d9d0b92878';

export default class WeatherApi {

   async ConsultNow (city) {
 
          const resp = await api.get(`/data/2.5/weather?q=${city}&units=metric&appid=${key}&lang=pt_br`);
          return resp.data;

   /* seria usado caso eu não usasse o async/await
Promise.WeatherApi.then(result => console.log(result.data)).catch(err => console.log(err.response.data));*/
    }

    async ConsultForecast ( ) {
        const resp = await api.get("/data/2.5/forecast?q=Osasco&units=metric&appid=2d97be0c385c1aee27ee65d9d0b92878&lang=pt_br")
        return resp.data;
    }

    async getIcon () {
        const urlFoto = apiIcon.defaults.baseURL + '/img/wn/01d@2x.png';
        console.log(urlFoto);
        return urlFoto;
    }
}