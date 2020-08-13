import Axios from'axios';


const api = Axios.create({
    baseURL: "https://viacep.com.br",
});


export default class CorreiosApi {
    
    async consultar(cep){
        const resp = await api.get(`/ws/${cep}/json/`);
        console.log(resp.data);
        return resp.data;
    }
             
}
