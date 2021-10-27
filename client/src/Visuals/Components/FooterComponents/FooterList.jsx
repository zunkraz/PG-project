import React from 'react'
import { Link } from 'react-router-dom';

function FooterList({Title, Contain}) {
    return (
        <div className='FooterListDiv'>
            <div className='FooterListTitle'>
                <span>{Title}</span>
            </div>
            <div className='FooterListTex'>
                {Contain?.map((elem, index)=>{
                    return <Link key={index} to={elem.url}><span>{elem.name}</span></Link>
                })}
            </div>
        </div>
    )
}

export default FooterList