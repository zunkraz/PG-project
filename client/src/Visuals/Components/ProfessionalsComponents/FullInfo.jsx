/* eslint-disable react-hooks/exhaustive-deps */
import React/* , { useEffect } */ from 'react'

export default function FullInfo({profData}) {
    
    const {biography, birthdate, title, institute, appointments, city, state, likes} = profData;
    const biographyGeneric = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime minima nisi illum ipsam eveniet eaque suscipit neque officia molestias a amet incidunt consequatur nobis cupiditate, non corporis fugiat in placeat?"

    return (
        <div>
            <div className='padd-md-b font-main text-bold text-center- font-xl border-bottom-color-main'>
                Información completa de {profData.name}
            </div>

            <div className='full-info-container'>
                <span className='full-info-span'>¿Por qué elegirme?</span>
                <div className='full-info-up'>
                    {
                        biography
                        ? biography
                        : biographyGeneric
                    }
                </div>
                
                {/* <span className='full-info-span'>Más datos sobre mí</span> */}
                <div className='full-info-down'>
                    <div className='little-box'>
                        <span>Titulo profesional</span>
                        <h3>{
                            title
                            ? title
                            : "N/A"
                            }
                        </h3>
                    </div>
                    <div className='little-box'>
                        <span>Institución</span>
                        <h3>{
                            institute
                            ? institute
                            : "N/A"
                            }
                        </h3>
                    </div>
                    <div className='little-box'>
                        <span>Ubicación</span>
                        <h3>{`${city} (${state})`}</h3>
                    </div>
                    <div className='little-box'>
                        <span>Miembro desde</span>
                        <h3>{birthdate
                            ? birthdate.slice(0,10)
                            : "01/01/2000"
                        }</h3>
                    </div>
                </div>
            
            </div>

            
                {/* <div className="padd-md-b font-main text-center- font-xl">
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
                </div> */}
        </div>
    )
};