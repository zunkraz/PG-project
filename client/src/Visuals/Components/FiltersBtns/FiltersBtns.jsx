import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import '../../Assets/CustomAR.css'
const FiltersBtns = () => {

const categories = [
    {name: 'Abogacia'},
    {name: 'Medicina general'},
    {name: 'Veterinaria'},
    {name: 'Psicologia'},
];
const ranges = [
    {country: 'Argentina'},
    {country: 'Colombia'},
    {country: 'Venezuela'},
    {country: 'Perú'},
    {country: 'Indiferente'},
]

const categoriesRender = categories.map(data => {
    const opt = <option value={data.name}>{data.name}</option>;
    return opt;
});
const rangesRender = ranges.map(data => {
    const opt = <option value={data.country}>{data.country}</option>;
    return opt;
});

const [data, setData] = useState({
    country: '',
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
    console.log(Object.values(data).map(e => e === ""))
    if(Object.values(data).map(e => e === "")[1] === false){
    return setInvalid(false);
    }
return setInvalid(true);
}, [data]);

const handleSubmit = e => {
    e.preventDefault();
    // Aqui van los despachos de acciones para filtrar y mandar a la ruta professionals
    // Aqui van los despachos de acciones para filtrar y mandar a la ruta professionals
    // Aqui van los despachos de acciones para filtrar y mandar a la ruta professionals
    // Aqui van los despachos de acciones para filtrar y mandar a la ruta professionals
    // Aqui van los despachos de acciones para filtrar y mandar a la ruta professionals
    setData({
        country: '',
        name: '', 
    })
    setInvalid(true)
}

    return ( 
        <div className='w-full'>
            <form 
            onSubmit={handleSubmit}
            >
        <div className=' flex justify-center flex-col space-y-2.5 text-center '>
            <h3 className="uk-card-title">Busca lo que necesitas</h3>
            <div>
                <select
                    onChange={handleChange}
                    name='name'
                    value={data.name}
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
                 {rangesRender}
                </select>
            </div>
          
            <Link to='./profesionales'>
                <input 
                    className=" btnFiltersBtns bg-red-400 p-3 text-lg"
                    type="submit" 
                    value="Buscar"
                    disabled={invalid}
                />
            </Link>
        </div>

            </form>
        
        </div>
     );
}
 
export default FiltersBtns;