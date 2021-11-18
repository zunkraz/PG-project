import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFeeds } from '../../../Controllers/actions/userActions'
import CreateReview from '../CreateReview'
import PopContainer from '../PopContainer'

function PersonalTaskComponent({isProfessional}) {
    const dispatch = useDispatch()
    const token = useSelector(state=>state.sessionReducer.status.token)
    const appointments = useSelector(state => state.sessionReducer.appointments)

    useEffect(() => {
        appointments?.length && dispatch(getFeeds(appointments[0]?.customerId._id, appointments[0]?.professionalId._id, token))    
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [feedback, setFeedback] = useState(false)
    const feedbacks = useSelector(state => state.sessionReducer.feedbacks)
    // const [jitsiClass, setJitsiClass] = useState(false)
    // console.log(appointments)

    // const jitsiConfig = {
    //     parentNode: 'jitsi-container',
    //     onMeetingEnd: () => {
    //         alert('Meeting has ended')
    //         !jitsiClass && setJitsiClass(true)
    //     }
    // };
    
    console.log(feedbacks)

///////////////////////////////////////////////////////////////////////////////
    // PERMITIR CREAR O EDITAR DURANTE FECHAS IDENTICAS
    // ACTUALIZAR ACTIONS Y RUTAS PARA EDITAR 
    // CREAR GUIA COMPLETA SOBRE COMO HACER EL MEET
///////////////////////////////////////////////////////////////////////////////

    const appoimentSort= appointments.sort((a,b)=>Number(a.day)-Number(b.day))

    const hoy = new Date()
    const fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
    const date=fecha.split('-').reverse().join('')
    const fakeDate='20211123';
    return ( 
        <div className="padd-lg">
            <div className='padd-md-b font-main text-bold text-center- font-xl border-bottom-color-main'>
                Agenda
            </div>
            {appoimentSort && appoimentSort?.map((elem,index)=>{
                return  <div className='bg-color-extra4-a20 mrg-lg-t padd-lg border-color-dark-a20 border-radius-sm' key={index}>
                            <span className='font-bold text-lg'>{elem.dates[0].datefull.slice(0,-11)}</span>
                            {isProfessional?<p>{`Cita con ${elem.customerId.name} ${elem.customerId.lastname}`}</p>:elem.description}
                            {elem.dates && elem.dates?.map(intern=>{
                            return (
                                <div className='flex flex-col'>
                                        <div className='flex items-center justify-between h-10'>
                                            <p key={index} className='flex'><span className='mr-4'>Hora :</span>{intern.datefull.slice(-5)}</p>
                                            <a  href={`${elem.professionalId.meetingUrl?elem.professionalId.meetingUrl:'https://meet.google.com/'}`} 
                                            target="_blank"
                                            rel="noreferrer"
                                            className='text-red-500 text-bold hover:no-underline'
                                            >Conectarse</a>
                                        </div>
                                    <button className={elem.day===fakeDate?
                                    'w-full bg-white border-2 border-red-500 rounded-lg mt-2 p-1':'hidden'}
                                            onClick={()=>setFeedback(true)}
                                    >Calificar Profesional</button>
                                </div>
                            )})}
                        </div>
            })}
            {/* <div className={jitsiClass?'hidden':'h-80 w-96'} id={jitsiConfig.parentNode} /> */}
            <PopContainer   trigger={feedback}
                            children={<CreateReview
                                    onSuccess
                                    onCancel={()=>setFeedback(false)}
                            />}
                />
        </div>
    )
}

export default PersonalTaskComponent
