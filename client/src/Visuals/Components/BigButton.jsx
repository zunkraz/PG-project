import React from 'react'

function BigButton({onClickFunction, text, cssClass}) {
    return (
        <div>
            <button className={cssClass} onClick={onClickFunction}>{text}</button>
        </div>
    )
}

export default BigButton
