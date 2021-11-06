import React from 'react'

function Loading({divClass, imgClass}) {
    return (
        <div className={divClass}>
            <img    className={imgClass}
                    src='https://cdn.discordapp.com/attachments/902284628621148220/905988293819240548/Ripple-1s-200px.gif' 
                    alt='loading img'/>
        </div>
    )
}

export default Loading
