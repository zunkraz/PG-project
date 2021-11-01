import {
    GET_CATEGORIES,
    GET_TIPS,
    GET_REVIEWS,
    GET_COUNTRIES
} from './../../constants'

const initialState = {
    categories: [],
    tips: [],
    reviews: [],
    countries: []
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
        case GET_COUNTRIES:
            return {
                ...state,
                countries: payload
            }
        default:
            return {...state}
    }
}