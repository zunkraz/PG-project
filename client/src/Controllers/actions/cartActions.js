import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_FROM_CART_ALL } from "../../constants";


export const addToCart = (appointment) => {
   return function (dispatch){
       setTimeout(() => {
         dispatch(removeFromCart(appointment.id))
       }, 600000);
       return dispatch({
           type: ADD_TO_CART, 
           payload: appointment
       })
   }
}

export const removeFromCart = (code) => {
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