import React from 'react'
import BigButton from '../BigButton'

function LoginInputComponent({handleChange, text, name, type, placeholder, classInput, classLabel, classDiv, classPass, classBtnPass, handleShowPass, textPassBtn, inputField, setInputField}) {
    

    const handleInputChange=(e)=>{
        setInputField && setInputField(e.target.value)
        handleChange(e)
    }

    return (
        <div className={classDiv}>
            <div className={classPass}>
                <label className={classLabel}>{text}</label>
                <BigButton onClickFunction={handleShowPass} text={textPassBtn} cssClass={classBtnPass}/>
            </div>
            <input  type={type}
                    autocomplete="off" 
                    name={name}
                    placeholder={placeholder}
                    className={classInput} 
                    onChange={handleInputChange}
                    value={inputField}
                />
        </div>
    )
}

export default LoginInputComponent
