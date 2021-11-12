import React, { useState } from 'react'

function NewPassField(props) {

    const [passObj, setPassObj] = useState({
        password:'',
        newPassword:''
    })

    const handleFields=(e)=>{
        setPassObj({
            ...passObj,
            [e.target.name]: e.target.value
        })
    }

    
    const check=()=>{
        if(passObj.newPassword.length>5 && passObj.password===passObj.newPassword) return props.changeStatus()
    }
    if(passObj.password.length>5)check();


    return (
        <div className='flex flex-col items-center justify-center m-4'>
                <div className='flex flex-col'>
                    <form>
                        <label  className=''
                            ><p className=''
                                >Ingrese la nueva contraseña</p></label>
                        <input  className=''
                                onChange={handleFields}
                                name='password'
                                placeholder='Ingresar Contraseña'
                            ></input>
                        <label  className=''
                            ><p className=''
                            >Repita la nueva contraseña</p></label>
                        <input  className=''
                                onChange={handleFields}
                                name='newPassword'
                                placeholder='Ingresar Contraseña'
                            ></input>
                    </form>
                </div>
                    <button className={`flex bg-green-500 bg-opacity-75 mt-2 w-full items-center 
                                        justify-center p-2 rounded-lg`}
                            onClick={props.onCancel}
                            >
                        <p className='font-semibold tracking-widest'>volver</p>
                    </button>
            </div>
    )
}

export default NewPassField
