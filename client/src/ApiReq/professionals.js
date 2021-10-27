import axios from 'axios'

export default async function getProfessionals(){
    return (await axios.get('http://localhost:3001/professionals')).data
}

export default async function getProfessionalByUsername(username){
    return (await axios.get(`http://localhost:3001/professionals/${username}`)).data
}