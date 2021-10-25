import React from 'react'
import FooterListSpan from '../FooterListSpan/FooterListSpan'
import './FooterList.css'


function FooterList({Title, Contain}) {
    return (
        <div className='FooterListDiv'>
            <div className='TitleFooterList'>
                <h4>{Title}</h4>
            </div>
            <div className='FooterListTex'>
                {Contain?.map((elem, index)=>{
                    return <FooterListSpan index={index} text={elem.name} url={elem.url}/>
                })}
            </div>
        </div>
    )
}

export default FooterList