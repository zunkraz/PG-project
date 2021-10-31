import axios from 'axios';
import {BASIC_URL} from '../constants';

export async function createUser(user) {
    const data = await axios.post(`${BASIC_URL}/users`, user);
    return data;
}

export async function getUsers() {
    const data = (await axios.get(`${BASIC_URL}/users`)).data;
    return data;
}

export async function getSingleUser(id) {
    const data = (await axios.get(`${BASIC_URL}/users/:${id}`)).data;
    return data;
}