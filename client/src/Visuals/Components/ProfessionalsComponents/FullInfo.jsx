/* eslint-disable react-hooks/exhaustive-deps */
import React/* , { useEffect } */ from 'react'

export default function FullInfo({profData}) {

    // useEffect(() => {
    //     console.log(profData)
    // },[])

    return (
        <div className=''>
            <div className='padd-md-b font-main text-bold text-center- font-xl border-bottom-color-main'>
                Información detallada
            </div>
                <div className="padd-md-b font-main text-center- font-xl">
                    Sobre mí
                </div>            
                <div className='user-dashboard-info-tabs-content border-color-dark-a20 padd-lg'>
                    {profData.biography}
                </div>
                <div className="padd-md-b font-main text-center- font-xl">
                    Datos profesionales
                </div>            
                <div className='user-dashboard-info-tabs-content border-color-dark-a20 padd-lg'>
                    <div>
                        Consultas atendidas: {profData.appointments ? profData.appointments.length : 0}
                    </div>
                    <div>
                        Categoría: {profData.category.name}
                    </div>
                    <div>
                        Degree: {profData.degree}
                    </div>
                    <div>
                        Instituto de formación: {profData.institute}
                    </div>
                    <div>
                        Licencia: {profData.professionalRegistration}
                    </div>
                    <div>
                        Estado: {profData.state}
                    </div>
                    <div>
                        Ciudad: {profData.city}
                    </div>
                </div>
        </div>
    )
};