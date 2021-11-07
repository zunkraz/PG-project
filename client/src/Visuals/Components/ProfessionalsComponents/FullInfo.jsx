
import React, { useState } from 'react'
// import { FaMarker } from "react-icons/fa";
// import BigButton from '../BigButton';
// import PopContainer from '../PopContainer';
// import EditDataComponent from './EditDataComponent';
// import ShowData from './ShowData';


export default function FullInfo({profData}) {
    
    console.log(profData)

    return (
        <div className=''>
            <div className='padd-md-b font-main text-bold text-center- font-xl border-bottom-color-main'>
                Información detallada
            </div>
                <div className="mrg-lg-t">
                    Biografía
                </div>            
                <div className='user-dashboard-info-tabs-content border-color-dark-a20 padd-lg'>
                    {profData.biography}
                </div>
                <div className="mrg-lg-t">
                    Datos profesionales
                </div>            
                <div className='user-dashboard-info-tabs-content border-color-dark-a20 padd-lg'>
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
                        Categoría: {profData.category.name}
                    </div>
                    <div>
                        Categoría: {profData.category.name}
                    </div>
                    <div>
                        Categoría: {profData.category.name}
                    </div>
                </div>
                <button className='btn-prof-info'><span>Ver video de presentacion</span></button>
        </div>
    )
}


