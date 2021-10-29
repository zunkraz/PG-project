//Request para verificar que un nombre de usuario existe
import {BASIC_URL} from './../constants'
import axios from 'axios'

export default async function getLogin({username,password}){
    return (await axios.get(`${BASIC_URL}/login?username=${username}`, {password})).data
}