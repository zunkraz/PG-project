import {GET_CATEGORIES} from './../../constants'
import {getCategories} from './../../ApiReq/categories'

export function getCat(){
    return function(dispatch){
        let data = getCategories();
        return dispatch({
            type: GET_CATEGORIES,
            payload: data
        });
    }; 
};