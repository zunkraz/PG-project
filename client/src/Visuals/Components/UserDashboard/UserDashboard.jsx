import React, {useState} from 'react'
import AddPostComponent from '../PersonalDashboards/AddPostComponent'
import PersonalDashboardContainer from '../PersonalDashboards/PersonalDashboardContainer'
import PersonalInformationContainer from '../PersonalDashboards/PersonalInformationContainer'
import PersonalTaskComponent from '../PersonalDashboards/PersonalTaskComponent'
import ProfessionalPostsContainer from '../PersonalDashboards/ProfessionalPostsContainer'

function UserDashboard({userData}) {

    console.log(userData)
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
    return (
        <div className='flex flex-col'>
            <div className='text-red-400 font-sans text-4xl h-28
                            text-center text-opacity-900 uppercase 
                            font-extrabold items-center flex justify-center
                            border-b-8 border-double border-red-300 ml-14 mr-14 mb-4 '
                        >
                {userData.isProfessional?
                <span>{`${userData.name} ${userData.lastname}`}<p className='text-gray-400 text-2xl'>{userData.category[0].name}</p></span>
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

