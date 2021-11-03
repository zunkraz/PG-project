import React, {useState,useEffect} from 'react';
import Testimony from './Testimony';
import {getReviews} from '../../../ApiReq/constantInfo'

const Testimonials = () => {
    const [reviews,setReviews] = useState([])

    useEffect(()=>{
        getReviews().then(data=>setReviews(data))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div className="wrapper bg-component-testimonials">
            <div className="wrapper bg-color-dark-a60 padd-xl">
                <div>
                    <section>
                        <div className="text-bold font-color-light font-main font-2x">
                            <span className="padd-md-b padd-lg-r border-bottom-color-main">Lo que dicen nuestros clientes</span>
                        </div>
                        <div className="mrg-lg-t font-color-light font-lg">
                            Lo más importante para nosotros es la satisfacción de nuestros clientes, deja tu opinión y forma parte de LATAM EXPONENTIAL. 
                        </div>
                    </section>
                </div>
                <div data-uk-slider className="wrapper padd-xl-tb">
                    <ul className="uk-slider-items">
                        {
                            reviews.length && reviews.map(function (testimonyData, index) {
                                return <Testimony key={index} data={testimonyData} />
                            })
                        } 
                    </ul>
                    <div className="wrapper flex-center">
                        <ul className="uk-slider-nav uk-dotnav"></ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;