import { useSelector } from "react-redux";

const ValidateInputs = (target) => {

    const emails = useSelector((state) => state.userReducer.users.map(e => e.email))

    const {name, value} = target;

    if(name === 'email') {
        // validar sea email con regex
        // validar no este registrado
        if(emails.includes(value)) return {error: "Mail registrado", name: 'email'};
    }
    if(name === 'username') {
        // validar no este registrado
        // validar solo acepte letras y numeros
    }
    if(name === 'password') {
        // validar length >= 6 <=8
    }
    if(name === 'confirmPassword') {
        // validar coincida con password
    }
    if(name === 'name') {
        // validar tenga 2 caracteres minimo y no contenga numeros
    }
    return {}
};

export default ValidateInputs;