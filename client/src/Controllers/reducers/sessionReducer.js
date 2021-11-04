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
                status: {
                    token: payload.token,
                    username: payload.username
                }
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
            console.log('rehydrate:',payload)
            if(payload){
                return {
                    ...state,
                    status: payload?.sessionReducer.status
                }
            }
            return {
                ...state
            }
        default: 
        return {...state}
    }
}