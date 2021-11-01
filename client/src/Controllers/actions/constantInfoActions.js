import {
    GET_CATEGORIES,
    GET_TIPS,
    GET_REVIEWS,
    GET_COUNTRIES
} from '../../constants'
import {
    getCategories, 
    getTips,
    getReviews,
    getCountries
} from '../../ApiReq/constantInfo'

export function getAllCategories(){
    return async function(dispatch){
        let data = await getCategories();
        return dispatch({
            type: GET_CATEGORIES,
            payload: data
        });
    }; 
};

export function getAllTips(){
    return async function(dispatch){
        let data = await getTips()
        return dispatch({
            type: GET_TIPS,
            payload: data
        })
    }
}

export function getAllReviews(){
    return async function(dispatch){
        let data = await getReviews()
        return dispatch({
            type:GET_REVIEWS,
            payload:data
        })
    }
}

export function getAllCountries(){
    return async function(dispatch){
        let data = await getCountries()
        return dispatch({
            type:GET_COUNTRIES,
            payload: data
        })
    }
}