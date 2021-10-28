import { CREATE_USER } from "../../constants";
import { createUser } from "../../ApiReq/users";

export const createUserAction = (user) => {
    return (dispatch) => {
        const data = createUser(user)
        console.log(data);
        return dispatch({
            type: CREATE_USER, 
            payload: data
        })
    }
}