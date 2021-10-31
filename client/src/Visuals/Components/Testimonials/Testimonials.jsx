import React from 'react';
import Testimony from './Testimony';

const Testimonials = () => {
    const data = [
        {
            user: "Juan Pablo Lozano",
            testimony: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum enim arcu, condimentum in sollicitudin at, pharetra at mauris. Nam bibendum ex sed lorem condimentum luctus."
        },
        {
            user: "Adriana Cejas",
            testimony: "Quisque sed nulla et sapien suscipit porttitor. Mauris faucibus efficitur consequat. Sed fermentum mollis nisl, id malesuada ipsum auctor et."
        },
        {
            user: "Nohelia Rincon",
            testimony: "Aliquam erat volutpat. Vestibulum at eros sit amet neque euismod fringilla. Curabitur orci justo, elementum ut malesuada non, consectetur a tellus."
        },
        {
            user: "Agustin Ecker",
            testimony: "Sed nibh elit, blandit non venenatis vitae, gravida sed mauris. Nunc suscipit laoreet lobortis. In eget placerat elit. In id scelerisque magna. Donec in posuere nisi."
        },
    ]
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
                            data && data.map(function (testimonyData, index) {
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