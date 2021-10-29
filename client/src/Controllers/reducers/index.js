//en este archivo se combinan los reducers
import { combineReducers } from 'redux';
import constantInfoReducer from './constantInfoReducer'
import professionalReducer from './professionalReducer'
import userReducer from './userReducer';
import sessionReducer from './sessionReducer';
import adminReducer from './adminReducer';

export default combineReducers({
    constantInfoReducer,
    professionalReducer,
    userReducer,
    sessionReducer,
    adminReducer
})
