import React, {useState} from "react";
import validate from "../../../Tools/validations";
import { Link } from "react-router-dom";

export default function RegisterFormUser(){
    const [newUser, setNewuser]= useState({
        email:"",
        userName:"",
        password:"",
        confirmPassword:""
    })
    const [checked, setChecked]= useState(false)
    const [error, setError]= useState({})
    const [done, setDone]= useState(false)

    function handleChange(e){
        const {value, name}=e.target
        setNewuser({
                ...newUser,
                [name]:value
        })
    }
    function handleChangeCheckbox(e){
        setChecked(!checked)
        
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(!checked) {
            alert("Por favor indica que aceptas los Términos y Condiciones");
            return false
        }
        if(validate(newUser, setError)){
            setNewuser({
                email:"",
                userName:"",
                password:"",
                confirmPassword:""
            })
            setError({})
            e.target.reset();
            // fetch("url", {
            //     method:"POST", 
            //     body: JSON.stringify( newUser ),
            //     headers:{
            //         'Content-Type': 'application/json'
            //         }
            //     })
            //     .then(res => res.json())
            //     .catch(error => console.error('Error:', error))
            //     .then(response => console.log('Success:', response));
            setDone(true)
        }
      }
    
    if(!done){
    return (
        <div class="uk-padding uk-margin-left uk-flex uk-flex-center">
            <form onSubmit={handleSubmit} class="uk-form-horizontal uk-margin-small" autoComplete="off">
                <h2>Informacion personal - Cliente</h2>
                <div >
                    <input class="uk-input uk-form-width-large uk-margin-right" type="email"
                    name="email"
                    placeholder="Correo electronico"
                    onChange={handleChange}
                    required/>
                    <input class="uk-input uk-form-width-large"  type="text"
                    name="userName"
                    placeholder="Usuario" 
                    onChange={handleChange}
                    required/>
                </div>
                <span class="uk-alert-danger">{error.email}</span>
                <span class="uk-alert-danger">{error.userName}</span>
                <div class="uk-margin">
                    <input class="uk-input uk-form-width-large uk-margin-right"  type="password"
                    name="password"
                    placeholder="Contraseña" 
                    onChange={handleChange}
                    required/>
                    <input class="uk-input uk-form-width-large"  type="password"
                    name="confirmPassword"
                    placeholder="Confirmar contraseña" 
                    onChange={handleChange}
                    required/>
                </div>
                <span class="uk-alert-danger">{error.password}</span>
                <div>
                <label htmlFor="acceptT">Acepto los términos y condiciones del servicio</label>
                <input class="uk-checkbox uk-margin-left"  type="checkbox"  name="acceptT" checked={checked} onChange={handleChangeCheckbox}/>
                </div>
                <input class="uk-button uk-button-danger uk-margin" type="submit" value="Registrarse"/>
            </form>
        </div>
    )}
    if(done){
        return (
            <div class="w-full p-24 flex flex-col justify-center content-center">
                <h1 class="text-3xl flex justify-center">Te has registrado exitosamente!</h1>
                <div class="flex justify-center py-12">
                <Link to="/" style={{ "textDecoration": "none", "color":"white" }} >
                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded ">Volver al inicio</button>
                </Link>
                </div>
            </div>
        )
    }
}
