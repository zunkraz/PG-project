import React, {useState} from 'react'
import BigButton from '../BigButton'
import LoginInputComponent from './LoginInputComponent'
import { Link } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";


function LoginFormComponents({logIn, handleFields, tagUser, tagPass, UserCanLog, passError, passClean, showError, Joined}) {

    const [flag, setflag] = useState(false)
    const [inputName, setinputName] = useState('username')
    const handleFlag=(e)=>{

        setinputName(e.target.name)
        setflag(!flag)
    }
    const [passEye, setpassEye] = useState(false)

    const classInput='bg-gray-100 border-2 border-gray-300 px-5 py-2 '
    const classDanger='ring-4 ring-red-500 ring-opacity-50 bg-gray-100 px-5 py-2 '
    const classLabel='font-xl '
    const classDiv='flex flex-col items-start justify-between  w-96 h-24 '
    const classPass = 'flex items-center justify-between  w-96 h-24' 
    const classBtnPass = 'font-xl' 
    const textPassShow = <FaRegEye/>
    const textPassHide = <FaRegEyeSlash/>

    const classSelectBtn = `bg-gray-200 px-8 py-4 w-96 mt-5 rounded-xl font-semibold 
                            text-3xl uppercase tracking-widest text-gray-100 
                            cursor-pointer hover:bg-gray-400 duration-1000
                            border-2 border-gray-200 shadow-xl ring-4 ring-gray-300 ring-opacity-50`

    const classLogBtn=`bg-red-400 px-8 py-4 w-96 mt-5 rounded-xl font-semibold 
                text-3xl uppercase tracking-widest text-gray-100 
                cursor-pointer hover:bg-red-300 duration-1000
                border-2 border-gray-200 shadow-xl `

    const classNoLogBtn=`bg-gray-200 px-8 py-4 w-96 mt-5 rounded-xl font-semibold 
    text-3xl uppercase tracking-widest text-gray-100 shadow-xl text-white
    cursor-not-allowed `

    const wrogPassClass = 'flex items-center justify-center text-2xl mt-4 duration-700 text-red-500'

    const textLog='text-white'
    const textNoLog='text-gray-400'

    //Clean Field
    const [passField, setPassField] = useState()
    
    const handleClickCheck=()=>{
        setPassField('')
        logIn()
    }

    const handleShowPass = ()=>{
        setpassEye(!passEye)
    }

    //console.log(showError)
    return (
        <div className='flex flex-col'>
            {flag===false &&
                <div className='flex flex-col'>
                    <span className='flex justify-center items-center 
                                    text-2xl font-semibold text-gray-500
                                    mb-5'>Loguearte con</span>
                    <div className='flex flex-col'>
                        <button onClick={handleFlag}
                                className={classSelectBtn}
                                name='username'
                            >Usuario</button>
                        <button onClick={handleFlag}
                                className={classSelectBtn}
                                name='email'
                            >E-Mail</button>
                    </div>
                </div>
            }
            {flag &&
                <LoginInputComponent    handleChange={handleFields} 
                text={inputName==='username'?'Nombre de Usuario':'Correo Electrónico'} 
                name={inputName}
                type={'text'}
                placeholder={inputName==='username'?'Ingrese su Nombre de Usuario':'Ingrese su Correo Electrónico'}
                classInput={tagUser?classInput:classDanger}
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
                classInput={tagPass || passError ?classInput:classDanger}
                classLabel={classLabel}
                classDiv={classDiv}
                classPass={classPass}
                handleShowPass={handleShowPass}
                textPassBtn={passEye?textPassHide:textPassShow}
                classBtnPass={classBtnPass}
                passClean={passClean}
                passField={passField}
                setPassField={setPassField}
                />
            }
            {showError===true &&
                <span className={wrogPassClass}>Contraseña incorrecta</span>
            }
            {flag &&
                <BigButton  disactive={UserCanLog} 
                            onClickFunction={handleClickCheck} 
                            text={'Ingresar'} 
                            cssClass={classLogBtn}
                            cssDisactive={classNoLogBtn}
                            textLog={textLog}
                            textNoLog={textNoLog}
                            />
            }
            <div className='flex items-center justify-center mt-10 text-2xl font-semibold  '>
                {flag &&
                    <Link className='hover:no-underline hover:text-red-400 duration-700' to={'/registro'}>Crea tu cuenta!</Link>
                }
            </div>
        </div>
    )
}

export default LoginFormComponents