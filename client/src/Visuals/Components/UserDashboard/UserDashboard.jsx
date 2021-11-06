import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import { setAdmin } from '../../../Controllers/actions/userActions'
import AddPostComponent from '../PersonalDashboards/AddPostComponent'
import PersonalDashboardContainer from '../PersonalDashboards/PersonalDashboardContainer'
import PersonalInformationContainer from '../PersonalDashboards/PersonalInformationContainer'
import PersonalTaskComponent from '../PersonalDashboards/PersonalTaskComponent'
import ProfessionalPostsContainer from '../PersonalDashboards/ProfessionalPostsContainer'
import Scheduler from './Scheduler'

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
                                >Publicar Post</button>
                        }
                    </div>
                    <div className=' flex flex-col border-gray-200 bg-gray-100 border-8 items-center justify-center 
                                rounded-2xl border-solid pt-2 pl-10 pr-10 '>
                        <PersonalInformationContainer   userData={userData}
                                                        changeUserState={changeUserState}
                                                        userInfo={userInfo}
                                                        isProf={userData.isProfessional?true:false}
                                        />
                    { (!userData.review && !userData.isProfessional) &&
                                <button  className='bg-green-300 w-80 p-1 font-lg font-bold uppercase' 
                                onClick={changeTipFlag}
                            >Publicar reseña</button>
                    }
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
            {userData.isProfessional && <div>
                <Scheduler userId={userData._id}/>
            </div>}
        </div>
    )
}

export default UserDashboard

