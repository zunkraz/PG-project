
import React, { useState } from 'react'
import { FaMarker } from "react-icons/fa";
import PopContainer from '../PopContainer';
import EditDataComponent from './EditDataComponent';
import ShowData from './ShowData';
import Swal from 'sweetalert2'

function PersonalInformationContainer({userData, changeUserState, userInfo, isProf}) {
    
    console.log(userData)
    
    const [popState, setPopState] = useState(false)

    // {
            // CONTROL 
            //      isProfessional,
            //      isAdmin,
            //      isActive, CORREO PERSONAL 
            //      isVerified, PROFESIONAL VERIFICADO
            ///////////////////////////

    const userNormalInfo={
        username : userData.username,
        email : userData.email,
        contraseña: userData.password,
        '':'',
        nombre : userData.name,
        apellido : userData.lastname,
        cumpleaños : userData.birthdate,
    }

    const getValue=(data)=>{
        if(data){
            return{
                profesion: userData.category.name,
                matricula: userData.professionalRegistration,
                titulo : userData.title,
                universidad: userData.institute,
                'cuenta bancaria': userData.bankAccount,
                pais : userData.country.name,
                estado : userData.state,
                ciudad : userData.city,
            }
        } 
        return {msg:'sin datos'}
    }

    const userProfInfo = getValue(userData.isProfessional)

    const [postPersData, setpostPersData] = useState({
        name : userData.name,
        lastname : userData.lastname,
        birthdate : userData.birthdate,
        password: userData.password,
    })

    const [postProfData, setpostProfData] = useState({
        img: userData.img,
        title : userProfInfo.titulo,
        institute: userData.institute,
        bankAccount: userData.bankAccount,
        state : userData.state,
        city : userData.city,
    })

    const handleEditFields=(e)=>{
        switch (e.target.name) {
            case 'name':
                setpostPersData({
                    ...postPersData,
                    name: e.target.value
                })
                break;
            case 'lastname':
                setpostPersData({
                    ...postPersData,
                    lastname: e.target.value
                })
                break;
            case 'birthdate':
                setpostPersData({
                    ...postPersData,
                    birthdate: e.target.value
                })
                break;

            case 'password':
                setpostPersData({
                    ...postPersData,
                    password: e.target.value
                })
                break;
            case 'img':
                setpostProfData({
                    ...postProfData,
                    img: e.target.value
                })
                break;
            case 'title':
                setpostProfData({
                    ...postProfData,
                    title: e.target.value
                })
                break;
            case 'intitute':
                setpostProfData({
                    ...postProfData,
                    intitute: e.target.value
                })
                break;
            case 'bankAccount':
                setpostProfData({
                    ...postProfData,
                    bankAccount: e.target.value
                })
                break;
            case 'state':
                setpostProfData({
                    ...postProfData,
                    state: e.target.value
                })
                break;
            case 'city':
                setpostProfData({
                    ...postProfData,
                    city: e.target.value
                })
                break;
            default:
                break;
        }
    }

    console.log(postPersData)
    console.log(postProfData)



    const sendPersData=()=>{
        setPopState(!popState)
        console.log(postPersData)
        Swal.fire(
            'Datos enviados!',
            'Pronto vera los cambios efectuados',
            'success'
        )
    }
    const sendProfData=()=>{
        setPopState(!popState)
        console.log(postProfData)
        alert('POST PROFESIONAL DATA')
    }

    const editData=()=>{
        setPopState(!popState)
    }

    // CLASS ///////////////
    
    const showDataDiv='mrg-lg-t padd-md-tb border-bottom-color-dark-a20 flex justify-between';
    const showDataSpan='capitalize mr-4 font-bold text-base';
    const showDataP='text-sm font-normal ml-4';
    const popClass = `bg-white bg-opacity-95 mt-20 h-4/5 w-2/5 flex flex-col items-center 
                    justify-center rounded-lg shadow-lg 
                    ring-white ring-4 ring-offset-1 ring-offset-red-500	`

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
                <PopContainer   trigger={popState}
                                principalDiv={popClass}
                                children={<EditDataComponent
                                        onChange={handleEditFields}
                                        onSuccess={userInfo==='personalInfo'?sendPersData:sendProfData}
                                        onCancel={editData}
                                        userInfo={userInfo}
                                    />}
                    />
            </div>            
            <div className='user-dashboard-info-tabs-content border-color-dark-a20 padd-lg'>
                {userInfo==='personalInfo' && 
                    <div className='flex flex-col'>
                        {
                            Object.keys(userNormalInfo)?.map((elem, index)=>{
                                let data=(elem==='cuenta bancaria'|| elem==='contraseña')?'*************':userNormalInfo[elem]
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
                    })
                }
                {!userData.googleAccount && <button
                    className="width-100 mrg-xl-t padd-sm-tb font-sm- border-radius-sm action action-user-dashboard-edit flex items-center justify-center p-4 font-lg"
                    onClick={editData}
                    >Editar Información <span className='ml-6'><FaMarker/></span>
                </button>}
            </div>            
        </div>
    )
}

export default PersonalInformationContainer
