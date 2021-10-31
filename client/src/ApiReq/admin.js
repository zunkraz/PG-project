import axios from 'axios';
import {BASIC_URL} from '../constants'

const url = `${BASIC_URL}/admin`;

export function getAllUsers(){
    return axios.get(`${url}/users`)
    .then(r => r.data)
    .catch(err=>err.response.data)
};

export function deleteUser(username){
    return axios.delete(`${url}/users/${username}`)
    .then(r=>r.data)
    .catch(r=>r.response.data)
}

export function putUser(username,info){
    return axios.put(`${url}/users/${username}`, info)
    .then(r=>r.data)
    .catch(r=>r.response.data)
}

export function deleteAppointment(appointmentID){
    return axios.delete(`${url}/appointment/${appointmentID}`)
    .then(r=>r.data)
    .catch(r=>r.response.data)
}

export function putAppointment(appointmentID,info){
    return axios.put(`${url}/appointment/${appointmentID}`, info)
    .then(r=>r.data)
    .catch(r=>r.response.data)
}

export function postCategory(category){
    return axios.post(`${url}/category`, category)
    .then(r=>r.data)
    .catch(r=>r.response.data)
}

export function putCategory(categoryID, info){
    return axios.put(`${url}/category/${categoryID}`, info)
    .then(r=>r.data)
    .catch(r=>r.response.data)
}

export function deleteCategory(categoryID){
    return axios.delete(`${url}/category/${categoryID}`)
    .then(r=>r.data)
    .catch(r=>r.response.data)
}
