import React from 'react'
import './FooterEndBtn.css'

function FooterEndBtn({name, url, src, alt}) {
    return (
        <div className='FooterEndBtnDiv'>
            <a href={url}>
                <img className='BtnImg' src={src} alt={alt}/>
            </a>
            <span>{name}</span>
        </div>
    )
}

export default FooterEndBtn