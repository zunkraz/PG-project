
import { useSelector } from "react-redux";

const emails = useSelector((state) => state.userReducer.users.map(e => e.email))

export function validateEmail(email) {

}