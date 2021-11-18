import React from 'react'
import { useSelector } from 'react-redux'

function PersonalTaskComponent({isProfessional}) {

    const appointments = useSelector(state => state.sessionReducer.appointments)


    console.log(appointments)


    return ( 
        <div className="padd-lg">
            <div className='padd-md-b font-main text-bold text-center- font-xl border-bottom-color-main'>
                Agenda
            </div>
            {appointments && appointments?.map((elem,index)=>{
                return  <div className='bg-color-extra4-a20 mrg-lg-t padd-lg border-color-dark-a20 border-radius-sm' key={index}>
                            {elem.dates && elem.dates?.map((intern)=>{
                                return <p key={index}>{intern.datefull.slice(0,-11)}</p>
                            })}
                            {isProfessional?<p>{`Cita con ${elem.customerId.name} ${elem.customerId.lastname}`}</p>:elem.description}
                            {elem.dates && elem.dates?.map(intern=>{
                                return <p key={index} className='flex'>{`Hora: ${intern.datefull.slice(-5)}`}</p>
                            })}
                            {console.log(elem.dates)}
                            <div>
                                ACA VA EL JITSI PRRO
                            </div>     
                        </div>
            })}
        </div>
    )
}

export default PersonalTaskComponent
