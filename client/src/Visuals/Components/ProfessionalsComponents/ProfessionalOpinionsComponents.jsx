import React from 'react'

function ProfessionalOpinionsComponents({opinions}) {
    return (
        <div>
            <div>
                <span>Opiniones</span>
            </div>
            <div>
                {opinions?.map((elem,index)=>{
                    return <div key={index}><span>{elem}</span></div>
                })}
            </div>
        </div>
    )
}

export default ProfessionalOpinionsComponents
