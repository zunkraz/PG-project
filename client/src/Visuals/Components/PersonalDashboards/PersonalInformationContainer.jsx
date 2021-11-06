
import React, { useState } from 'react'
import { FaMarker } from "react-icons/fa";
import BigButton from '../BigButton';
import PopContainer from '../PopContainer';
import EditDataComponent from './EditDataComponent';
import ShowData from './ShowData';


function PersonalInformationContainer({userData, changeUserState, userInfo, isProf}) {
    
    console.log(userData)
    
    const [popState, setPopState] = useState(false)
    // {
            // CONTROL 
            //      isProfessional,
            //      isAdmin,
            //      isActive, CORREO PERSONAL 
            //      isVerified, PROFESIONAL VERIFICADO
            //      img,
            ///////////////////////////

    const userNormalInfo={
        username : userData.username,
        nombre : userData.name,
        apellido : userData.lastname,
        cumpleaños : userData.birthdate,
        email : userData.email,
        contraseña: '***********'
    }

    const getValue=(data)=>{
        if(data){
            console.log(data)
            return{
                profession: userData.category.name,
                matricula: userData.professionalRegistration,
                titulo : userData.title,
                universidad: userData.intitute,
                degree: userData.degree,
                'cuenta bancaria': '************',
                pais : userData.country.name,
                estado : userData.state,
                ciudad : userData.city,
            }
        } 
        return {msg:'sin datos'}
    }
    
    const userProfInfo = getValue(userData.isProfessional)

    //console.log(userNormalInfo)
    //console.log(userProfInfo)
    const showDataDiv='mrg-lg-t padd-md-tb border-bottom-color-dark-a20 flex justify-between';
    const showDataSpan='capitalize mr-4 font-bold text-base';
    const showDataP='text-sm font-normal ml-4';
    const popClass = `bg-white h-3/5 w-2/5 flex flex-col items-center 
                    justify-center rounded-2xl shadow-lg 
                    ring-white ring-4 ring-offset-1 ring-offset-red-500	`
    /*
    professionalData:{
        matricula:'23-34-44-123-22-1a',
        titulo:'Engineer Game Desing',
        bankAccount: 'olisadfbn1231248484nsadfj'
    }
    */
    const editData=()=>{
        setPopState(!popState)
    }

    // const arr = Object.keys(personalInfo)
    // const arr2 = professionalData && Object.keys(professionalData)
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
                    isProf && 
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
                <PopContainer   trigger={popState}
                                principalDiv={popClass}
                                children={<EditDataComponent
                                        onCancel={editData}
                                    />}
                    />
            </div>            
            <div className='user-dashboard-info-tabs-content border-color-dark-a20 padd-lg'>
                {/*<p>{Object.keys(userNormalInfo)}</p>*/}
                {userInfo==='personalInfo' && 
                    <div className='flex flex-col'>
                        {
                            Object.keys(userNormalInfo)?.map((elem, index)=>{
                                //console.log(`${elem} : ${userNormalInfo[elem]}`)
                                let data=userNormalInfo[elem]
                                return (
                                        <ShowData   key={index} title={elem} 
                                                        data={data}
                                                        divClass={showDataDiv}
                                                        spanClass={showDataSpan} 
                                                        pClass={showDataP}
                                                />
                                        )
                                    })
                                }
                            </div>
                                    /* <p key={index}>{elem==='img'?'Imagen Cargada':userNormalInfo[elem]}</p></span> */
                                    /*return <span key={index} className='capitalize mr-4 
                                        font-bold text-base'>{`${elem}  : `}
                                    <p key={index}>{elem==='img'?'Imagen Cargada':userNormalInfo[elem]}</p></span>*/
                //                 )
                //             })
                //         }
                //     </div>
                // }
                //{
                //arr?.map((elem,index)=>{
                //    return  <div key={index} className='flex border-b-4'>
                //                <span key={index} className='capitalize mr-4 font-bold text-base'>{`${elem}  : `}</span>
                //                <p key={index+1000}>{elem==='img'?'Imagen Cargada':personalInfo[elem]}</p>
                //            </div>
                //})}
                }
                {
                    (isProf && userInfo==='professionalInfo') 
                            && Object.keys(userProfInfo)?.map((elem,index)=>{
                                let data=userProfInfo[elem]
                        return (
                            <ShowData   key={index} title={elem} 
                                            data={data}
                                            divClass={showDataDiv}
                                            spanClass={showDataSpan} 
                                            pClass={showDataP}
                                    />
                                )
                        
                        
                        // return  <div key={index+1} className='mrg-lg-t padd-md-tb border-bottom-color-dark-a20 flex justify-between'>
                        //             <span key={index+1*2} className='capitalize mr-4 font-bold text-base'>
                        //                 {`${elem}  : `}
                        //             </span>
                        //             {
                        //                 elem==='img' && 
                        //                 <span key={index}>
                        //                     'Imagen Cargada'
                        //                 </span>
                        //             }
                        //             {
                        //                 elem==='schedule' && 
                        //                 <span className='flex flex-col'>
                        //                     {/*userProfInfo[elem]*/}
                        //                     <button
                        //                         className='bg-gray-300 pl-2 pr-2 font-semibold rounded-xl cursor-pointer hover:bg-red-300 duration-500' onClick={()=>alert('pop up cambiar dias')}
                        //                     >
                        //                         Cambiar Dias Hábiles
                        //                     </button>
                        //                 </span>
                        //             }                                
                        //             <p key={index+2*3}>{(elem!=='img' && elem!=='schedule') && userProfInfo[elem]}</p>
                        //         </div>
                    })
                }
                <button
                    className="width-100 mrg-xl-t padd-sm-tb font-sm- border-radius-sm action action-user-dashboard-edit"
                    onClick={editData}
                >
                    Editar Información
                </button> 
            </div>            
        </div>
    )
}

export default PersonalInformationContainer
