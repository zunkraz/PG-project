import axios from 'axios'
import {BASIC_URL} from '../constants'

export function getCategories(){
    return axios.get(`${BASIC_URL}/categories`)
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
    .catch(r.response.data)
}
