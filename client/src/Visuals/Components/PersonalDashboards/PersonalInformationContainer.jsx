
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
        <div className='flex flex-col '>
            <div className=' flex items-center justify-between border-b-8 
                        border-double border-red-300 pt-2 pb-2 w-96'>
                <button name='personalInfo' 
                        className='bg-gray-300 p-1 font-medium rounded-md h-10 w-40 mr-2'
                        onClick={changeUserState}
                    >Datos Personales</button>
                {isProf && <button name='professionalInfo' 
                        className='bg-gray-300 p-1 font-medium rounded-md h-10 w-40'
                        onClick={changeUserState}
                    >Datos Profesionales</button>}
                    <FaMarker   className='font-lg text-red-300 
                                    hover:text-gray-600 cursor-pointer duration-500'
                                onClick={editData}
                            />
            </div>
            <div className='h-72 flex flex-col p-5 h-96'>
                {userInfo==='personalInfo' && 
                            <div className='flex flex-col items-center'>
                                {
                                    Object.keys(userNormalInfo)?.map((elem, index)=>{
                                        let data=userNormalInfo[elem]
                                        return (
                                            <div key={index+1} className='flex'>
                                                <ShowData   key={index} title={elem} 
                                                                data={data}
                                                                divClass={showDataDiv}
                                                                spanClass={showDataSpan} 
                                                                pClass={showDataP}
                                                        />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                }
                {
                    (isProf && userInfo==='professionalInfo') && Object.keys(userProfInfo)?.map((elem,index)=>{
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
