import React, {useState, useEffect} from 'react'
import '../../Assets/CustomAR.css'
const FiltersBtns = () => {

const categories = [
    {name: 'Abogacia'},
    {name: 'Medicina general'},
    {name: 'Veterinaria'},
    {name: 'Psicologia'},
];
const ranges = [
    {mount: '5 USD a 15 UDS'},
    {mount: '16 USD a 35 UDS'},
    {mount: '36 USD a 50 UDS'},
    {mount: 'Mas de 50 UDS'},
]

const categoriesRender = categories.map(data => {
    const opt = <option value={data.name}>{data.name}</option>;
    return opt;
});
const rangesRender = ranges.map(data => {
    const opt = <option value={data.mount}>{data.mount}</option>;
    return opt;
});

const [data, setData] = useState({
    mount: '',
    name: '',
});
const [invalid, setInvalid] = useState(true)

const handleChange = e => {
    setData({
        ...data,
        [e.target.name]: e.target.value
    })
}
useEffect(() => {
    if(Object.values(data).map(e => e === "").includes(false)){
    return setInvalid(false);
    }
return setInvalid(true);
}, [data]);

const handleSubmit = e => {
    e.preventDefault();
    alert( `Buscas ${data.name} por precios de: ${data.mount}`)
    // Aqui van los despachos de acciones para filtrar y mandar a la ruta professionals
}

    return ( 
        <div className='mainFiltersBtns'>
            <form 
            onSubmit={handleSubmit}
            >
            <h3 className="uk-card-title ">Busca lo que necesitas</h3>
            <div>
                <select
                    onChange={handleChange}
                    name='mount'
                    className='inputsFiltersBtns'
                    
                >
                <option value="">Seleccionar Rango</option>
                 {rangesRender}
                </select>
            </div>

            <div>
                <select
                    onChange={handleChange}
                    name='name'
                    className='inputsFiltersBtns'
                >
                <option value="">Seleccionar Categoría</option>
                  {categoriesRender}
                </select>
            </div>
            <button 
                type='submit'
                className='btnFiltersBtns'
                disabled={invalid}
                >Buscar</button>
            </form>
        
        </div>
     );
}
 
export default FiltersBtns;