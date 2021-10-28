import React, { useState } from 'react'

function ProfessionalCardInfo({biography, professionalData, schedule}) {
    
    const [proInfo, setproInfo] = useState('bio')
    
    
    const changeState = (e)=>{
        setproInfo(e.target.name)
    }
    
    
    return (
        <div>
            {proInfo}
            <div>
                <button name='bio' 
                        onClick={changeState}
                    >Biography</button>
                <button name='profile' 
                        onClick={changeState}
                    >Perfil Laboral</button>
                <button name='schedule' 
                        onClick={changeState}
                    >Agenda</button>
            </div>
            <div className={proInfo}>
                {proInfo==='bio' && <span>{biography}</span>}
                {proInfo==='profile' && <span>{professionalData}</span>}
                {proInfo==='schedule' && schedule?.map((elem, index)=>{
                    /*{date: 'Viernes', available: false}*/
                    return <span key={index}>{elem.available?elem.date:''}</span>
                })}
            </div>
        </div>
    )
}

export default ProfessionalCardInfo
