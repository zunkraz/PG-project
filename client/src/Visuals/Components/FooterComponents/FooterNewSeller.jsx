import React from "react";
import logoFooter from "../../Assets/media/logo-main-footer.svg";
import * as FaIcons from 'react-icons/fa';

function FooterNewSeller() {
    return (
        <div className="">
            <div className="">
                <img src={logoFooter} alt=''/>
            </div>
            <div className="padd-lg-tb font-color-light">
                <p>Resolvemos tus problemas de una manera eficiente y rapida, no dudes en realizar consultas en nuestra plataforma!</p>
            </div>
            <div className='SellerSubmit* flex-center' data-uk-height-match>
                <input name="mail" className="padd-md border-color-light border-4x" placeholder='Introduce tu mail'/>
                <button className="bg-color-main icon-xl flex-center">
                    <FaIcons.FaChevronRight className="font-xl font-color-light"/>
                </button>
            </div>
        </div>
    )
}

export default FooterNewSeller