import React from 'react'
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

function FooterContact() {

    const contactLinks = [
        {name: 'Instagram', url:'#', class: 'instagram', icon: 'FaIcons.FaFacebookF'},
        {name: 'Twitter', url:'#', class: 'twitter', icon: 'FaIcons.FaTwitter'},
        {name: 'Facebook', url:'#', class: 'facebook', icon: 'FaIcons.FaFacebookF'},
        {name: 'Whatsapp', url:'#', class: 'whatsapp', icon: 'FaIcons.FaWhatsapp'},
        {name: 'Youtube', url:'#', class: 'youtube', icon: 'FaIcons.FaYoutube'},
    ]

    return (
        <React.Fragment>
            <div className="font-color-light font-main font-xl">
                <span class="padd-md-b padd-lg-r border-bottom-color-main">Contactanos!</span>
            </div>
            <ul classname="horizontal-list mrg-lg-t">
                {
                    contactLinks?.map((elem, index) => {
                        const Icon = (Icon) => <Icon/>;
                        return  <li key={index} className="mrg-md-t">
                                    <Link to={elem.url} class="action action-footer-link">
                                        {Icon(elem.icon)}
                                        <span>{elem.name}</span>
                                    </Link>
                                </li>
                    })
                }
            </ul>
        </React.Fragment>
    )
}

export default FooterContact