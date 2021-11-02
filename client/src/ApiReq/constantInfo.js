import axios from 'axios'
import {BASIC_URL} from '../constants'

export function getCategories(feat){
    return axios.get(`${BASIC_URL}/categories${feat?'?feat=true':''}`)
    .then(r=>r.data)
    .catch(r=>r.response.data)
}

export function getTips(){
    return axios.get(`${BASIC_URL}/tips`)
    .then(r=>r.data)
    .catch(r=>r.response.data)
}

export function getReviews(){
    return axios.get(`${BASIC_URL}/reviews`)
    .then(r=>r.data)
    .catch(r=>r.response.data)
}

export function getCountries(){
    return axios.get(`${BASIC_URL}/countries`)
    .then(r=>r.data)
    .catch(r=>r.response.data)
}