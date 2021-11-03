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

        if (name==="email"){
            if(userData.find(user=> user.email===value)){
                setError({...error, "email" : "El email ya esta en uso"})
            }
            else setError({...error, "email" : ""})
        }
        if (name==="username"){
            if(userData.find(user=> user.username===value)){
                setError({...error, "username" : "El usuario ya existe"})
            }
            else setError({...error, "username" : ""})
        }
        if (name==="confirmPassword"){
            if(newUser.password && value!==newUser.password){
                setError({...error, "password":"Las contraseñas no coinciden."})
            }
            else setError({...error, "password":""})
        }
        if (name==="password"){
            if(newUser.confirmPassword && value!==newUser.confirmPassword){
                setError({...error, "password":"Las contraseñas no coinciden."})
            }
            else setError({...error, "password":""})
        }
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
        <div className="uk-padding uk-margin-left uk-flex uk-flex-center">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" autoComplete="off">
                <h2 className="p-2 text-2xl">Informacion personal - Cliente</h2>
                <div className="mb-4 uk-flex uk-flex-row uk-flex-wrap">
                    <div className="uk-flex uk-flex-column uk-form-width-large uk-margin-right">
                        <label htmlFor="email" className="p-2"> Correo electronico </label>
                        <input
                        className="uk-input uk-form-width-large"
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="off"
                        placeholder="Ingresa tu email"
                        onChange={handleChange}
                        required/>
                        {
                            error.email ? <span className="uk-alert-danger">{error.email}</span> : null
                        }
                    </div>
                    <div className="uk-flex uk-flex-column uk-form-width-large">
                        <label htmlFor="username" className="p-2"> Nombre de usuario </label>
                        <input
                        className="uk-input uk-form-width-large"
                        type="text"
                        name="username"
                        id="username"
                        autoComplete="off"
                        placeholder="Ingresa tu nombre de usuario" 
                        onChange={handleChange}
                        required/>
                        {
                            error.username ? <span className="uk-alert-danger">{error.username}</span> : null
                        }
                    </div>
                </div>
                <div className="mb-4 uk-flex uk-flex-row uk-flex-wrap">
                    <div className="uk-flex uk-flex-column uk-form-width-large uk-margin-right">
                        <label htmlFor="name" className="p-2"> Nombre </label>
                        <input
                        className="uk-input uk-form-width-large"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Ingresa tu nombre"
                        autoComplete="off"
                        onChange={handleChange}
                        required/>
                        {
                            error.name ? <span className="uk-alert-danger">{error.name}</span> : null
                        }
                    </div>
                    <div className="uk-flex uk-flex-column uk-form-width-large uk-margin-right">
                        <label htmlFor="lastname" className="p-2"> Apellido </label>
                        <input className="uk-input uk-form-width-large"  type="text"
                        name="lastname" id="lastname"
                        placeholder="Ingresa tu apellido" 
                        onChange={handleChange}
                        required/>
                        {
                            error.lastname ? <span className="uk-alert-danger">{error.lastname}</span> : null
                        }
                    </div>
                </div>
                
                <div className="mb-4 uk-flex uk-flex-row uk-flex-wrap">
                    <div className="uk-flex uk-flex-column uk-form-width-large uk-margin-right">
                        <label htmlFor="password" className="p-2"> Contraseña - (minimo 6 caracteres) </label>
                        <input className="uk-input uk-form-width-large"  type="password"
                        name="password" id="password"
                        placeholder="Ingresa tu contraseña" 
                        onChange={handleChange}
                        required/>
                    </div>
                    <div className="uk-flex uk-flex-column uk-form-width-large uk-margin-right">
                        <label htmlFor="confirmPassword" className="p-2"> Confirmar contraseña </label>
                        <input className="uk-input uk-form-width-large"  type="password"
                        name="confirmPassword" id="confirmPassword"
                        placeholder="Confirma tu contraseña" 
                        onChange={handleChange}
                        required/>
                        {
                            error.password ? <span className="uk-alert-danger">{error.password}</span> : null
                        }
                    </div>
                </div>
                
                <div className="mb-4">
                <label htmlFor="acceptT" className="p-2">Acepto los términos y condiciones del servicio</label>
                <input className="uk-checkbox uk-margin-left"  type="checkbox"  name="acceptT" id="acceptT" checked={checked} onChange={handleChangeCheckbox}/>
                </div>
                <input className="uk-button uk-button-danger uk-margin" type="submit" value="Registrarse"/>
            </form>
        </div>
    )}
    if(done){
        return (
            <div className="w-full p-24 flex flex-col justify-center content-center">
                <h1 className="text-3xl flex justify-center">Te has registrado exitosamente!</h1>
                <div className="flex justify-center py-12">
                <Link to="/ingresar" style={{ "textDecoration": "none", "color":"white" }} >
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded ">Iniciar sesion</button>
                </Link>
                </div>
            </div>
        )
    }
}
