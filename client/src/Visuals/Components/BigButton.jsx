import React from 'react'

function BigButton({onClickFunction, text, cssClass, disactive, cssDisactive, textLog, textNoLog}) {
    return (
        <div>
            <button disabled={disactive}
                    className={disactive?cssDisactive:cssClass}
                    onClick={onClickFunction}
            ><span className={disactive?textNoLog:textLog}>{text}</span></button>
        </div>
    )
}

export default BigButton
