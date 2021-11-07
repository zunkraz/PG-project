import React from 'react'
// import { FaMarker } from "react-icons/fa";
// import BigButton from '../BigButton';
// import PopContainer from '../PopContainer';
// import EditDataComponent from './EditDataComponent';
// import ShowData from './ShowData';


export default function FullInfo({profData}) {

    return (
        <div className=''>
            <div className='padd-md-b font-main text-bold text-center- font-xl border-bottom-color-main'>
                Información detallada
            </div>
                <div className="padd-md-b font-main text-center- font-xl border-bottom-color-main">
                    Sobre mí
                </div>            
                <div className='user-dashboard-info-tabs-content border-color-dark-a20 padd-lg'>
                    {profData.biography}
                </div>
                <div className="padd-md-b font-main text-center- font-xl border-bottom-color-main">
                    Datos profesionales
                </div>            
                <div className='user-dashboard-info-tabs-content border-color-dark-a20 padd-lg'>
                    <div>
                        Consultas atendidas: {profData.appointments.length}
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