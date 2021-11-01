import React, {useState, useEffect} from 'react';
import FeaturedProfessional from './FeaturedProfessional';
import {getProfessionals} from '../../../ApiReq/professionals'

export function FeaturedProfessionals() {

    let [professionals,setProfessionals] = useState([])
    
    useEffect(()=>{
        if(!professionals.length){
            getProfessionals('true')
            .then(data => setProfessionals(data))
        }
    })

    return (
        <div>
            <div className="wrapper padd-xl bg-color-dark-a20">
                <section>
                    <div className="text-bold font-main font-2x">
                        Profesionales Destacados
                    </div>
                    <div className="mrg-lg-t font-lg">
                        Los profesionales con mejor de reputación merecen ser reconocidos, agéndate con ellos a solo un click!
                    </div>
                </section>
            </div>
            <div className="wrapper padd-xl-tb bg-color-dark-a40">
                <section>
                    {
                        professionals && professionals.map(function (professionalData, index) {
                            return <FeaturedProfessional key={index} data={professionalData} />
                        })
                    }             
                </section>
            </div>
        </div>
    )
}
export default FeaturedProfessionals;