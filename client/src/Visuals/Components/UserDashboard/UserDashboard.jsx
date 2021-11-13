import React, { useEffect, useState } from 'react'
import PersonalDashboardContainer from '../PersonalDashboards/PersonalDashboardContainer'
import PersonalInformationContainer from '../PersonalDashboards/PersonalInformationContainer'
import PersonalTaskComponent from '../PersonalDashboards/PersonalTaskComponent'
import ProfessionalPostsContainer from '../PersonalDashboards/ProfessionalPostsContainer'
// import PopContainer from '../PopContainer'
import {Link} from 'react-router-dom'
// import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { setProfessional } from '../../../Controllers/actions/userActions'
import SchedulerCont from './SchedulerContainer'



function UserDashboard({userData}) {
    
    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0)
        userData.isProfessional && dispatch(setProfessional())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const [userInfo, setUserInfo] = useState('personalInfo')
    const [scheduleFlag, setScheduleFlag] = useState(false)

    const scheFlag = ()=>{
        setScheduleFlag(!scheduleFlag)
    }

    const changeUserState = (e)=>{
        setUserInfo(e.target.name)
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
    
    // const popClass=`bg-white mt-2 h-4/5 w-4/5 flex flex-col items-center 
    //                 justify-center rounded-lg shadow-lg
    //                 ring-white ring-4 ring-offset-1 ring-offset-red-500	`
    if(!scheduleFlag){
    return (
        <React.Fragment>
            <div className="wrapper bg-professional-title">
                <div className="wrapper padd-lg bg-color-light-a80">
                    <section>
                        <div className="col-1-1@xl col-1-1@lg col-1-1@md">
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
                    <div className='col-1-1@xl col-1-1@lg col-1-1@md col-1-1@sm col-1-1@xs' data-uk-height-match=".normalize">
                        <div className='col-1-5@xl col-1-4@lg col-1-1@md col-1-1@sm col-1-1@xs padd-lg bg-t3-'>
                            <div className='padd-lg bg-color-light border-color-dark-a20 border-radius-sm box-shadow-xs normalize'>
                                {
                                    userData.isProfessional && 
                                    <PersonalDashboardContainer user={userData}/>
                                }
                                {
                                    userData.isProfessional && 
                                    <div>
                                        {/* <PopContainer   trigger={scheduleFlag}
                                                        principalDiv={popClass}
                                                        children={<SchedulerRecurrent 
                                                                    userId={userData._id}
                                                                    onCancel={scheFlag}
                                                                />}
                                            /> */}
                                        <button
                                            className="my-3 w-full h-10 mr-4 rounded-xl duration-700
                                            ring-white bg-opacity-5 ring-4 ring-offset-1 ring-offset-green-500 
                                            bg-white hover:bg-green-500"
                                            onClick={scheFlag}
                                            >
                                                <span className="text-green-500 font-medium tracking-widest 
                                                            duration-700 hover:text-white">
                                                Modificar horario
                                                </span>
                                        </button>
                                    </div>
                                }
                                <Link to='/opinion' >
                                    <button
                                        className="my-3 w-full h-10 mr-4 rounded-xl duration-700
                                            ring-white bg-opacity-5 ring-4 ring-offset-1 ring-offset-green-500 
                                            bg-white hover:bg-green-500"
                                    >
                                        <span
                                        className="text-green-500 font-medium tracking-widest 
                                                        duration-700 hover:text-white"
                                        >
                                        Deja tu opinión
                                        </span>
                                    </button>
                                </Link>
                                <Link to='/facturas' >
                                    <button
                                        className="my-3 w-full h-10 mr-4 rounded-xl duration-700
                                            ring-white bg-opacity-5 ring-4 ring-offset-1 ring-offset-green-500 
                                            bg-white hover:bg-green-500"
                                    >
                                        <span
                                        className="text-green-500 font-medium tracking-widest 
                                                        duration-700 hover:text-white"
                                        >
                                        Facturas 
                                        </span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className='col-2-5@xl col-3-4@lg col-1-1@md col-1-1@sm col-1-1@xs padd-lg'>
                            <div className='padd-lg bg-color-light border-color-dark-a20 border-radius-sm box-shadow-xs normalize'>
                                <PersonalInformationContainer
                                    userData={userData}
                                    isProf={userData.isProfessional && true }
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
                        {userData.isProfessional && 
                        <div className='col-1-5@xl col-2-4@lg col-1-1@md col-1-1@sm col-1-1@xs padd-lg bg-t6-'>
                            <div className='bg-color-light border-color-dark-a20 border-radius-sm box-shadow-xs normalize'>
                                <ProfessionalPostsContainer userId={userData._id}/>
                            </div>
                        </div>}
                    </div>
                </section>
            </div>
        </React.Fragment>
    )}
    if(scheduleFlag){
    return (
        <React.Fragment>
            <div className="wrapper bg-professional-title">
                <div className="wrapper padd-lg bg-color-light-a80">
                    <section>
                        <div className="col-1-1@xl col-1-1@lg col-1-1@md">
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
                <button onClick={scheFlag} className="my-2 w-24 border-radius-sm action action-user-dashboard-cancel">Volver a mi perfil</button>
                <SchedulerCont userId={userData._id} />
            </div>
        </React.Fragment>
    )
    }
}

export default UserDashboard
