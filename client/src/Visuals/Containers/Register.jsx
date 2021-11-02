import React, {useEffect, useState} from "react";
import RegisterFormUser from "../Components/Register/RegisterFormUser";
import RegisterFormPro from "../Components/Register/RegisterFormPro";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../Controllers/actions/userActions";
import { getAllCategories } from "../../Controllers/actions/constantInfoActions";

export default function Register(){
    const [active, setActive] = useState("cliente");
    const dispatch = useDispatch()
    const categories = useSelector(state => state.constantInfoReducer.categories);

    useEffect(() => {
        dispatch(getAllUsers())
        if(!categories.length) {dispatch(getAllCategories())}
    }, [dispatch])

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