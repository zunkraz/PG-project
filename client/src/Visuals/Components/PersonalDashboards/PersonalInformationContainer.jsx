
import React, {useState} from 'react'
import { FaMarker } from "react-icons/fa";



function PersonalInformationContainer({personalInfo, changeUserState, userInfo, professionalData}) {


    const bioclass = 'text-gray-500 font-semibold flex items-start justify-center text-xl'
    const profileclass = 'text-gray-800 font-bold text-xl flex justify-start mb-2'
    const profileP='text-gray-500 font-semibold text-lg ml-4'
    const scheduleclass = 'flex justify-start items-center text-green-600 text-2xl font-semibold mb-1'

    
    

    /*
    professionalData:{
            matricula:'23-34-44-123-22-1a',
            titulo:'Engineer Game Desing',
            bankAccount: 'olisadfbn1231248484nsadfj'
        }
    */
    const arr = Object.keys(personalInfo)
    const arr2 = professionalData && Object.keys(professionalData)

    return (
        <div class='flex flex-col '>
            <div class=' flex items-center justify-between border-b-8 
                        border-double border-red-300 pt-2 pb-2 w-96'>
                <button name='personalInfo' 
                        class='bg-gray-300 p-1 font-medium rounded-md h-10 w-40 mr-2'
                        onClick={changeUserState}
                    >Datos Personales</button>
                {professionalData && <button name='professionalInfo' 
                        class='bg-gray-300 p-1 font-medium rounded-md h-10 w-40'
                        onClick={changeUserState}
                    >Datos Profesionales</button>}
                    <FaMarker   class='font-lg text-red-300 
                                    hover:text-gray-600 cursor-pointer duration-500'
                                onClick={()=>alert('pop up editar datos y post')}
                            />
            </div>
            <div className='h-72 flex flex-col p-5 h-96'>
                {userInfo==='personalInfo' && arr?.map((elem,index)=>{
                    return  <div class='flex border-b-4'>
                                <span key={index} class='capitalize mr-4 font-bold text-base'>{`${elem}  : `}</span>
                                <p key={index+1000}>{elem==='img'?'Imagen Cargada':personalInfo[elem]}</p>
                            </div>
                })}
                {(professionalData && userInfo==='professionalInfo') && arr2?.map((elem,index)=>{
                    return  <div class='flex border-b-4'>
                                <span key={index} class='capitalize mr-4 font-bold text-base'>{`${elem}  : `}</span>
                                <p key={index+1000}>{elem==='schedule'?
                                <button class='bg-gray-300 pl-2 pr-2 font-semibold rounded-xl
                                                cursor-pointer hover:bg-red-300 
                                                duration-500' onClick={()=>alert('pop up cambiar dias')}>Cambiar Dias Hábiles</button>:professionalData[elem]}</p>
                            </div>
                })}
            </div>
        </div>
    )
}

export default PersonalInformationContainer
