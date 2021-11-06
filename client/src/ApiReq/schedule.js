import axios from 'axios';
import {BASIC_URL} from '../constants';

export async function addtoSchedule(date) {
    const data = await axios.post(`${BASIC_URL}/schedules/many`, date);
    return data;
}

export async function getSchedulesById(id){
    return axios.get(`${BASIC_URL}/schedules/${id}/true`)
    .then(r=>r.data)
    .catch(r=>r.response.data);
}

export async function setAvailability(id){
    const data= await axios.put(`${BASIC_URL}/schedules/${id}`)
    return data
}