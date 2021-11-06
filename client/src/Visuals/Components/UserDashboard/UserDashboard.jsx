import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import { setAdmin } from '../../../Controllers/actions/userActions'
import AddPostComponent from '../PersonalDashboards/AddPostComponent'
import PersonalDashboardContainer from '../PersonalDashboards/PersonalDashboardContainer'
import PersonalInformationContainer from '../PersonalDashboards/PersonalInformationContainer'
import PersonalTaskComponent from '../PersonalDashboards/PersonalTaskComponent'
import ProfessionalPostsContainer from '../PersonalDashboards/ProfessionalPostsContainer'

function UserDashboard({userData}) {
    console.log(userData)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setAdmin(userData.isAdmin))
    }, [userData.isAdmin])

    const [tip, setTip] = useState(false)
    const [userInfo, setUserInfo] = useState('personalInfo')

    const [tipsArray, settipsArray] = useState([
        'Diseño para Halo-4', 'Como usar Photoshop en Iphone', 
        'Sabías sobre esta paleta de colores?', 'Diseño para Ark-II',
        'Diseño para Tetris'
    ])
    
    const changeTipFlag=()=>{setTip(!tip)}
    
    const changeUserState = (e)=>{
        setUserInfo(e.target.name)
    }

    // FUNCION DE AGREGAR TIPS, COPIAR PARA AGREGAR REVIEWs
    const addPost=(post)=>{
        settipsArray([...tipsArray,post])
        setTip(false)
    }

    const pendienteNormal=[
        '1 hora con Raul - Arquitecto',
        '2 horas con Ana - Artista',
        '1/2 hora con Romina - Abogada'
    ]

    const pendientePro = [
        '30 minutos con Raul',
        '2 horas con Marcos',
        '1 hora con Romina',
        '2 horas con Rocio',
        '30 minutos con Claudio'
    ]
    // {
//     name,,
//     lastname,
//     username,
//     email,
//     password,
//     isProfessional,
//     isAdmin,
//     isActive, CORREO PERSONAL 
//     isVerified, PROFESIONAL VERIFICADO
//     country,
//     state,
//     city,
//     birthdate,
//     img,
//     professionalRegistration, Numero de Matricula
//     regUrl, link de registro de título o certificado
//     biography,
//     title,
//     institute,
//     cost,
//     category,
//     degree,
//     bankAccount,
//     appointments,
//     schedule,
//     likes,
//     dislikes
// },
/*
            appointments: Array(0)
            length: 0
            [[Prototype]]: Array(0)
            category:
            name: "Veterinaria"
            _id: "617aad194a37a360e5d05b20"
            [[Prototype]]: Object
            country:
            name: "Brasil"
            _id: "617ddd2a82b867a5c2a72c18"
            [[Prototype]]: Object
            dislikes: 50
            email: "helenchufe101@mail.com"
            img: "https://pbs.twimg.com/profile_images/1116176743356874760/NTYGV_jv_400x400.jpg"
            isActive: true
            isAdmin: false
            isProfessional: true
            isVerified: true
            lastname: "Chufe"
            likes: 276
            name: "Helen"
            password: "$2b$10$dikV.KlxklYIXDyp/d49i.kfNL6d4snmDesrA99Re3O4jUBJQnc6a"
            professionalRegistration: "552sasd25432"
            username: "Helen_Chufe"
            __v: 0
            _id: "617f225d88338db33c578036"
*/
    return (
        <React.Fragment>
            <div className="wrapper bg-professional-title">
                <div className="wrapper padd-lg bg-color-light-a80">
                    <section>
                        {/* Title Container */}
                        <div className="col-1-1@xl col-1-1@lg col-1-1@md">
                            {/*<div className='flex flex-col'>*/}
                                {/*<div className='text-red-400 font-sans text-4xl h-28
                                            text-center text-opacity-900 uppercase 
                                            font-extrabold items-center flex justify-center
                                            border-b-8 border-double border-red-300 ml-14 mr-14 mb-4 '
                                        >*/}
                            <div className='font-main font-2x'>
                                {userData.isProfessional?
                                <div>
                                    <span className="padd-md-b padd-lg-r text-bold border-bottom-color-main">
                                        {`${userData.name} ${userData.lastname}`}
                                    </span>
                                    <div className="mrg-sm-t">
                                        {userData.category.name}
                                    </div>
                                </div>
                                :<span>{`${userData.name} ${userData.lastname}`}</span>}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="wrapper mrg-lg-t">
                <section>
                    {/* Container: Image, Info, Schedule */}
                    <div className='col-1-1@xl col-1-1@lg col-1-1@md col-1-1@sm col-1-1@xs' data-uk-height-match=".normalize">
                        {/* Container: Image */}
                        <div className='col-1-5@xl col-1-4@lg col-1-1@md col-1-1@sm col-1-1@xs padd-lg bg-t3-'>
                            {/*<div className='flex flex-col'>*/}
                            {/*<div className='flex justify-around items-start  pt-4 miPerfilCustomHeight'>*/}
                            <div className='padd-lg bg-color-light border-color-dark-a20 border-radius-sm box-shadow-xs normalize'>
                                {
                                    userData.isProfessional && 
                                    <PersonalDashboardContainer user={userData}/*user={flag?user:userPro}*//>
                                }
                                {
                                    userData.isProfessional && 
                                    /*<button className='bg-green-300 w-80 p-1 font-lg font-bold uppercase' onClick={changeTipFlag}>*/
                                    <button 
                                        className='width-100 mrg-lg-t padd-sm-tb font-lg font-main border-radius-sm action action-add-post'
                                        onClick={changeTipFlag}>
                                        Agregar post
                                    </button>
                                }
                            </div>
                        </div>
                        {/* Container: Info */}
                        <div className='col-2-5@xl col-3-4@lg col-1-1@md col-1-1@sm col-1-1@xs padd-lg'>
                            <div className='padd-lg bg-color-light border-color-dark-a20 border-radius-sm box-shadow-xs normalize'>
                                <PersonalInformationContainer
                                    personalInfo={userData /*flag?user.personalData:userPro.personalData*/}
                                    professionalData={userData.isProfessional && true /*flag===false && userPro.professionalData*/}
                                    changeUserState={changeUserState}
                                    userInfo={userInfo}
                                />
                            </div>
                        </div>
                        {/* Container: Schedule */}
                        <div className='col-1-5@xl col-2-4@lg col-1-1@md col-1-1@sm col-1-1@xs padd-lg bg-t5-'>
                            <div className='bg-color-light border-color-dark-a20 border-radius-sm box-shadow-xs normalize'>
                                <PersonalTaskComponent data={userData.isProfessional?pendienteNormal:pendientePro} />
                            </div>
                        </div>
                        {/* Container: Posts */}
                        <div className='col-1-5@xl col-2-4@lg col-1-1@md col-1-1@sm col-1-1@xs padd-lg bg-t6-'>
                            <div className='bg-color-light border-color-dark-a20 border-radius-sm box-shadow-xs normalize'>
                                {tip && <AddPostComponent addPost={addPost}/>}
                                {/*   
                                    userData.isProfessional &&
                                        <h5 className='flex justify-center uppercase font-semibold tracking-widest text-gray-500 bg-gray-200'>
                                            Post Publicados
                                        </h5>
                                */}
                                {userData.isProfessional && <ProfessionalPostsContainer posts={tipsArray}/>}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </React.Fragment>
    )
}

export default UserDashboard

