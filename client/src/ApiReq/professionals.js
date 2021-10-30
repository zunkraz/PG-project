import axios from 'axios'
import {BASIC_URL} from './../constants'

export function getProfessionals(){
    return axios.get(`${BASIC_URL}/professionals`)
    .then(r=>r.data)
    .catch(r=>r.response.data)
}

export function getProfessionalByUsername(username){
    return axios.get(`${BASIC_URL}/professionals/${username}`)
    .then(r=>r.data)
    .catch(r=>r.response.data)
}
