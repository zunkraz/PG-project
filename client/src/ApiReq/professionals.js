import axios from 'axios';
import {BASIC_URL} from './../constants';

export function getProfessionals(featured){
    return axios.get(`${BASIC_URL}/professionals${featured?'?featured=true':''}`)
    .then(r=>r.data.map(u=>{
        return {...u,fullname:u.name+' '+u.lastname}
    }))
    .catch(r=>r.response.data);
}

export function getProfessionalByUsername(username){
    return axios.get(`${BASIC_URL}/professionals/${username}`)
    .then(r=>r.data)
    .catch(r=>r.response.data);
}
