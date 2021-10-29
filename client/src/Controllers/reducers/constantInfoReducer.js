import {
    GET_CATEGORIES,
    GET_TIPS,
    GET_REVIEWS,
} from './../../constants'

const initialState = {
    categories: [],
    tips: [],
    reviews: [],
}

export default function constantInfoReducer(state=initialState,{type,payload}){
    switch(type){
        case GET_CATEGORIES:
            return {
                ...state,
                categories: payload
            }
        case GET_TIPS:
            return {
                ...state,
                tips: payload
            }
        case GET_REVIEWS:
            return {
                ...state,
                reviews: payload
            }
        default:
            return {...state}
    }
}