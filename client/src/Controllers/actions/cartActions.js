import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_FROM_CART_ALL } from "../../constants";
// import Timer from "../../Visuals/Components/Cart/helperTime";


export const addToCart = (appointment) => {
   return function (dispatch){
       setTimeout(() => {
         dispatch(removeFromCart(appointment.id))
       }, 10000);
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