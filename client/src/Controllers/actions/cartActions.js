import { ADD_TO_CART, REMOVE_FROM_CART } from "../../constants";

export const addToCart = (appointment) => {
    console.log(appointment);
    return {
        type: ADD_TO_CART, 
        payload: appointment
    }
}

export const removeFromCart = (date) => {
    return {
        type: REMOVE_FROM_CART, 
        payload: date
    }
}