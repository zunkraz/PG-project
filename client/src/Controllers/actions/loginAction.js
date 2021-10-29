import {getLogin} from '../../ApiReq/login';
import {CHECK_LOGIN} from '../../constants';

export function checkLoginAction(userData){
    return async function(dispatch){
        const data = await getLogin(userData);
        return dispatch({
            type: CHECK_LOGIN,
            payload: data
        });
    };
};