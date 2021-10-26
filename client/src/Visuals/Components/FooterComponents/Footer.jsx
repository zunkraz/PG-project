import React from 'react'
import FooterEnd from './FooterEnd'
import FooterList from './FooterList'
import '../../Assets/CustomGS.css'
import FooterNewSeller from './FooterNewSeller'
import FooterContact from './FooterContact'

function Footer() {

    const utilLink = [
        {name:'Politica de privacidad',url:'https://www.google.com.ar/'},
        {name:'Terminos y condiciones',url:'https://www.google.com.ar/'},
        {name:'Reclamos',url:'https://www.google.com.ar/'},
        {name:'Soporte',url:'https://www.google.com.ar/'},
        {name:'Servicio Tecnico',url:'https://www.google.com.ar/'},
        {name:'Derechos de propiedad intelectual',url:'https://www.google.com.ar/'},
    ]

    const info = [
        {name:'Nosotros',url:'https://www.google.com.ar/'},
        {name:'Noticias',url:'https://www.google.com.ar/'},
        {name:'Colecciones',url:'https://www.google.com.ar/'},
        {name:'Servicios',url:'https://www.google.com.ar/'},
        {name:'Inversiones',url:'https://www.google.com.ar/'},
        {name:'Proyectos',url:'https://www.google.com.ar/'}
    ]


    return (
        <div className='FooterPrimaryDiv'>
            <div className='FooterListPrimaryDiv'>
                <FooterNewSeller/>
                <FooterList Title={'Links Útiles'} Contain={utilLink}/>
                <FooterList Title={'Informacion'} Contain={info}/>
                <FooterContact/>
            </div>
            <div className='FooterEndPrimaryDiv'>
                <FooterEnd/>
            </div>
        </div>
    )
}

export default Footer
