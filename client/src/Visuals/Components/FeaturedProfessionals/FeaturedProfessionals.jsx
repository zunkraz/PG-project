import React, {useState, useEffect} from 'react';
import FeaturedProfessional from './FeaturedProfessional';
import {getProfessionals} from '../../../ApiReq/professionals';

export function FeaturedProfessionals() {

    let [professionals,setProfessionals] = useState([]);
    
    useEffect(()=>{
       getProfessionals('true')
            .then(data => setProfessionals(data));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <div>
            <div className="wrapper padd-xl bg-color-light">
                <section>
                    <div className="text-bold font-main font-2x">
                        <span className="border-bottom-color-main padd-md-b padd-lg-r">Profesionales Destacados</span>
                    </div>
                    <div className="mrg-lg-t font-lg">
                        Los profesionales con mejor de reputación merecen ser reconocidos, agéndate con ellos a solo un click!
                    </div>
                </section>
            </div>
            <div className="wrapper padd-xl-tb bg-color-dark-a20">
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