import React, { useState } from 'react'
import { FcCheckmark, FcCancel } from "react-icons/fc";



function ProfessionalCardInfo({biography, professionalData, schedule}) {
    
    const [proInfo, setproInfo] = useState('bio')
    
    
    const changeState = (e)=>{
        setproInfo(e.target.name)
    }
    
    const bioclass = 'text-gray-500 font-semibold flex items-start justify-center text-xl'
    const profileclass = 'text-gray-800 font-bold text-xl flex justify-start mb-2'
    const profileP='text-gray-500 font-semibold text-lg ml-4'
    const scheduleclass = 'flex justify-start items-center text-green-600 text-2xl font-semibold mb-1' 

    return (
        <div class='flex flex-col'>
            <div class=' flex items-center justify-around border-b-8 border-double border-red-300 pt-2 pb-2'>
                <button name='bio' 
                        class='bg-gray-300 p-1 font-medium rounded-md h-10 w-24'
                        onClick={changeState}
                    >Biography</button>
                <button name='profile' 
                        class='bg-gray-300 p-1 font-medium rounded-md h-10 w-36'
                        onClick={changeState}
                    >Perfil Laboral</button>
                <button name='schedule'
                        class='bg-gray-300 p-1 font-medium rounded-md h-10 w-24'
                        onClick={changeState}
                    >Agenda</button>
            </div>
            <div className='h-72 flex flex-col p-5'>
                {proInfo==='bio' && <span class={bioclass}>{biography}</span>}
                {proInfo==='profile' && professionalData?.map((elem, index)=>{
                    return <span key={index} class={profileclass}>{elem.name}<p class={profileP}>{elem.text}</p>{elem.verified?<FcCheckmark class='font-xl'/>:''}</span>
                })}
                {proInfo==='schedule' && schedule?.map((elem, index)=>{
                    /*{date: 'Viernes', available: false}*/
                    return <span key={index} class={scheduleclass}><p>{elem.available?<FcCheckmark class='mr-4'/>:<FcCancel class='mr-4'/>}</p>{elem.date}</span>
                })}
            </div>
        </div>
    )
}

export default ProfessionalCardInfo
