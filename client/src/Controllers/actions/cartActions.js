import { setAvailability } from "../../ApiReq/schedule";
import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_FROM_CART_ALL } from "../../constants";
let varTime;

export const addToCart = (appointment) => {
   return function (dispatch){
       varTime = setTimeout(() => {
         dispatch(removeFromCart(appointment.id))
         setAvailability(appointment.id,true)
       }, 600000);
       return dispatch({
           type: ADD_TO_CART, 
           payload: appointment
       })
   }
}

export const removeFromCart = (code) => {
    clearTimeout(varTime)
    return function (dispatch){
        setAvailability(code,true);
        return dispatch({
            type: REMOVE_FROM_CART, 
            payload: code
        })
    }
    
}

export const removeFromCartAll = () => {
    return {
        type: REMOVE_FROM_CART_ALL,
    }
}