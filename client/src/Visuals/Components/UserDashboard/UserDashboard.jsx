import React, {useEffect, useState} from 'react'
import { setAdmin } from '../../../Controllers/actions/userActions'
import AddPostComponent from '../PersonalDashboards/AddPostComponent'
import PersonalDashboardContainer from '../PersonalDashboards/PersonalDashboardContainer'
import PersonalInformationContainer from '../PersonalDashboards/PersonalInformationContainer'
import PersonalTaskComponent from '../PersonalDashboards/PersonalTaskComponent'
import ProfessionalPostsContainer from '../PersonalDashboards/ProfessionalPostsContainer'

function UserDashboard({userData}) {

    useEffect(() => {
        setAdmin(userData.isAdmin)
        console.log('set admin')
    }, [])
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
        <div className='flex flex-col'>
            <div className='text-red-400 font-sans text-4xl h-28
                            text-center text-opacity-900 uppercase 
                            font-extrabold items-center flex justify-center
                            border-b-8 border-double border-red-300 ml-14 mr-14 mb-4 '
                        >
                {userData.isProfessional?
                <span>{`${userData.name} ${userData.lastname}`}<p className='text-gray-400 text-2xl'>{userData.category.name}</p></span>
                :<span>{`${userData.name} ${userData.lastname}`}</span>}
            </div>
            <div className='flex flex-col'>
                <div className='flex justify-around items-start  pt-4 miPerfilCustomHeight'>
                    <div>
                        { userData.isProfessional && <PersonalDashboardContainer  user={userData}/*user={flag?user:userPro}*//>}
                        {userData.isProfessional && <button  className='bg-green-300 w-80 p-1 font-lg font-bold uppercase' 
                                        onClick={changeTipFlag}
                                    >Agregar post</button>}
                    </div>
                    <div className='border-gray-200 bg-gray-100 border-8 
                                rounded-2xl border-solid pt-2 pl-10 pr-10 '>
                        <PersonalInformationContainer   personalInfo={userData /*flag?user.personalData:userPro.personalData*/}
                                                        professionalData={userData.isProfessional && true /*flag===false && userPro.professionalData*/}
                                                        changeUserState={changeUserState}
                                                        userInfo={userInfo}
                                        />
                    </div>
                    <div className='bg-gray-100 rounded-3xl'>
                        <PersonalTaskComponent  data={userData.isProfessional?pendienteNormal:pendientePro} 
                                                
                                    />
                    </div>
                </div>
                <div>
                    {tip && <AddPostComponent addPost={addPost}/>}
                    {userData.isProfessional && <h5 className=' flex justify-center uppercase mt-20 
                                text-4xl font-semibold tracking-widest
                                text-gray-500 bg-gray-200'>Post Publicados</h5>}
                    {userData.isProfessional && <ProfessionalPostsContainer    posts={tipsArray}/>}
                </div>
            </div>
        </div>
    )
}

export default UserDashboard

