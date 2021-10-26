import React from 'react'
import './FooterListSpan.css'

function FooterListSpan({index, text, url}) {
    return (
        <div className='FooterListSpanDiv'>
            <a href={url}>
            <span key={index}>{text}</span>
            </a>
        </div>
    )
}

export default FooterListSpan
