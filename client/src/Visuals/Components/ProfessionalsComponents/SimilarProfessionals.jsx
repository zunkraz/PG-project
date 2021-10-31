import React from 'react'
import ProfessionalCardTemplate from '../ProfessionalCardTemplate'

function SimilarProfessionals({data}) {
    // data llega como objeto y genero de manera temporar un array para renderizarlo con un map
    
    // console.log(Object.keys(data))
    // console.log(typeof data)
    //console.log(data)
    
    return (
        <div className=''>
            <div className='font-semibold pt-3 pb-2 font-xl bg-gray-400 text-center'>
                <h5 className='text-white text-semibold uppercase tracking-widest'>Profesionales Similares</h5>
            </div>
            <div className='flex items-center justify-around h-72'>
                {data.map((elem,index)=>{
                    return <ProfessionalCardTemplate    key={index} 
                                                        name={elem.name}
                                                        lastName={elem.lastName}
                                                        category={elem.category}
                                                        img={elem.img}
                                />
                })}
            </div>
        </div>
    )
}

export default SimilarProfessionals
