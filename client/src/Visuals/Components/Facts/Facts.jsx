import React from 'react'
import { Link } from 'react-router-dom';
/*comment*/

const Facts = () => {
    return (
        <div className="wrapper bg-component-facts">
            <div class="wrapper padd-xl bg-color-dark-a80">            
                <div className="wrapper">
                    <section>
                        <div className="text-bold font-main font-2x font-color-main">
                            Nuestros numeros
                        </div>
                        <div className="mrg-lg-t font-color-light">
                            Maecenas facilisis diam orci, quis iaculis risus suscipit eu. Phasellus fringilla iaculis lacus at dapibus. Mauris et augue a nibh elementum suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut elementum urna vitae odio faucibus, a interdum lacus dictum. Integer convallis accumsan ornare. Curabitur convallis nibh non imperdiet volutpat.
                        </div>
                    </section>
                </div>
                <div className="wrapper mrg-xl-t">
                    <section>
                        <div className="col-1-4@xl padd-lg">
                            <div className="ratio-3-2 border-color-light font-color-light position-relative">
                                <div className="position-center width-100 text-bold text-center font-main">
                                    <div className="font-xl">Sesiones Atendidas</div>
                                    <div className="font-3x">768</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1-4@xl padd-lg">
                            <div className="ratio-3-2 border-color-light font-color-light position-relative">
                                <div className="position-center width-100 text-bold text-center font-main">
                                    <div className="font-xl">Profesionales Registrados</div>
                                    <div className="font-3x">312</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1-4@xl padd-lg">
                            <div className="ratio-3-2 border-color-light font-color-light position-relative">
                                <div className="position-center width-100 text-bold text-center font-main">
                                    <div className="font-xl">Horas de Asesorias</div>
                                    <div className="font-3x">4.522</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1-4@xl padd-lg">
                            <div className="ratio-3-2 border-color-light font-color-light position-relative">
                                <div className="position-center width-100 text-bold text-center font-main">
                                    <div className="font-xl">Clientes Satisfechos</div>
                                    <div className="font-3x">694</div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Facts;