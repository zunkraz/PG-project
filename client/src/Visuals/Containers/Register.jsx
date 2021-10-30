import React, {useState} from "react";
import RegisterFormUser from "../Components/Register/RegisterFormUser";
import RegisterFormPro from "../Components/Register/RegisterFormPro";
import { useDispatch } from "react-redux";
import { getAllUsers } from "../../Controllers/actions/userActions";
import { getCat } from "../../Controllers/actions/constantInfoActions";

export default function Register(){
    const [active, setActive] = useState("cliente");

    const dispatch = useDispatch()
    dispatch(getAllUsers())
    dispatch(getCat())

    function handleClick(e){
        const name= e.target.name
        if(name==="cliente") setActive("cliente")
        if(name==="profesional") setActive("profesional")
    }
    return(
        <div class="uk-background-muted">
            <h2 class="uk-margin-left uk-padding">Registro</h2>
            <div class="uk-grid">
                <button class="uk-button uk-button-danger uk-width-1-2" name="cliente" onClick={handleClick}>Nuevo Cliente</button>
                <button class="uk-button uk-button-danger uk-width-1-2" name="profesional" onClick={handleClick}>Nuevo Profesional</button>
            </div>
            {active==="cliente" && <RegisterFormUser/>}
            {active==="profesional" && <RegisterFormPro/>}
        </div>
        
        
    )
}