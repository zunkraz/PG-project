import React from 'react'
import { Link } from 'react-router-dom';


const ProfessionOfTheWeek = () => {
    return (
        <div>
            <div className="wrapper padd-xl bg-color-main-a20">
                <section>
                    <div className="text-bold font-main font-2x">
                        Profesión de la Semana
                    </div>
                    <div className="mrg-lg-t">
                    Maecenas facilisis diam orci, quis iaculis risus suscipit eu. Phasellus fringilla iaculis lacus at dapibus. Mauris et augue a nibh elementum suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut elementum urna vitae odio faucibus, a interdum lacus dictum. Integer convallis accumsan ornare. Curabitur convallis nibh non imperdiet volutpat.
                    </div>
                </section>
            </div>
            <div className="wrapper padd-xl-tb bg-color-main flex-center">
                <div className="col-1-2@xl padd-lg">
                    <div className="padd-xl text-center text-italic font-xl border-top-color-main border-4x position-relative bg-color-light-a20 border-radius-md">                      
                        "Vivamus facilisis est iaculis neque ornare faucibus. Nulla sagittis turpis massa, eleifend sollicitudin nisl gravida id. Curabitur tortor ipsum, condimentum a sapien at, laoreet dignissim nisi."
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfessionOfTheWeek;