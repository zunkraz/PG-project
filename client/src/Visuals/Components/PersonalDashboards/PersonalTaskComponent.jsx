import React from 'react'
//{/*<div className= 'm-5 w-64'>*/}
//<div className='border-b-8 border-double border-red-300 mb-5 text-center pb-5 font-xl font-semibold'>
function PersonalTaskComponent({data}) {
    return ( 
        <div className="padd-lg">
            <div className='padd-md-b font-main text-bold text-center- font-xl border-bottom-color-main'>
                Agenda
            </div>
            {data?.map((elem,index)=>{
                return  <div className='bg-color-extra4-a20 mrg-lg-t padd-lg border-color-dark-a20 border-radius-sm' key={index}>
                            {/* Se pueden agregar campos adicionales en <div> la tarjeta se desplaza hacia abajo ej: fecha */}
                            <div>6 de Noviembre de 2021</div>
                            <div>{elem}</div>
                            <div className="mrg-lg-t padd-sm-tb font-sm border-radius-sm action action-user-dashboard-cancel">
                                Cancelar Cita
                            </div>     
                        </div>
            })}
        </div>
    )
}

export default PersonalTaskComponent
