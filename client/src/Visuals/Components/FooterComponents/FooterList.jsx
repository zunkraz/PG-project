import React from 'react'


function FooterList({Title, Contain}) {
    return (
        <div className='FooterListDiv'>
            <div className='FooterListTitle'>
                <span>{Title}</span>
            </div>
            <div className='FooterListTex'>
                {Contain?.map((elem, index)=>{
                    return <a href={elem.url}>{elem.name} </a>
                })}
            </div>
        </div>
    )
}

export default FooterList