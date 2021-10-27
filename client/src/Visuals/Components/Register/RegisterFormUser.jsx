import React, {useState} from "react";
import validate from "../../../Tools/validations";

export default function RegisterFormUser(){
    const [newUser, setNewuser]= useState({
        email:"",
        userName:"",
        password:"",
        confirmPassword:""
    })
    const [checked, setChecked]= useState(false)
    const [error, setError]= useState({})

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
            console.log("go")
            alert('Te has registrado existosamente!');
        }
      }

    return (
        <div class="uk-padding uk-margin-left uk-flex uk-flex-center">
            <form onSubmit={handleSubmit} class="uk-form-horizontal uk-margin-small" autocomplete="off">
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
                <label for="acceptT">Acepto los términos y condiciones del servicio</label>
                <input class="uk-checkbox uk-margin-left"  type="checkbox"  name="acceptT" checked={checked} onChange={handleChangeCheckbox}/>
                </div>
                <input class="uk-button uk-button-danger uk-margin" type="submit" value="Registrarse"/>
            </form>
        </div>
    )
}
