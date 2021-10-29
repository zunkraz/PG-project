import axios from 'axios'
import {BASIC_URL} from '../constants'

export async function getCategories(){
    return (await axios.get(`${BASIC_URL}/categories`)).data
}

export async function getTips(){
    return (await axios.get(`${BASIC_URL}/tips`)).data
}

export async function getReviews(){
    return (await axios.get(`${BASIC_URL}/reviews`)).data
}
