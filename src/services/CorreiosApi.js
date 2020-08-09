import Axios from'axios';


const api = Axios.create({
    baseURL: "https://viacep.com.br",
});


export default class CorreiosApi {
    
    async consultar(){
        const resp = await api.get('/ws/01001000/json/');
        console.log(resp.data);
        return resp.data;
    }
             
}
