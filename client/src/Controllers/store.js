import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from './reducers/index';
import sessionReducer from "./reducers/sessionReducer";
import { persistStore, persistReducer } from 'redux-persist';

const composeTask = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const persistConfig = {
    key: 'session',
    storage: storage,
    whitelist: sessionReducer
}

const pReducer = persistReducer(persistConfig,)
const store = createStore(reducer, composeTask(applyMiddleware(thunk)));

export default store;