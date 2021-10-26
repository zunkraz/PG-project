import React, {useState} from "react";
import RegisterFormUser from "../../Components/Register/RegisterFormUser";
import RegisterFormPro from "../../Components/Register/RegisterFormPro";

export default function Register(){
    const [active, setActive] = useState("cliente");

    function handleClick(e){
        const name= e.target.name
        if(name==="cliente") setActive("cliente")
        if(name==="profesional") setActive("profesional")
    }
    return(
        <div class="uk-background-muted">
            <h2 class="uk-margin-left uk-padding">Registrarse</h2>
            <div class="uk-grid">
                <button class="uk-button uk-button-danger uk-width-1-2" name="cliente" onClick={handleClick}>Nuevo Cliente</button>
                <button class="uk-button uk-button-danger uk-width-1-2" name="profesional" onClick={handleClick}>Nuevo Profesional</button>
            </div>
            {active==="cliente" && <RegisterFormUser/>}
            {active==="profesional" && <RegisterFormPro/>}
        </div>
        
        
    )
}