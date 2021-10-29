import React from 'react'

function ProfessionalCardTemplate({name, lastName, category, img}) {

    console.log('from template =>> '+{name, lastName, category, img})
    return (
        <div class='flex flex-col text-center m-2 cursor-pointer w-1/4 h-56 bg-gray-300 justify-around rounded-md p-1'>
            <div class='p-1'>
                <img class='h-full w-full rounded-lg' src={img} alt='Professionals Img'/>
            </div>
            <div class='bg-gray-300 text-red-400 font-bold font-lg'>
                <span class='mr-1'>{name}</span>
                <span class='ml-1'>{lastName}</span>
            </div>
            <div class='bg-red-400 text-white uppercase'>
                <span>{category}</span>
            </div>
        </div>
    )
}

export default ProfessionalCardTemplate
