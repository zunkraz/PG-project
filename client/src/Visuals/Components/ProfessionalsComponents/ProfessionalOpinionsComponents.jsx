import React from 'react'

function ProfessionalOpinionsComponents({opinions}) {
    return (
        <div class= 'm-5'>
            <div class='bg-yellow-100 text-center mb-5 font-xl font-semibold'>
                <span class='text-gray-500'>Opiniones</span>
            </div>
            <div class='bg-green-200 p-2 h-full max-h max-w-screen-md'>
                {opinions?.map((elem,index)=>{
                    return <div class='bg-yellow-100 mb-8' 
                                key={index}><span>{elem}</span></div>
                })}
            </div>
        </div>
    )
}

export default ProfessionalOpinionsComponents
