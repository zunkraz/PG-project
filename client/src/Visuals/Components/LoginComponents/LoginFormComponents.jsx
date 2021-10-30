import React, {useState} from 'react'
import BigButton from '../BigButton'
import LoginInputComponent from './LoginInputComponent'
import { Link } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";


function LoginFormComponents({classLogBtn, classSelectBtn, logIn, handleFields, tagUser, tagPass, tagRePass}) {

    const [flag, setflag] = useState(false)
    const [inputName, setinputName] = useState('username')
    const handleFlag=(e)=>{
        setinputName(e.target.name)
        setflag(!flag)
    }
    const [passEye, setpassEye] = useState(false)
    const [passEye2, setpassEye2] = useState(false)

    const classInput='bg-gray-100 border-2 border-gray-300 px-5 py-2 '
    const classDanger='ring-4 ring-red-500 ring-opacity-50 bg-gray-100 px-5 py-2 '
    const classLabel='font-xl '
    const classDiv='flex flex-col items-start justify-between  w-96 h-24 '
    const classPass = 'flex items-center justify-between  w-96 h-24' 
    const classBtnPass = 'font-xl' 
    const textPassShow = <FaRegEye/>
    const textPassHide = <FaRegEyeSlash/>
    const handleShowPass = ()=>{
        setpassEye(!passEye)
    }
    const handleShowPass2 = ()=>{
        setpassEye2(!passEye2)
    }
    return (
        <div class='flex flex-col'>
            {flag===false &&
                <div class='flex flex-col'>
                    <span>Loguearte con</span>
                    <div class='flex flex-col'>
                        <button onClick={handleFlag}
                                class={classSelectBtn}
                                name='username'
                            >Usuario</button>
                        <button onClick={handleFlag}
                                class={classSelectBtn}
                                name='email'
                            >E-Mail</button>
                    </div>
                </div>
            }
            {/*classPass, classBtnPass, handleShowPass, textPassTn, passEye*/}
            {flag &&
                <LoginInputComponent    handleChange={handleFields} 
                text={inputName==='username'?'Nombre de Usuario':'Correo Electrónico'} 
                name={inputName}
                type={'text'}
                placeholder={inputName==='username'?'Ingrese su Nombre de Usuario':'Ingrese su Correo Electrónico'}
                classInput={tagUser?classDanger:classInput}
                classLabel={classLabel}
                classDiv={classDiv}
                />
            }
            {flag &&
                <LoginInputComponent    handleChange={handleFields}
                text={'Ingrese su Contraseña'} 
                name={'password'}
                type={passEye?'text':'password'}
                placeholder={'Ingrese su Contraseña'}
                classInput={tagPass?classDanger:classInput}
                classLabel={classLabel}
                classDiv={classDiv}
                classPass={classPass}
                handleShowPass={handleShowPass}
                textPassBtn={passEye?textPassHide:textPassShow}
                classBtnPass={classBtnPass}
                />
            }
            {flag &&
                <LoginInputComponent    handleChange={handleFields} 
                text={'Repita su Contraseña'} 
                name={'repassword'}
                type={passEye2?'text':'password'}
                placeholder={'Repita su Contraseña'}
                classInput={tagRePass?classDanger:classInput}
                classLabel={classLabel}
                classDiv={classDiv}
                classPass={classPass}
                handleShowPass={handleShowPass2}
                textPassBtn={passEye2?textPassHide:textPassShow}
                classBtnPass={classBtnPass}
                />
            }
            {flag &&
                <BigButton onClickFunction={logIn} text={'Ingresar'} cssClass={classLogBtn}/>
            }
            <div class='flex items-center justify-center mt-10 text-2xl font-semibold  '>
                {flag &&
                    <Link class='hover:no-underline hover:text-red-400 duration-700' to={'/registro'}>Crea tu cuenta!</Link>
                }
            </div>
        </div>
    )
}

export default LoginFormComponents