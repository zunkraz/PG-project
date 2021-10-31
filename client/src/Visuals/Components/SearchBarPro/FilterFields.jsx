import React, {useEffect} from 'react'

const FiltersFields = ({data,handleChange,error,setError}) => {


    const categories = [
        {name: 'Abogacia'},
        {name: 'Medicina general'},
        {name: 'Veterinaria'},
        {name: 'Psicologia'},
    ];
    const countries = [
        {country: 'Argentina'},
        {country: 'Colombia'},
        {country: 'Venezuela'},
        {country: 'Perú'},
        {country: 'Indiferente'},
    ]
    const likes = [
        {range:'Iniciado'},
        {range:'Intermedio'},
        {range:'Popular'},
    ]


    const categoriesRender = categories.map((data,index) => {
        const opt = <option key={index} value={data.name}>{data.name}</option>;
        return opt;
    });
    const countriesRender = countries.map((data,index) => {
        const opt = <option key={index} value={data.country}>{data.country}</option>;
        return opt;
    });
    const likesRender = likes.map((data,index) => {
        const opt = <option key={index} value={data.range}>{data.range}</option>
        return opt
    });



useEffect(() => {
   if(Number(data.min) < 0 || Number(data.max) < 0){
     setError(true)
   }else{
       if(Number(data.min) > Number(data.max)){
        setError(true)
       }else{
           setError(false)
       }
   }
})

    return ( 
    <div className=' flex justify-center flex-col space-y-2.5 text-center '>
        
        <div>
            <select
                
                onChange={handleChange}
                name='profesion'
                value={data.profesion}
                className='inputsFiltersBtns uk-input uk-form-width-large'
            >
            <option value="">Seleccionar Profesión</option>
              {categoriesRender}
            </select>
        </div>
        <div>
            <select
                
                onChange={handleChange}
                name='country'
                value={data.country}
                className='inputsFiltersBtns uk-input uk-form-width-large' 
            >
            <option value="">Seleccionar País</option>
             {countriesRender}
            </select>  
        </div>
        <div>
            <select
                
                onChange={handleChange}
                name='likes'
                value={data.likes}
                className='inputsFiltersBtns uk-input uk-form-width-large' 
            >
            <option value="">Seleccionar Reputación</option>
             {likesRender}
            </select>  
        </div>

        <div>
        <h3>Escoge tu presupuesto</h3>
        {error && <h3>Los montos no son válidos</h3>}
          <div>
            <input
                 
                type="number" 
                placeholder='Mínimo USD'
                name='min'
                value={data.min}
                onChange={handleChange}
                className='uk-width-1-6@s uk-input'
            />
            <input 
                
                type="number" 
                placeholder='Máximo USD'
                name='max'
                value={data.max}
                onChange={handleChange}
                className='uk-width-1-6@s uk-input'
            />
          </div>
        </div>
    </div>
     );
}
 
export default FiltersFields;