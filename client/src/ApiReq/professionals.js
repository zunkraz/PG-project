import axios from 'axios'
import {BASIC_URL} from './../constants'

export async function getProfessionals(){
    return (await axios.get(`${BASIC_URL}/professionals`)).data
}

export async function getProfessionalByUsername(username){
    return (await axios.get(`${BASIC_URL}/professionals/${username}`)).data
}
