import {getLogin} from '../../ApiReq/login';
import {CHECK_LOGIN} from '../../constants';

export function checkLoginAction(userData){
    return function(dispatch){
        const data = getLogin(userData);
        return dispatch({
            type: CHECK_LOGIN,
            payload: data
        });
    };
};