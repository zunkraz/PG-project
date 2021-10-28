import {getProfessionals, getProfessionalByUsername} from '../../ApiReq/professionals'

export function getAllProfs(){
    return function(dispatch){
        const data = getProfessionals();
        return dispatch({
            type: GET_PROFESSIONALS,
            payload: data
        });
    };
};

export function getProfByUser(username){
    return function(dispatch){
        const data = getProfessionalByUsername(username);
        return dispatch({
            type: GET_PROF_BY_USER,
            payload: data
        })
    };
};