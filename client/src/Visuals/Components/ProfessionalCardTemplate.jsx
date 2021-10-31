import React from 'react'

function ProfessionalCardTemplate({name, lastName, category, img}) {

    console.log('from template =>> '+{name, lastName, category, img})
    return (
        <div className='flex flex-col text-center m-2 cursor-pointer w-1/4 h-56 bg-gray-300 justify-around rounded-md p-1'>
            <div className='p-1'>
                <img className='h-full w-full rounded-lg' src={img} alt='Professionals Img'/>
            </div>
            <div className='bg-gray-300 text-red-400 font-bold font-lg'>
                <span className='mr-1'>{name}</span>
                <span className='ml-1'>{lastName}</span>
            </div>
            <div className='bg-red-400 text-white uppercase'>
                <span>{category}</span>
            </div>
        </div>
    )
}

export default ProfessionalCardTemplate
