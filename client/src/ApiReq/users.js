import axios from 'axios';
import {BASIC_URL} from '../constants';

export function createUser(user) {
    return axios.post(`${BASIC_URL}/users`, user)
    .then(r=>r.data)
    .catch(r=>r.response.data);
}

export function getUsers() {
    return axios.get(`${BASIC_URL}/users`)
    .then(r=>r.data)
    .catch(r=>r.response.data);
}

export function getSingleUser(username) {
    return axios.get(`${BASIC_URL}/users/${username}`)
    .then(r=>r.data)
    .catch(r=>r.response.data);
}

export function postTipUser(text){
    return axios.post(`${BASIC_URL}/tips`, {text})
    .then(r=>r.data)
    .catch(r=>r.response.data);
}

export function postReviewUser({text,userId,rate}){
    return axios.post(`${BASIC_URL}/reviews`, {text,userId,rate})
    .then(r=>r.data)
    .catch(r=>r.response.data);
}