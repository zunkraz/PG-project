import React, {useState} from "react";
import validate from "../../../Tools/validations";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux"
import { createUser } from "../../../ApiReq/users";

export default function RegisterFormUser(){
    const [newUser, setNewuser]= useState({
        email:"",
        username:"",
        name:"",
        lastname:"",
        password:"",
        confirmPassword:""
    })
    const [checked, setChecked]= useState(false)
    const [error, setError]= useState({})
    const [done, setDone]= useState(false)

    const userData= useSelector((state) => {return state.userReducer.users})

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
        if(validate(newUser, setError, userData)){
            setNewuser({
                email:"",
                username:"",
                name:"",
                lastname:"",
                password:"",
                confirmPassword:""
            })
            setError({})
            e.target.reset();
            createUser(newUser)
            setDone(true)
        }
      }
    
    if(!done){
    return (
        <div class="uk-padding uk-margin-left uk-flex uk-flex-center">
            <form onSubmit={handleSubmit} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" autoComplete="off">
                <h2 class="p-2 text-2xl">Informacion personal - Cliente</h2>
                <div class="mb-4 uk-flex uk-flex-row uk-flex-wrap">
                    <div class="uk-flex uk-flex-column uk-form-width-large uk-margin-right">
                        <label htmlFor="email" class="p-2"> Correo electronico </label>
                        <input class="uk-input uk-form-width-large" type="email"
                        name="email" id="email"
                        placeholder="Correo electronico"
                        onChange={handleChange}
                        required/>
                    </div>
                    <div class="uk-flex uk-flex-column uk-form-width-large">
                        <label htmlFor="username" class="p-2"> Nombre de usuario </label>
                        <input class="uk-input uk-form-width-large"  type="text"
                        name="username" id="username"
                        placeholder="Usuario" 
                        onChange={handleChange}
                        required/>
                    </div>
                </div>
                <span class="uk-alert-danger">{error.email}</span>
                <span class="uk-alert-danger">{error.username}</span>
                <div class="mb-4 uk-flex uk-flex-row uk-flex-wrap">
                    <div class="uk-flex uk-flex-column uk-form-width-large uk-margin-right">
                        <label htmlFor="name" class="p-2"> Nombre </label>
                        <input class="uk-input uk-form-width-large" type="text"
                        name="name" id="name"
                        placeholder="Nombre"
                        onChange={handleChange}
                        required/>
                    </div>
                    <div class="uk-flex uk-flex-column uk-form-width-large uk-margin-right">
                        <label htmlFor="lastname" class="p-2"> Apellido </label>
                        <input class="uk-input uk-form-width-large"  type="text"
                        name="lastname" id="lastname"
                        placeholder="Apellido" 
                        onChange={handleChange}
                        required/>
                    </div>
                </div>
                <span class="uk-alert-danger">{error.name}</span>
                <div class="mb-4 uk-flex uk-flex-row uk-flex-wrap">
                    <div class="uk-flex uk-flex-column uk-form-width-large uk-margin-right">
                        <label htmlFor="password" class="p-2"> Contraseña </label>
                        <input class="uk-input uk-form-width-large"  type="password"
                        name="password" id="password"
                        placeholder="Contraseña" 
                        onChange={handleChange}
                        required/>
                    </div>
                    <div class="uk-flex uk-flex-column uk-form-width-large uk-margin-right">
                        <label htmlFor="confirmPassword" class="p-2"> Confirmar contraseña </label>
                        <input class="uk-input uk-form-width-large"  type="password"
                        name="confirmPassword" id="confirmPassword"
                        placeholder="Confirmar contraseña" 
                        onChange={handleChange}
                        required/>
                    </div>
                </div>
                <span class="uk-alert-danger">{error.password}</span>
                <div class="mb-4">
                <label htmlFor="acceptT" class="p-2">Acepto los términos y condiciones del servicio</label>
                <input class="uk-checkbox uk-margin-left"  type="checkbox"  name="acceptT" id="acceptT" checked={checked} onChange={handleChangeCheckbox}/>
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
