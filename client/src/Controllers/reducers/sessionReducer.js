import {
    CHECK_LOGIN
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
        default: 
        return {...state}
    }
}