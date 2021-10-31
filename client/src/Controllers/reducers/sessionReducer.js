import {
    CHECK_LOGIN, CLEAN_USER_LOGIN
} from './../../constants';

const initialState = {
    status: {}
}

export default function sessionReducer(state=initialState, {type,payload}){
    switch(type){
        case CHECK_LOGIN:
            return {
                ...state,
                status: payload
            }
        case CLEAN_USER_LOGIN:
            return {
                ...state,
                status:{}
            }
        default: 
        return {...state}
    }
}