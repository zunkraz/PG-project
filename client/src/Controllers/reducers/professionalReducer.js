
import { GET_PROFESSIONALS, GET_PROF_BY_USER, FILTER_PROF,DATA_NOT_FOUND} from './../../constants'

const initialState = {
    professionals: [],
    professionalsRender: [],
    profDetail: {},
    error: false
}

export default function professionalReducer(state=initialState,{type,payload}){
    switch (type){
        case GET_PROFESSIONALS:
            return {
                ...state,
                professionals: payload,
                professionalsRender: payload,
                error:false
            }
        case GET_PROF_BY_USER:
            return{
                ...state,
                profDetail: payload,
                error:false

            }
        case FILTER_PROF:
            return{
                ...state,
                professionalsRender:payload,
                error:false
            }
        case DATA_NOT_FOUND:
            return{
                ...state,
                error:true
            }
        case FILTER_PROF:
            return{
                ...state,
                professionals:payload
            }
        default:
            return {...state}
    }
}