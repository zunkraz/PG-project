import React from 'react'

function ProfessionalCardTemplate({name, lastName, category, img}) {

    console.log('from template =>> '+{name, lastName, category, img})
    return (
        <div className='ProfessionalSimilarCard'>
            <div>
                <img src={img} alt='Professionals Img'/>
            </div>
            <div>
                <span>{name}</span>
                <span>{lastName}</span>
            </div>
            <div>
                <span>{category}</span>
            </div>
        </div>
    )
}

export default ProfessionalCardTemplate
