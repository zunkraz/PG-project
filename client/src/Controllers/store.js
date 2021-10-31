import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from './reducers/index';

const composeTask = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(reducer, composeTask(applyMiddleware(thunk)));

export default store;