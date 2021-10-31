import {getProfessionals, getProfessionalByUsername} from '../../ApiReq/professionals'
import { GET_PROFESSIONALS, GET_PROF_BY_USER} from './../../constants'

export function getAllProfs(){
    return async function(dispatch){
        const data = await getProfessionals();
        return dispatch({
            type: GET_PROFESSIONALS,
            payload: data
        });
    };
};

export function getProfByUser(username){
    return async function(dispatch){
        const data = await getProfessionalByUsername(username);
        return dispatch({
            type: GET_PROF_BY_USER,
            payload: data
        })
    };
};