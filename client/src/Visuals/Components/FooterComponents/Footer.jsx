import React from 'react'
import FooterEnd from './FooterEnd'
import FooterList from './FooterList'
import '../../Assets/CustomGS.css'
import FooterNewSeller from './FooterNewSeller'
import FooterContact from './FooterContact'

function Footer() {

    const utilLink = [
        {name:'Politica de privacidad',url:'#'},
        {name:'Politica de ventas',url:'/politica-ventas'},
        {name:'Terminos y condiciones',url:'/terminos-y-condiciones'},
        {name:'Reclamos',url:'#'},
        {name:'Soporte',url:'/soporte/servicios'},
        {name:'Servicio Tecnico',url:'#'},
        //{name:'Derechos de propiedad intelectual',url:'#'},
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
        <div className="wrapper bg-color-extra3 bg-component-footer border-top-color-extra4">
            <div className="padd-xl-tb wrapper">
                <section>
                    <div className='col-1-4@xl col-1-4@lg col-1-4@md padd-lg'>
                        <FooterNewSeller/>
                    </div>
                    <div className='col-1-4@xl col-1-4@lg col-1-4@md padd-lg'>
                        <FooterList Title={'Links Útiles'} Contain={utilLink}/>
                    </div>
                    <div className='col-1-4@xl col-1-4@lg col-1-4@md padd-lg'>
                        <FooterList Title={'Información'} Contain={info}/>
                    </div>
                    <div className='col-1-4@xl col-1-4@lg col-1-4@md padd-lg'>
                        <FooterContact/>
                    </div>
                </section>
            </div>
            <div className="wrapper">
                <FooterEnd/>
            </div>
        </div>
    )
}

export default Footer
