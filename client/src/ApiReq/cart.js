import axios from 'axios'
import {BASIC_URL} from '../constants'

export function postCartInfo(obj){
    return axios.post(`${BASIC_URL}/invoice`,obj)
    .then(r=>r.data)
    .catch(r => r.response.data)
}

export  function getCartInfo(customerId){
    return  axios.get(`${BASIC_URL}/invoice/${customerId}`)
    .then(r => r.data)
    .catch(r => r.response.data)
}