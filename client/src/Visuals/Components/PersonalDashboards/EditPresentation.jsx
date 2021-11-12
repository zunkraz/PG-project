import React from 'react'
import PopBtns from './PopBtns'

function EditPresentation(props) {
    return (
        <div>
            <div>
                EDITAR PRESENTACION
            </div>
            <PopBtns    onSuccess={props.onSuccess}
                        onCancel={props.onCancel}
                    />
        </div>
    )
}

export default EditPresentation
