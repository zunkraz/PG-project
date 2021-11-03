import React from 'react'
import { Link } from 'react-router-dom';

function FooterList({Title, Contain}) {
    return (
        <React.Fragment>
            <div className="text-bold font-color-light font-main font-xl">
                <span className="padd-md-b padd-lg-r border-bottom-color-main">{Title}</span>
            </div>
            <ul className="horizontal-list mrg-lg-t">
                {
                    Contain?.map((elem, index)=>{
                        return  <li key={index} className="mrg-md-t">
                                    <Link to={elem.url} className="action action-footer-link">
                                        {elem.name}
                                    </Link>
                                </li>
                    })
                }
            </ul>                
        </React.Fragment>
    )
}

export default FooterList