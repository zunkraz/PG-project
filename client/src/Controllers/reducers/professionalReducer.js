import { GET_PROFESSIONALS, GET_PROF_BY_USER} from constants

initialState = {
    professionals: [],
    profDetail: {}
}

export function professionalReducer(state=initialState,{type,payload}){
    switch (type){
        case GET_PROFESSIONALS:
            return {
                ...state,
                professionals: payload
            }
        case GET_PROF_BY_USER:
            return{
                ...state,
                profDetail: payload
            }
        default:
            return {...state}
    }
}