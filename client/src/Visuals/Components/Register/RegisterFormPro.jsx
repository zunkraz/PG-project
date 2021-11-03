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
        professionalRegistration:"",
        country:""
    })
    const [checked, setChecked]= useState(false)
    const [profchecked, setProfchecked]= useState(false)
    const [error, setError]= useState({})
    const [done, setDone]= useState(false)

    const userData= useSelector(state => state.userReducer.users)
    const categorylist= useSelector(state => state.constantInfoReducer.categories)
    const countries = useSelector(state=>state.constantInfoReducer.countries)

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
        <div className="uk-padding uk-margin-left uk-flex uk-flex-center">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" autoComplete="off">
                <h2 className="p-2 text-2xl">Informacion personal - Profesional</h2>
                <div className="mb-4 uk-flex uk-flex-row uk-flex-wrap">
                    <div className="uk-flex uk-flex-column uk-form-width-large uk-margin-right">
                        <label htmlFor="email" className="p-2"> Correo electronico </label>
                        <input className="uk-input uk-form-width-large" type="email"
                        name="email" id="email"
                        placeholder="Ingresa tu email"
                        onChange={handleChange}
                        required/>
                        {
                            error.email ? <span className="uk-alert-danger">{error.email}</span> : null
                        }
                    </div>
                    <div className="uk-flex uk-flex-column uk-form-width-large">
                        <label htmlFor="username" className="p-2"> Nombre de usuario </label>
                        <input className="uk-input uk-form-width-large"  type="text"
                        name="username" id="username"
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
                        <label htmlFor="password" className="p-2"> Contraseña - (minimo 6 caracteres)</label>
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
                        placeholder="Confirmar contraseña" 
                        onChange={handleChange}
                        required/>
                        {
                            error.password ? <span className="uk-alert-danger">{error.password}</span> : null
                        }
                    </div>
                </div>
                <div className="mb-4 uk-flex uk-flex-row uk-flex-wrap">
                    <div className="uk-flex uk-flex-column uk-form-width-large uk-margin-right">
                        <label htmlFor="name" className="p-2"> Nombre </label>
                        <input className="uk-input uk-form-width-large" type="text"
                        name="name" id="name"
                        placeholder="Ingresa tu nombre" 
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
                <div className=" uk-flex uk-flex-row uk-flex-wrap">
                    <div className="uk-flex uk-flex-column uk-form-width-large uk-margin-right">
                        <label htmlFor="telNum1" className="p-2"> Telefono </label>
                        <input className="uk-input uk-form-width-large uk-margin-right" type="tel"
                        name="telNum1" id="telNum1"
                        placeholder="Ingresa tu telefono" 
                        onChange={handleChange}
                        required/>
                        {
                            error.phone ? <span className="uk-alert-danger">{error.phone}</span> : null
                        }
                    </div>
                    <div className="uk-flex uk-flex-column uk-form-width-large uk-margin-right">
                    <label htmlFor="category-choice" className="p-2">Categoría</label>
                    <select name="category" id="category" className="uk-select uk-form-width-large uk-margin-bottom" onChange={handleChange} required >
                            <option value="">- Seleccionar profesión -</option>
                            {categorylist.map(e=>{
                                return(<option name={e.name} key={e._id} value={e._id}>
                                    {e.name}
                                    </option>)
                            })}
                    </select>
                    </div>
                </div>
                <div className="mb-4 uk-flex uk-flex-row uk-flex-wrap">
                    <label htmlFor="category" className="p-2"/>
                    <select name="country" id="country" className="uk-select uk-width-1-1 uk-margin-right uk-margin-bottom" onChange={handleChange} required >
                            <option value="">- Seleccionar país -</option>
                            {countries.map(e=>{
                                return(<option name={e.name} key={e._id} value={e._id}>
                                    {e.name}
                                    </option>)
                            })}
                    </select>
                </div>
                <div className="mb-4">
                    <div className="uk-width-1-2">
                    <label htmlFor="prof-check" className="uk-padding-right p-2">Eres profesional certificado?</label>
                    <input className="uk-checkbox uk-margin-left"  type="checkbox"  name="prof-check" checked={profchecked} onChange={handleChangeCheckboxprof}/>
                    </div>
                    {profchecked && <input className="uk-input uk-form-width-large uk-margin"  type="text"
                    name="professionalRegistration"
                    placeholder="Nro de matricula" 
                    onChange={handleChange}
                    required/>}
                </div>
                <div>
                <label htmlFor="acceptT" className="mb-4 p-2">Acepto los términos y condiciones del servicio</label>
                <input className="uk-checkbox uk-margin-left"  type="checkbox"  name="acceptT" checked={checked} onChange={handleChangeCheckbox}/>
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
                <Link to="/ingresar">
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded ">Iniciar sesion</button>
                </Link>
                </div>
            </div>
        )
    }
}