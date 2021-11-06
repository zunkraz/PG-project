
import React from 'react'
import { FaMarker } from "react-icons/fa";
import BigButton from '../BigButton';
import ShowData from './ShowData';



function PersonalInformationContainer({userData, changeUserState, userInfo, isProf}) {

    console.log(userData)
    //console.log(userInfo)

// {
        // CONTROL 
        //     isProfessional,
        //     isAdmin,
        //     isActive, CORREO PERSONAL 
        ///////////////////////////


        // PERSONAL
        //     name,,
        //     lastname,
        //     username,
        //     email,
        //     password,
        //     birthdate,
        /////////////////////////////
// },
    const userNormalInfo={
        username : userData.username,
        nombre : userData.name,
        apellido : userData.lastname,
        email : userData.email,
        cumpleaños : userData.birthdate
    }
    
    const getValue=(data)=>{
        if(data){
            console.log(data)
            return{
                profession: userData.category.name,
                professionalRegistration: userData.professionalRegistration,
                appointments: userData.appointments,
                pais : userData.country.name,
                estado : userData.state,
                img: userData.img,
                schedule: userData.schedule
            }
        } 
        return {msg:'sin datos'}
    }
        // PROFESIONAL
        //     isVerified, PROFESIONAL VERIFICADO
        //     img,
        //     professionalRegistration, Numero de Matricula
        //     regUrl, link de registro de título o certificado
        //     biography,
        //     title,
        //     institute,
        //     category,
        //     country,
        //     state,
        //     city,
        //     degree,
        //     bankAccount,
        //     appointments,
        //     schedule,
        //     likes,
        //     dislikes
        /////////////////////////////////////
    const userProfInfo = getValue(userData.isProfessional)

    //console.log(userNormalInfo)
    //console.log(userProfInfo)
    const showDataDiv='flex border-b-4 justify-between w-80';
    const showDataSpan='capitalize mr-4 flex font-bold text-base'
    const showDataP='text-sm font-normal ml-4'
    /*
    professionalData:{
        matricula:'23-34-44-123-22-1a',
        titulo:'Engineer Game Desing',
        bankAccount: 'olisadfbn1231248484nsadfj'
    }
    */
    const editData = (elem, data)=>{
        console.log(elem)
        alert(`pop up editar ${elem} => datos y post ${data}`)
    }

    // const arr = Object.keys(personalInfo)
    // const arr2 = professionalData && Object.keys(professionalData)

    return (
        <div className=''>
            <div className='padd-md-b font-main text-bold text-center- font-xl border-bottom-color-main'>
                Información
            </div>
            <div className="mrg-lg-t">
                <button 
                    name='personalInfo' 
                    className='padd-md-tb padd-lg-lr font-main user-dashboard-info-tab-active' 
                    onClick={changeUserState}>
                    Datos Personales
                </button>
                {
                    professionalData && 
                    <button 
                        name='professionalInfo'
                        className='mrg-lg-l padd-md-tb padd-lg-lr font-main user-dashboard-info-tab-inactive'
                        onClick={changeUserState}>
                       Datos Profesionales
                        
                    </button>
                }
                {/* Boton para incluir la información de agendamiento
                    professionalData && 
                    <button 
                        name='professionalInfo'
                        className='mrg-lg-l padd-md-tb padd-lg-lr user-dashboard-info-tab-inactive'
                        onClick={changeUserState}>
                        <span className="element-xl-lg-md">Datos Agendamiento</span>
                        <span className="element-sm-xs font-sm">Agendamiento</span>
                    </button>
                */
                }
                {/*
                <FaMarker
                    className='font-lg text-red-300 hover:text-gray-600 cursor-pointer duration-500'
                    onClick={()=>alert('pop up editar datos y post')}
                />
                */}
            </div>            
            <div className='user-dashboard-info-tabs-content border-color-dark-a20 padd-lg'>
                {/*<p>{Object.keys(userNormalInfo)}</p>*/}
                {userInfo==='personalInfo' && 
                    <div className='flex flex-col'>
                        {
                            Object.keys(userNormalInfo)?.map((elem, index)=>{
                                //console.log(`${elem} : ${userNormalInfo[elem]}`)
                                return (
                                    <div key={index+1} className='mrg-lg-t padd-md-tb border-bottom-color-dark-a20 flex justify-between'>
                                        {
                                            elem==='username' &&
                                            <span key={index+1*2} className='text-bold'>
                                                {`Nombre de Usuario : `}
                                            </span>
                                        }
                                        {
                                            elem==='name' &&
                                            <span key={index+1*2} className='text-bold'>
                                                {`Nombre : `}
                                            </span>
                                        }
                                        {
                                            elem==='lastname' &&
                                            <span key={index+1*2} className='text-bold'>
                                                {`Apellido : `}
                                            </span>
                                        }
                                        {
                                            elem==='email' &&
                                            <span key={index+1*2} className='text-bold'>
                                                {`Correo : `}
                                            </span>
                                        }
                                        <p key={index+1*3} className='font-normal'>
                                            {userNormalInfo[elem]}
                                        </p>
                                    </div>
                                    /* <p key={index}>{elem==='img'?'Imagen Cargada':userNormalInfo[elem]}</p></span> */
                                    /*return <span key={index} className='capitalize mr-4 
                                        font-bold text-base'>{`${elem}  : `}
                                    <p key={index}>{elem==='img'?'Imagen Cargada':userNormalInfo[elem]}</p></span>*/
                                )
                            })
                        }
                    </div>
                }
                {
                //arr?.map((elem,index)=>{
                //    return  <div key={index} className='flex border-b-4'>
                //                <span key={index} className='capitalize mr-4 font-bold text-base'>{`${elem}  : `}</span>
                //                <p key={index+1000}>{elem==='img'?'Imagen Cargada':personalInfo[elem]}</p>
                //            </div>
                //})}
                }
                {
                    (professionalData && userInfo==='professionalInfo') && Object.keys(userProfInfo)?.map((elem,index)=>{
                        return  <div key={index+1} className='mrg-lg-t padd-md-tb border-bottom-color-dark-a20 flex justify-between'>
                                    <span key={index+1*2} className='capitalize mr-4 font-bold text-base'>
                                        {`${elem}  : `}
                                    </span>
                                    {
                                        elem==='img' && 
                                        <span key={index}>
                                            'Imagen Cargada'
                                        </span>
                                    }
                                    {
                                        elem==='schedule' && 
                                        <span className='flex flex-col'>
                                            {/*userProfInfo[elem]*/}
                                            <button
                                                className='bg-gray-300 pl-2 pr-2 font-semibold rounded-xl cursor-pointer hover:bg-red-300 duration-500' onClick={()=>alert('pop up cambiar dias')}
                                            >
                                                Cambiar Dias Hábiles
                                            </button>
                                        </span>
                                    }                                
                                    <p key={index+2*3}>{(elem!=='img' && elem!=='schedule') && userProfInfo[elem]}</p>
                                </div>
                    })
                }
                <button
                    className="width-100 mrg-xl-t padd-sm-tb font-sm- border-radius-sm action action-user-dashboard-edit"
                    onClick={()=>alert('pop up editar datos y post')}
                >
                    Editar Información
                </button> 
            </div>            
        </div>
    )
}

export default PersonalInformationContainer
