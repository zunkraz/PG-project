//en este archivo se combinan los reducers
import { combineReducers } from 'redux';
import constantInfoReducer from './constantInfoReducer'
import professionalReducer from './professionalReducer'

export default combineReducers({
    constantInfoReducer,
    professionalReducer,
})
