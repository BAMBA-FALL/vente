import axios from "axios";
import { accountService } from "./account.service";
const Axios = axios.create({
    baseURL: "http://localhost:4000"
})


/****
 * 
 * Intercepteur de token
 * 
 * *** */

// Intercepteur pour la mise en place du token dans la requête
Axios.interceptors.request.use(request => {

    if(accountService.isLogged()){
        request.headers.Authorization = 'Bearer '+accountService.getToken()
    }

    return request
})

export default Axios;