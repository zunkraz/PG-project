import {
    GET_ADMIN_USERS,
    DELETE_ADMIN_USERS,
    PUT_ADMIN_USERS,
    DELETE_ADMIN_APPOINTMENT,
    PUT_ADMIN_APPOINTMENT,
    POST_ADMIN_CATEGORY,
    PUT_ADMIN_CATEGORY,
    DELETE_ADMIN_CATEGORY,
    POST_ADMIN_COUNTRY,
    DELETE_ADMIN_COUNTRY,
    GET_ADMIN_TIPS,
    PUT_ADMIN_TIPS,
    DELETE_ADMIN_TIPS,
    POST_ADMIN_TIPS,
    GET_ADMIN_REVIEWS,
    PUT_ADMIN_REVIEWS,
    DELETE_ADMIN_REVIEWS
} from '../../constants';

import {
    getAllUsers,
    deleteUser,
    putUser,
    deleteAppointment,
    putAppointment,
    postCategory,
    putCategory,
    deleteCategory,
    deleteCountry,
    postCountry,
    getAllTips,deleteTip,putTip,postTip,
  getAllReviews,deleteReview,putReview
} from '../../ApiReq/admin'

export function getAdminUsers(user){
    return async function(dispatch){
        let data = await getAllUsers(user)
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
export function putAdminAppointment(appointmentID,info, {isAdmin, token}){
    return async function(dispatch){
        let data = await putAppointment(appointmentID,info, {isAdmin, token})
        return dispatch({
            type: PUT_ADMIN_APPOINTMENT,
            payload: data
        })
    }
}

export function postAdminCategory(category, {isAdmin, token}){
    return async function(dispatch){
        let data = await postCategory(category, {isAdmin, token})
        return dispatch({
            type: POST_ADMIN_CATEGORY,
            payload:data
        })
    }
}
export function putAdminCategory(categoryID,info, {isAdmin, token}){
    return async function(dispatch){
        let data = await putCategory(categoryID,info, {isAdmin, token})
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

export function postAdminCountry(info, {isAdmin, token}){
    return async function(dispatch){
        let data = await postCountry(info, {isAdmin, token})
        return dispatch({
            type: POST_ADMIN_COUNTRY,
            payload:data
        })
    }
}
export function deleteAdminCountry(countryId){
    return async function(dispatch){
        let data = await deleteCountry(countryId)
        return dispatch({
            type: DELETE_ADMIN_COUNTRY,
            payload:data
        })
    }
}

export function getAdminTips({isAdmin, token}){
    return async function(dispatch){
        let data = await getAllTips({isAdmin, token})
        return dispatch({
            type: GET_ADMIN_TIPS,
            payload: data
        })
    }
}
export function putAdminTip(info,_id,{isAdmin, token}){
    return async function (dispatch){
        let data = await putTip(info,_id,{isAdmin, token})
        return dispatch({
            type: PUT_ADMIN_TIPS,
            payload: data
        })
    }
}
export function deleteAdminTip(_id){
    return async function (dispatch){
        let data = await deleteTip(_id)
        return dispatch({
            type: DELETE_ADMIN_TIPS,
            payload: data
        })
    }
}
export function postAdminTip(info,{isAdmin, token}){
    return async function(dispatch){
        let data = await postTip(info,{isAdmin, token})
        return dispatch({
            type: POST_ADMIN_TIPS,
            payload:data
        })
    }
}

export function getAdminReviews({isAdmin, token}){
    return async function(dispatch){
        let data = await getAllReviews({isAdmin, token})
        return dispatch({
            type: GET_ADMIN_REVIEWS,
            payload: data
        })
    }
}
export function putAdminReview(info,_id,{isAdmin, token}){
    return async function (dispatch){
        let data = await putReview(info,_id,{isAdmin, token})
        return dispatch({
            type: PUT_ADMIN_REVIEWS,
            payload: data
        })
    }
}
export function deleteAdminReview(_id){
    return async function (dispatch){
        let data = await deleteReview(_id)
        return dispatch({
            type: DELETE_ADMIN_REVIEWS,
            payload: data
        })
    }
}
