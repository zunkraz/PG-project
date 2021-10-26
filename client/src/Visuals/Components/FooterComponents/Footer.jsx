import React from 'react'
import FooterEnd from './FooterEnd'
import FooterList from './FooterList'

function Footer() {

    const categories = [
        {name:'Psicologos',url:'https://www.google.com.ar/'},
        {name:'Contadores',url:'https://www.google.com.ar/'},
        {name:'Programación',url:'https://www.google.com.ar/'},
        {name:'Marketing Digital',url:'https://www.google.com.ar/'},
        {name:'Artistas Graficos',url:'https://www.google.com.ar/'},
        {name:'Fotografía',url:'https://www.google.com.ar/'},
        {name:'Mundo Gamer',url:'https://www.google.com.ar/'},
        {name:'Musica & Audio',url:'https://www.google.com.ar/'},
        {name:'Video y Animación',url:'https://www.google.com.ar/'},
        {name:'Escritores y Traductores',url:'https://www.google.com.ar/'},
    ]

    const abouts = [
        {name:'Nosotros',url:'https://www.google.com.ar/'},
        {name:'Noticias',url:'https://www.google.com.ar/'},
        {name:'Terminos y condiciones',url:'https://www.google.com.ar/'},
        {name:'Politica de Privacidad',url:'https://www.google.com.ar/'},
        {name:'Derechos de propiedad intelectual',url:'https://www.google.com.ar/'},
        {name:'Inversiones',url:'https://www.google.com.ar/'},
        {name:'Proyectos',url:'https://www.google.com.ar/'}
    ]

    const supports = [
        {name:'Ayuda y soporte',url:'https://www.google.com.ar/'},
        {name:'Reseñas sobre confianza',url:'https://www.google.com.ar/'},
        {name:'Compras',url:'https://www.google.com.ar/'},
        {name:'Ventas',url:'https://www.google.com.ar/'},
        {name:'Devoluciones',url:'https://www.google.com.ar/'},
        {name:'Denuncias',url:'https://www.google.com.ar/'},
        {name:'Reclamos',url:'https://www.google.com.ar/'}
    ]

    const communities = [
        {name:'Estandares y normativas',url:'https://www.google.com.ar/'},
        {name:'Eventos',url:'https://www.google.com.ar/'},
        {name:'Foro',url:'https://www.google.com.ar/'},
        {name:'Podcast',url:'https://www.google.com.ar/'},
        {name:'Afiliados',url:'https://www.google.com.ar/'},
        {name:'Invita a un amigo!',url:'https://www.google.com.ar/'},
        {name:'Vente tu servicio/producto',url:'https://www.google.com.ar/'},
        {name:'VIP',url:'https://www.google.com.ar/'}
    ]

    const moreData = [
        {name:'Negocios',url:'https://www.google.com.ar/'},
        {name:'Cuenta VIP',url:'https://www.google.com.ar/'},
        {name:'Estudios',url:'https://www.google.com.ar/'},
        {name:'Crea tu Logo!',url:'https://www.google.com.ar/'},
        {name:'Toma inspiracion!',url:'https://www.google.com.ar/'},
        {name:'Trabaja tu voz con nosotros!',url:'https://www.google.com.ar/'},
        {name:'Learn with us!',url:'https://www.google.com.ar/'},
        {name:'Sabías que puedes tener depreción?',url:'https://www.google.com.ar/'}
    ]


    return (
        <div className='FooterPrimaryDiv'>
            <div className='FooterListPrimaryDiv'>
                <FooterList Title={'Categorias'} Contain={categories}/>
                <FooterList Title={'Sobre'} Contain={abouts}/>
                <FooterList Title={'Soporte'} Contain={supports}/>
                <FooterList Title={'Comunidad'} Contain={communities}/>
                <FooterList Title={'Mas Info'} Contain={moreData}/>
            </div>
            <div>
                <FooterEnd/>
            </div>
        </div>
    )
}

export default Footer
