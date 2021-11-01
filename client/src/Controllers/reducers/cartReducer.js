import { ADD_TO_CART, REMOVE_FROM_CART } from '../../constants'

const initialState = {
    appointments: [],
    
}

export default function cartReducer(state=initialState, action){
    switch (action.type){
        case ADD_TO_CART:
            return {
                ...state,
                appointments: action.payload
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                appointments: state.appointments.filter(a => a.id !== action.payload)
            }
        default:
            return state;
    }
}