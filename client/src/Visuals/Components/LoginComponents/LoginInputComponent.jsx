import React from 'react'
import BigButton from '../BigButton'

function LoginInputComponent({handleChange, text, name, type, placeholder, classInput, classLabel, classDiv, classPass, classBtnPass, handleShowPass, textPassBtn}) {
    return (
        <div className={classDiv}>
            <div className={classPass}>
                <label className={classLabel}>{text}</label>
                <BigButton onClickFunction={handleShowPass} text={textPassBtn} cssClass={classBtnPass}/>
            </div>
            <input  type={type} 
                    name={name}
                    placeholder={placeholder}
                    className={classInput} 
                    onChange={handleChange}
                />
        </div>
    )
}

export default LoginInputComponent
