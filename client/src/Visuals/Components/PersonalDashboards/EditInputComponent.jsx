import React from 'react'

function EditInputComponent(props) {
    return (
        <div className={props.divClass}>
            <label  htmlFor="name"
                    className={props.labelClass}
                >{props.label}</label>
            <input  id='name'
                    type="text" 
                    className={props.inputClass}
                />
        </div>
    )
}

export default EditInputComponent
