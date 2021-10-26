import React from 'react'

function FooterNewSeller() {
    return (
        <div className='SellerDiv'>
            <div className='SellerLogo'>
                LOGO
            </div>
            <div className='SellerText'>
                <p>Resolvemos tus problemas de una manera eficiente y rapida, no dudes en realizar consultas en nuestra plataforma!</p>
            </div>
            <div className='SellerSubmit'>
                <input name='mail' placeholder='Introduce tu mail'/>
                <button>{'>'}</button>
            </div>
        </div>
    )
}

export default FooterNewSeller