import React from 'react'
import ProfessionalCardTemplate from '../ProfessionalCardTemplate'

function SimilarProfessionals({data}) {
    // data llega como objeto y genero de manera temporar un array para renderizarlo con un map
    
    // console.log(Object.keys(data))
    // console.log(typeof data)
    console.log(data)
    
    return (
        <div>
            <h5>Profesionales Similares</h5>
            <div>
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
