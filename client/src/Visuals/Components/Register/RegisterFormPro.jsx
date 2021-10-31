import React, {useState} from "react";
import { Link } from "react-router-dom";
import validate from "../../../Tools/validations";
import { createUser } from "../../../ApiReq/users";
import {useSelector} from "react-redux"

export default function RegisterFormPro(){
    const [newUser, setNewuser]= useState({
        isProfessional:true,
        email:"",
        username:"",
        password:"",
        confirmPassword:"",
        name:"",
        lastname:"",
        telNum1:"",
        category:"",
        professionalRegistration:""
    })
    const [checked, setChecked]= useState(false)
    const [profchecked, setProfchecked]= useState(false)
    const [error, setError]= useState({})
    const [done, setDone]= useState(false)

    const userData= useSelector((state) => {return state.userReducer.users})
    const categorylist= useSelector(state => state.constantInfoReducer.categories)

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
    function handleChangeCheckboxprof(e){
        setProfchecked(!profchecked)
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
                password:"",
                confirmPassword:"",
                name:"",
                lastname:"",
                telNum1:"",
                telNum2:"",
                professionalRegistration:"",
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
                <h2 class="p-2 text-2xl">Informacion personal - Profesional</h2>
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
                        <label htmlFor="telNum1" class="p-2"> Telefono </label>
                        <input class="uk-input uk-form-width-large uk-margin-right" type="tel"
                        name="telNum1" id="telNum1"
                        placeholder="Telefono"
                        onChange={handleChange}
                        required/>
                    </div>
                </div>
                <span class="uk-alert-danger">{error.phone}</span>
                <div class="mb-4 uk-flex uk-flex-row uk-flex-wrap">
                    <label htmlFor="category" class="p-2"/>
                    <select name="category" id="category" class="uk-select uk-width-1-1 uk-margin-bottom" onChange={handleChange} required >
                            <option value="">- Seleccionar profesión -</option>
                            {categorylist.map(e=>{
                                return(<option name={e.name} key={e._id} value={e._id}>
                                    {e.name}
                                    </option>)
                            })}
                    </select>
                </div>
                <div class="mb-4">
                    <div class="uk-width-1-2">
                    <label htmlFor="prof-check" class="uk-padding-right p-2">Eres profesional certificado?</label>
                    <input class="uk-checkbox uk-margin-left"  type="checkbox"  name="prof-check" checked={profchecked} onChange={handleChangeCheckboxprof}/>
                    </div>
                    {profchecked && <input class="uk-input uk-form-width-large uk-margin"  type="text"
                    name="professionalRegistration"
                    placeholder="Nro de matricula" 
                    onChange={handleChange}
                    required/>}
                </div>
                <div>
                <label htmlFor="acceptT" class="mb-4 p-2">Acepto los términos y condiciones del servicio</label>
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
                <Link to="/">
                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded ">Volver al inicio</button>
                </Link>
                </div>
            </div>
        )
    }
}