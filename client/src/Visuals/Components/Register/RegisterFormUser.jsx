import React, {useState} from "react";
import validate from "./validations";

export default function RegisterForm(){
    const [newUser, setNewuser]= useState({
        email:"",
        username:"",
        password:"",
        confirmPassword:""
    })
    const [error, setError]= useState({})

    function handleChange(e){
        const {value, name}=e.target
        setNewuser({
                ...newUser,
                [name]:value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(validate(newUser, setError)){
            console.log(newUser);
            setNewuser({
                email:"",
                username:"",
                password:"",
                confirmPassword:""
            })
            setError({})
            e.target.reset();
            // fetch("url", {
            //     method:"POST", 
            //     body: JSON.stringify( input ),
            //     headers:{
            //         'Content-Type': 'application/json'
            //         }
            //     })
            //     .then(res => res.json())
            //     .catch(error => console.error('Error:', error))
            //     .then(response => console.log('Success:', response));

            alert('Te has registrado existosamente!');
        }
      }

    return (
        <div>
            <h2>Informacion Personal</h2>
            <form onSubmit={handleSubmit}>
                <div>
                <input type="email"
                name="email"
                placeholder="Correo electronico"
                onChange={handleChange}
                required/>
                <span>{error.email}</span>
                </div>
                <div>
                <input type="text"
                name="username"
                placeholder="Usuario" 
                onChange={handleChange}
                required/>
                <span>{error.username}</span>
                </div>
                <div>
                <input type="password"
                name="password"
                placeholder="Contraseña" 
                onChange={handleChange}
                required/>
                <input type="password"
                name="confirmPassword"
                placeholder="Confirmar contraseña" 
                onChange={handleChange}
                required/>
                <span>{error.password}</span>
                </div>
                <input type="submit" value="Registrarse"/>
            </form>
        </div>
    )
}