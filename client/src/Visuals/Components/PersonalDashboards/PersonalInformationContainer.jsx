
import React from 'react'
import { FaMarker } from "react-icons/fa";



function PersonalInformationContainer({personalInfo, changeUserState, userInfo, professionalData}) {

    //console.log(personalInfo)
    //console.log(userInfo)

    const userNormalInfo={
        username: personalInfo.username,
        name: personalInfo.name,
        lastname: personalInfo.lastname,
        email: personalInfo.email,
    }
    
    const getValue=(data)=>{
        if(data){
            console.log(data)
            return{
                profession: personalInfo.category[0].name,
                country: personalInfo.country.name,
                professionalRegistration: personalInfo.professionalRegistration,
                appointments: personalInfo.appointments,
                img: personalInfo.img,
                schedule: personalInfo.schedule
            }
        } 
        return {msg:'sin datos'}
    }

    const userProfInfo = getValue(personalInfo.isProfessional)

    //console.log(userNormalInfo)
    //console.log(userProfInfo)


    /*
    professionalData:{
            matricula:'23-34-44-123-22-1a',
            titulo:'Engineer Game Desing',
            bankAccount: 'olisadfbn1231248484nsadfj'
        }
    */
    // const arr = Object.keys(personalInfo)
    // const arr2 = professionalData && Object.keys(professionalData)

    return (
        <div className='flex flex-col '>
            <div className=' flex items-center justify-between border-b-8 
                        border-double border-red-300 pt-2 pb-2 w-96'>
                <button name='personalInfo' 
                        className='bg-gray-300 p-1 font-medium rounded-md h-10 w-40 mr-2'
                        onClick={changeUserState}
                    >Datos Personales</button>
                {professionalData && <button name='professionalInfo' 
                        className='bg-gray-300 p-1 font-medium rounded-md h-10 w-40'
                        onClick={changeUserState}
                    >Datos Profesionales</button>}
                    <FaMarker   className='font-lg text-red-300 
                                    hover:text-gray-600 cursor-pointer duration-500'
                                onClick={()=>alert('pop up editar datos y post')}
                            />
            </div>
            <div className='h-72 flex flex-col p-5 h-96'>
                {/*<p>{Object.keys(userNormalInfo)}</p>*/}
                {userInfo==='personalInfo' && 
                            <div className='flex flex-col'>
                                {
                                    Object.keys(userNormalInfo)?.map((elem, index)=>{
                                        //console.log(`${elem} : ${userNormalInfo[elem]}`)
                                        return (
                                            <div key={index+1} className='flex border-b-4 justify-between'>
                                                {elem==='username'&& <span key={index+1*2} className='capitalize mr-4 flex
                                                font-bold text-base'>{`Nombre de Usuario : `}</span>}
                                                {elem==='name'&& <span key={index+1*2} className='capitalize mr-4 flex
                                                font-bold text-base'>{`Nombre : `}</span>}
                                                {elem==='lastname'&& <span key={index+1*2} className='capitalize mr-4 flex
                                                font-bold text-base'>{`Apellido : `}</span>}
                                                {elem==='email'&& <span key={index+1*2} className='capitalize mr-4 flex
                                                font-bold text-base'>{`Correo : `}</span>}
                                                <p key={index+1*3} className='text-sm font-normal ml-4'>{userNormalInfo[elem]}</p>
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
                    return  <div key={index+1} className='flex border-b-4 justify-between'>
                                <span key={index+1*2} className='capitalize mr-4 font-bold text-base'>{`${elem}  : `}</span>
                                {elem==='img' && <span key={index}>'Imagen Cargada'</span>}
                                {elem==='schedule' && <span className='flex flex-col'>
                                                            {/*userProfInfo[elem]*/}
                                                            <button className='bg-gray-300 pl-2 pr-2 font-semibold rounded-xl
                                                                cursor-pointer hover:bg-red-300 
                                                                duration-500' onClick={()=>alert('pop up cambiar dias')}
                                                            >Cambiar Dias Hábiles</button>
                                                    </span>
                                    }
                                
                                <p key={index+2*3}>{(elem!=='img' && elem!=='schedule') && userProfInfo[elem]}</p>
                            </div>
                    })
                }
            </div>
        </div>
    )
}

export default PersonalInformationContainer
