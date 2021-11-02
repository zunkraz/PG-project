import React from 'react'
import FiltersBtns from '../FiltersBtns/FiltersBtns';
const Slogan = () => {
    return ( 
        // uk-padding-small uk-column-1-2 uk-column-divider uk-margin-top uk-margin-bottom
        <div className="wrapper bg-component-slogan">
            <div className="wrapper bg-color-dark-a80">
                <section>
                    <div className='col-2-3@xl col-2-3@lg col-2-3@md padd-xl'>
                        <div className="element-xl-lg-md">
                            <div className='font-3x font-main font-color-light'>
                                Soluciones al instante
                            </div>
                            <div className='mrg-xl-t font-xl font-main font-color-light'>
                                Consulta a profesionales desde la comodidad de tu hogar, sin retrasos por el tráfico, ni por cambios climáticos, elige, seleciona una cita y soluciona el problema que no te deja dormir
                            </div>
                        </div>
                        <div className="element-sm-xs">
                            <div className='font-2x font-main font-color-light'>
                                Lorem ipsum dolor sit amet adipiscing elit...
                            </div>
                            <div className='mrg-xl-t font-main font-color-light'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            </div>
                        </div>                        
                    </div>
                    <div className='col-1-3@xl col-1-3@lg col-1-3@md padd-xl'>
                        <FiltersBtns/>
                    </div>
                </section>
            </div>
        </div>
     );
}
 
export default Slogan;