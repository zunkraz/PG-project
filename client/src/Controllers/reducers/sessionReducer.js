import {
    CHECK_LOGIN, CLEAN_USER_LOGIN
} from './../../constants';

const initialState = {
    //esta es la estructura final del store, por ahora queda así para que no rompa todo
    status: {
        token:'',   
        username:'',
        isAdmin:false
    },
    // cart: {}
    //status: {},
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
                status: {
                    token:'',
                    username:''
                }
                // status:{}
            }
        case 'persist/REHYDRATE':
            return {
                ...state,
                status: payload.sessionReducer?.status
            }
        default: 
        return {...state}
    }
}