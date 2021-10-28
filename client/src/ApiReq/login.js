//Request para verificar que un nombre de usuario existe

import axios from 'axios'

export default async function getLogin({username,password}){
    return (await axios.get(`http://localhost:3001/login?username=${username}`, {password})).data
}