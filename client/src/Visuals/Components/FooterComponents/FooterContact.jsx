import React from 'react'
import { Link } from 'react-router-dom';

function FooterContact() {

    const contactLinks = [
        {name: 'Instagram', url:'#', class: 'instagram'},
        {name: 'Twitter', url:'#', class: 'twitter'},
        {name: 'Facebook', url:'#', class: 'facebook'},
        {name: 'Whatsapp', url:'#', class: 'whatsapp'},
        {name: 'Youtube', url:'#', class: 'youtube'},
    ]

    return (
        <div className='ContactDiv'>
            <div className='ContactTitle'>
                <span>Contactanos!</span>
            </div>
            <div className='ContactLink'>
                {contactLinks?.map((elem,index)=>{
                    return <Link key={index} to={elem.url} uk-icon={`icon:${elem.class}`}><span>{elem.name}</span></Link>
                })}
            </div>
        </div>
    )
}

export default FooterContact