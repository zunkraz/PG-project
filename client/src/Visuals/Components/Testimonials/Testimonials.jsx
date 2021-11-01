import React, {useState,useEffect} from 'react';
import Testimony from './Testimony';
import {getReviews} from '../../../ApiReq/constantInfo'

const Testimonials = () => {
    const [reviews,setReviews] = useState([])

    useEffect(()=>{
        if(!reviews.length){
            getReviews().then(data=>setReviews(data))
        }
    })

    return (
        <div className="wrapper bg-component-testimonials">
            <div className="wrapper bg-color-dark-a60 padd-xl">
                <div>
                    <section>
                        <div className="text-bold font-color-light font-main font-2x">
                            <span className="padd-md-b padd-lg-r border-bottom-color-main">Lo que dicen nuestros clientes</span>
                        </div>
                        <div className="mrg-lg-t font-color-light">
                            Maecenas facilisis diam orci, quis iaculis risus suscipit eu. Phasellus fringilla iaculis lacus at dapibus. Mauris et augue a nibh elementum suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut elementum urna vitae odio faucibus, a interdum lacus dictum. Integer convallis accumsan ornare. Curabitur convallis nibh non imperdiet volutpat.
                        </div>
                    </section>
                </div>
                <div data-uk-slider className="wrapper padd-xl-tb">
                    <ul class="uk-slider-items">
                        {
                            reviews.length && reviews.map(function (testimonyData, index) {
                                return <Testimony key={index} data={testimonyData} />
                            })
                        } 
                    </ul>
                    <div class="wrapper flex-center">
                        <ul class="uk-slider-nav uk-dotnav"></ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;