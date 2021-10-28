import React, {useState} from "react";
import { Link } from "react-router-dom";
import validate from "../../../Tools/validations";

export default function RegisterFormPro(){
    const [newUser, setNewuser]= useState({
        isProfesional:true,
        email:"",
        userName:"",
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
    const categorylist=["Abogacía", "Arquitecto", "Contador", "Medicina general", "Psicologia", "Veterinario"]
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
    function handleChangeCheckboxprof(e){
        setProfchecked(!profchecked)
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
                confirmPassword:"",
                name:"",
                lastname:"",
                telNum1:"",
                telNum2:"",
                professionalRegistration:"",
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
            <form onSubmit={handleSubmit} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" autoComplete="off">
                <h2>Informacion personal - Profesional</h2>
                <div class="uk-margin">
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
                <div class="uk-margin">
                    <input class="uk-input uk-form-width-large uk-margin-right" type="text"
                    name="name"
                    placeholder="Nombre"
                    onChange={handleChange}
                    required/>
                    <input class="uk-input uk-form-width-large"  type="text"
                    name="lastname"
                    placeholder="Apellido" 
                    onChange={handleChange}
                    required/>
                </div>
                <span class="uk-alert-danger">{error.name}</span>
                <div class="uk-margin">
                    <input class="uk-input uk-form-width-large uk-margin-right" type="tel"
                    name="telNum1"
                    placeholder="Telefono"
                    onChange={handleChange}
                    required/>
                </div>
                <span class="uk-alert-danger">{error.phone}</span>
                <select name="category" class="uk-select uk-width-1-1 uk-margin-bottom" onChange={handleChange} required >
                        <option value="">- Seleccionar profesión -</option>
                        {categorylist.map(e=>{
                            return(<option name={e} key={categorylist.indexOf(e)} value={e}>
                                {e}
                                </option>)
                        })}
                    </select>
                <div>
                    <div class="uk-width-1-2">
                    <label for="prof-check" class="uk-padding-right">Eres profesional certificado?</label>
                    <input class="uk-checkbox uk-margin-left"  type="checkbox"  name="prof-check" checked={profchecked} onChange={handleChangeCheckboxprof}/>
                    </div>
                    {profchecked && <input class="uk-input uk-form-width-large uk-margin"  type="text"
                    name="professionalRegistration"
                    placeholder="Nro de matricula" 
                    onChange={handleChange}
                    required/>}
                </div>
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
                <Link to="/">
                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded ">Volver al inicio</button>
                </Link>
                </div>
            </div>
        )
    }
}