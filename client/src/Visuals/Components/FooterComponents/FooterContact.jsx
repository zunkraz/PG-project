import React from 'react'

function FooterContact() {
    return (
        <div className='ContactDiv'>
            <div className='ContactTitle'>
                <span>Contactanos!</span>
            </div>
            <div className='ContactLink'>
                <a href="#" uk-icon="icon: instagram"> <span>Instagram</span> </a>
                <a href="#" uk-icon="icon: twitter"> <span>Twitter</span> </a>
                <a href="#" uk-icon="icon: facebook"> <span>Facebook</span> </a>
                <a href="#" uk-icon="icon: whatsapp"> <span>Whatsapp</span> </a>
                <a href="#" uk-icon="icon: youtube"> <span>Youtube</span> </a>
            </div>
        </div>
    )
}

export default FooterContact