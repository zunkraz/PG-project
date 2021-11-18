import { setAvailability } from "../../ApiReq/schedule";
import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_FROM_CART_ALL } from "../../constants";
var timerCart

export const addToCart = (appointment,token) => {
    return function (dispatch){
        timerCart = setTimeout(() => {
            dispatch(removeFromCart(appointment.id,token))
        }, 600000);
        return dispatch({
            type: ADD_TO_CART, 
            payload: appointment
        })
    }
}

export const removeFromCart = (code,token) => {
    clearTimeout(timerCart)
    setAvailability(code,true,token)
        return {
            type: REMOVE_FROM_CART, 
            payload: code
        }
    
}

export const removeFromCartAll = () => {
    return {
        type: REMOVE_FROM_CART_ALL,
    }
}