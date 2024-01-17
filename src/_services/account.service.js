import Axios from './caller.service'

const login = (credentials)=>{
  return Axios.post('/api/login', credentials, { withCredentials: true })
}


let saveToken = (token)=>{
    localStorage.setItem('token',token)
}


let logout = ()=>{
    localStorage.removeItem('token')
}

let isLogged = ()=>{
    let token = localStorage.getItem('token')
    return !!token
}

let getToken = ()=>{
    return localStorage.getItem('token')
}


export const accountService = {
   login, saveToken, logout, isLogged, getToken
}