import {
    GET_ADMIN_USERS,
    DELETE_ADMIN_USERS,
    PUT_ADMIN_USERS,
    DELETE_ADMIN_APPOINTMENT,
    PUT_ADMIN_APPOINTMENT,
    POST_ADMIN_CATEGORY,
    PUT_ADMIN_CATEGORY,
    DELETE_ADMIN_CATEGORY
} from './../../constants'

const initialState = {
    adminUsers: [],
    userDeleted: {},
    userModified: {},
    appointmentDeleted: {},
    appoinmentModified: {},
    categoryPosted: {},
    categoryModified: {},
    categoryDeleted: {}
}

export default function adminReducer(state=initialState,{type,payload}){
    switch(type){
        case GET_ADMIN_USERS:
            return {
                ...state,
                adminUsers: payload
            }
        case DELETE_ADMIN_USERS:
            return{
                ...state,
                userDeleted: payload
            }
        case PUT_ADMIN_USERS:
            return {
                ...state,
                userModified: payload
            }
        case DELETE_ADMIN_APPOINTMENT:
            return {
                ...state,
                appointmentDeleted: payload
            }
        case PUT_ADMIN_APPOINTMENT:
            return {
                ...state,
                appoinmentModified: payload
            }
        case POST_ADMIN_CATEGORY:
            return { 
                ...state,
                categoryPosted: payload
            }
        case PUT_ADMIN_CATEGORY:
            return {
                ...state,
                categoryModified: payload
            }
        case DELETE_ADMIN_CATEGORY:
            return {
                ...state,
                categoryDeleted: payload
            }
        default:
            return {
                ...state
            }
    }
}