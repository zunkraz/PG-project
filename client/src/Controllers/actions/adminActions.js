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

import {
    getAllUsers,
    deleteUser,
    putUser,
    deleteAppointment,
    putAppointment,
    postCategory,
    putCategory,
    deleteCategory
} from './../../ApiReq/admin'

export function getAdminUsers(){
    return async function(dispatch){
        let data = await getAllUsers()
        return dispatch({
            type: GET_ADMIN_USERS,
            payload: data
        })
    }
}

export function delAdminUser(username){
    return async function(dispatch){
        let data = await deleteUser(username)
        return dispatch({
            type: DELETE_ADMIN_USERS,
            payload: data
        })
    }
}

export function putAdminUser(username, info){
    return async function(dispatch){
        let data = await putUser(username,info)
        return dispatch({
            type: PUT_ADMIN_USERS,
            payload: data
        })
    }
}

export function delAdminAppointment(appointmentID){
    return async function(dispatch){
        let data = await deleteAppointment(appointmentID)
        return dispatch({
            type: DELETE_ADMIN_APPOINTMENT,
            payload: data
        })
    }
}

export function putAdminAppointment(appointmentID,info){
    return async function(dispatch){
        let data = await putAppointment(appointmentID,info)
        return dispatch({
            type: PUT_ADMIN_APPOINTMENT,
            payload: data
        })
    }
}

export function postAdminCategory(category){
    return async function(dispatch){
        let data = await postCategory(category)
        return dispatch({
            type: POST_ADMIN_CATEGORY,
            payload:data
        })
    }
}

export function putAdminCategory(categoryID,info){
    return async function(dispatch){
        let data = await putCategory(categoryID,info)
        return dispatch({
            type: PUT_ADMIN_CATEGORY,
            payload:data
        })
    }
}
export function deleteAdminCategory(categoryID){
    return async function(dispatch){
        let data = await deleteCategory(categoryID)
        return dispatch({
            type: DELETE_ADMIN_CATEGORY,
            payload:data
        })
    }
}
