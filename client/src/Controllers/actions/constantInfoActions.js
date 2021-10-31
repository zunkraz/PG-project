import {
    GET_CATEGORIES,
    GET_TIPS,
    GET_REVIEWS
} from '../../constants'
import {
    getCategories, 
    getTips,
    getReviews
} from '../../ApiReq/constantInfo'

export function getCat(){
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