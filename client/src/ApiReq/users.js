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

export async function getSingleUser(username) {
    const data = (await axios.get(`${BASIC_URL}/users/${username}`)).data;
    return data;
}