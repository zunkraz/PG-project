import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_FROM_CART_ALL } from "../../constants";
// import Swal from 'sweetalert2';
// var timerCartOne,timerCartTwo;

export const addToCart = (appointment,token) => {
    return function (dispatch){
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