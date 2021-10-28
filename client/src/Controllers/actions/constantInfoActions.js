import {
    GET_CATEGORIES,
    GET_TIPS
} from '../../constants'
import {
    getCategories, 
    getTips,
    getReviews
} from '../../ApiReq/constantInfo'

export function getCat(){
    return function(dispatch){
        let data = getCategories();
        return dispatch({
            type: GET_CATEGORIES,
            payload: data
        });
    }; 
};

export function getAllTips(){
    return function(dispatch){
        let data = getTips()
        return dispatch({
            type: GET_TIPS,
            payload: data
        })
    }
}

export function getAllReviews(){
    return function(dispatch){
        let data = getReviews()
        return dispatch({
            type:GET_REVIEWS,
            payload:data
        })
    }
}