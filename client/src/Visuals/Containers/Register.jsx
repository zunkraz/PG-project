import React, {useEffect, useState} from "react";
import RegisterFormUser from "../Components/Register/RegisterFormUser";
import RegisterFormPro from "../Components/Register/RegisterFormPro";
import { useDispatch } from "react-redux";
import { getAllUsers } from "../../Controllers/actions/userActions";
import { getAllCategories } from "../../Controllers/actions/constantInfoActions";

export default function Register(){
    const [active, setActive] = useState("cliente");
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getAllUsers())
        dispatch(getAllCategories())
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function handleClick(e){
        const name= e.target.name
        if(name==="cliente") setActive("cliente")
        if(name==="profesional") setActive("profesional")
    }
    return(
        <div className="uk-background-muted">
            <div className="uk-grid">
                <button className="uk-button uk-button-danger uk-width-1-2" name="cliente" onClick={handleClick}>Nuevo Cliente</button>
                <button className="uk-button uk-button-danger uk-width-1-2" name="profesional" onClick={handleClick}>Nuevo Profesional</button>
            </div>
            {active==="cliente" && <RegisterFormUser/>}
            {active==="profesional" && <RegisterFormPro/>}
        </div>
        
        
    )
} 