import React from 'react'
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

function FooterContact() {

    const contactLinks = [
        {name: 'Instagram', url:'#', class: 'instagram', icon: <FaIcons.FaInstagram class="display-inline"/>},
        {name: 'Twitter', url:'#', class: 'twitter', icon: <FaIcons.FaTwitter class="display-inline"/>},
        {name: 'Facebook', url:'#', class: 'facebook', icon: <FaIcons.FaFacebookF class="display-inline"/>},
        {name: 'Whatsapp', url:'#', class: 'whatsapp', icon: <FaIcons.FaWhatsapp class="display-inline"/>},
        {name: 'Youtube', url:'#', class: 'youtube', icon: <FaIcons.FaYoutube class="display-inline"/>},
    ]

    return (
        <React.Fragment>
            <div className="font-color-light font-main font-xl">
                <span className="padd-md-b padd-lg-r font-bold border-bottom-color-main">Contactanos!</span>
            </div>
            <ul classname="horizontal-list mrg-lg-t">
                {
                    contactLinks?.map((elem, index) => {
                        // const Icon = (Icon) => <Icon/>;
                        return  <li key={index} className="mrg-md-t">
                                    <Link to={elem.url} className="action action-footer-link">
                                      {elem.icon}
                                      <span> {elem.name}</span>
                                    </Link>
                                </li>
                    })
                }
            </ul>
        </React.Fragment>
    )
}

export default FooterContact