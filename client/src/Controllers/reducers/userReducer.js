import { 
    GET_USERS,
    POST_REVIEW,
    POST_TIP
} from '../../constants'

const initialState = {
    users: [],
    
}

export default function userReducer(state=initialState,{type,payload}){
    switch (type){
        case GET_USERS:
            return {
                ...state,
                users: payload
            }
        case POST_TIP:
            return {
                ...state,
                tipPosted: payload
            }
        case POST_REVIEW:
            return {
                ...state,
                reviewPosted: payload
            }
        default:
            return {...state}
    }
}