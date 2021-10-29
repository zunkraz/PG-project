import React from 'react'

const NameSearch = ({data,handleChange,}) => {
    return ( 
        <div className=' flex justify-center flex-col space-y-2.5 text-center '>
            <div>
                <input 
                type="text"
                placeholder='Buscar Profesional por Nombre'
                name='name'
                value={data.name}
                onChange={handleChange}
                autoComplete='off'
                className="uk-input uk-form-width-large" />
            </div>
        </div>
     );
}
 
export default NameSearch;