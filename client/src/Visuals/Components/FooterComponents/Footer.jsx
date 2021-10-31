import React from 'react'
import FooterEnd from './FooterEnd'
import FooterList from './FooterList'
import '../../Assets/CustomGS.css'
import FooterNewSeller from './FooterNewSeller'
import FooterContact from './FooterContact'

function Footer() {

    const utilLink = [
        {name:'Politica de privacidad',url:'#'},
        {name:'Terminos y condiciones',url:'#'},
        {name:'Reclamos',url:'#'},
        {name:'Soporte',url:'#'},
        {name:'Servicio Tecnico',url:'#'},
        {name:'Derechos de propiedad intelectual',url:'#'},
    ]

    const info = [
        {name:'Nosotros',url:'#'},
        {name:'Noticias',url:'#'},
        {name:'Colecciones',url:'#'},
        {name:'Servicios',url:'#'},
        {name:'Inversiones',url:'#'},
        {name:'Proyectos',url:'#'}
    ]


    return (
        <div className='wrapper FooterPrimaryDiv'>
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
