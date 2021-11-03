import React, {useState} from 'react'
import AddPostComponent from '../PersonalDashboards/AddPostComponent'
import PersonalDashboardContainer from '../PersonalDashboards/PersonalDashboardContainer'
import PersonalInformationContainer from '../PersonalDashboards/PersonalInformationContainer'
import PersonalTaskComponent from '../PersonalDashboards/PersonalTaskComponent'
import ProfessionalPostsContainer from '../PersonalDashboards/ProfessionalPostsContainer'

function UserDashboard({userData}) {
        console.log(userData)
        // const [flag, setFlag] = useState(true)

        const [userInfo, setUserInfo] = useState('personalInfo')

        const [tip, setTip] = useState(false)

        const [tipsArray, settipsArray] = useState([
            'Diseño para Halo-4', 'Como usar Photoshop en Iphone', 
            'Sabías sobre esta paleta de colores?', 'Diseño para Ark-II',
            'Diseño para Tetris'
        ])

        const changeTipFlag=()=>{setTip(!tip)}
    
        // const changeState=()=>{
        //     //setFlag(!flag)
        //     setTip(false)
        //     setUserInfo('personalInfo')
        // }

        const changeUserState = (e)=>{
            setUserInfo(e.target.name)
        }

    // funcion getMiDashboardDate

    // const user ={
    //     username: 'TheRobert_22',
    //     _id:'asdafd3daw3daw3daws3',
    //     name: 'Roberto',
    //     lastName: 'Jefferson',
    //     category: 'Normal',
    //     likes: 12,
    //     dislikes: 23,
    //     timeOfSessions: 21.9,
    //     img: 'https://th.bing.com/th/id/R.4c63b7b09da20864caf8595d704910fe?rik=W8%2bOfWGGofoDhg&pid=ImgRaw&r=0',
        
    //     personalData:{
    //         username:'TheRobert_22',
    //         name:'Roberto',
    //         lastName:'Jefferson',
    //         img:'https://th.bing.com/th/id/R.4c63b7b09da20864caf8595d704910fe?rik=W8%2bOfWGGofoDhg&pid=ImgRaw&r=0',
    //         country:'Argentina',
    //         state:'Cordoba',
    //         city:'Carlos Paz',
    //         age:'25/01/1990',
    //         mail: 'RobertitoJefazo@somemail.com',
    //         password: 'tortugaCrazy55',
    //     }
    // }


    // const userPro = {
    //     username: 'SamyLock05',
    //     name: 'Samantha',
    //     lastName: 'Lockson',
    //     category: 'Professional',
    //     profession:'Gaming Art Designer',
    //     likes: 578,
    //     dislikes: 17,
    //     visibility: 789,
    //     isVerified:true,
    //     img: 'https://th.bing.com/th/id/R.a903ba87d9ebd4011c7c9c31cfe3f124?rik=AS5I7nD020qecA&pid=ImgRaw&r=0',
    //     schedule: [ {date: 'Lunes', available: true},
    //                 {date: 'Martes', available: true},
    //                 {date: 'Miercoles', available: false},
    //                 {date: 'Jueves', available: true},
    //                 {date: 'Viernes', available: false},
    //             ], /*(Arreglo de fechas disponibles y no disponibles)*/
    //     biography: 'Me gradue de Henry a mediados del año pasado, desde ese momento de dedico a viajar por el mundo siendo el doble de la Roca Jhonson mientras brindo asesorias en esta gran plataforma',
    //     professionalInfo: [{name:'Matricula :',text:'234531456', verified:true},{name:'Graduado de : ', text:'Henry con Honores', verified:false}, {name:'Cursos : ', text:'Fabricación de Mayonesa casera, React-Redux',verified:true}],
    //     personalData:{
    //         username:'SamyLock05',
    //         name:'Samantha',
    //         lastName:'Lockson',
    //         img:'https://th.bing.com/th/id/R.a903ba87d9ebd4011c7c9c31cfe3f124?rik=AS5I7nD020qecA&pid=ImgRaw&r=0',
    //         country:'Argentina',
    //         state:'Buenos Aires',
    //         city:'CABA',
    //         age:'15/07/1994',
    //         mail: 'Samy_Lock_art@somemail.com',
    //         password: 'mariobrossqueen',
    //     },
    //     professionalData:{
    //         matricula:'23-34-44-123-22-1a',
    //         titulo:'Engineer Game Desing',
    //         bankAccount: 'olisadfbn1231248484nsadfj',
    //         schedule: [ {date: 'Lunes', available: true},
    //                 {date: 'Martes', available: true},
    //                 {date: 'Miercoles', available: false},
    //                 {date: 'Jueves', available: true},
    //                 {date: 'Viernes', available: false},
    //             ]
    //     },
    // }

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
            {/* {userData.isProfessional && 
                <div className='flex flex-col items-center justify-center mt-2 mb-4'>
                    <button className=' bg-red-300 pl-2 pr-2 rounded-xl'
                            onClick={changeState} >Change Type Of User</button>
                    {flag?<span className='font-lg'>Normal</span>:<span className='font-lg'>Professional</span>}
                </div>
            } */}
            <div className='text-red-400 font-sans text-4xl h-28
                            text-center text-opacity-900 uppercase 
                            font-extrabold items-center flex justify-center
                            border-b-8 border-double border-red-300 ml-14 mr-14 mb-4 '
                        >
                {userData.isProfessional?
                <span>{`${userData.name} ${userData.lastname}`}<p className='text-gray-400 text-2xl'>{userData.category[0].name}</p></span>
                :<span>{`${userData.name} ${userData.lastname}`}</span>}
                {/* {userData.isProfessional && <span>{userData.name}<p className='text-gray-400 text-2xl'>{userData.category[0].name}</p></span>} */}
                {}
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
