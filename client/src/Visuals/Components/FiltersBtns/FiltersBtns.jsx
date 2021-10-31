import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import '../../Assets/CustomAR.css'
import {useSelector} from 'react-redux'

const FiltersBtns = () => {
    
const categories = useSelector(state => state.constantInfoReducer.categories);

const countries = [
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
const countriesRender = countries.map(data => {
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
        <form onSubmit={handleSubmit} >
            <div className="width-100 text-bold text-center font-color-main font-main">
                <span class="element-xl-lg-md font-2x">Consultas profesionales a un click!</span>
                <span class="element-sm-xs font-xl">Consultas profesionales a un click!</span>
            </div>
            <div>
                <label class="wrapper padd-md-tb font-xl font-color-light font-main">
                    Profesionales
                </label>
                <select
                    onChange={handleChange}
                    name='name'
                    value={data.name}
                    className='inputsFiltersBtns* uk-select width-100 bg-color-transparent border-color-light pg-custom'
                >
                    <option value="">Seleccionar Profesión</option>
                    {categoriesRender}
                </select>
            </div>                
            <div>
                <label class="wrapper mrg-md-t padd-md-tb font-xl font-color-light font-main">
                    Países
                </label>
                <select
                    onChange={handleChange}
                    name='country'
                    value={data.country}
                    className='inputsFiltersBtns* uk-select width-100 bg-color-transparent border-color-light pg-custom' 
                >
                    <option value="">Seleccionar País</option>
                    {countriesRender}
                </select>
            </div>    
            <div>  
                <Link to='./profesionales'>
                    {/*
                    <input 
                        className=" btnFiltersBtns mrg-lg-t padd-md-tb font-main font-xl text-bold action action-slogan"
                        type="submit" 
                        value="Buscar"
                        disabled={invalid}
                    />
                    */}
                    <button 
                        className="btnFiltersBtns* width-100 mrg-xl-t padd-md-tb font-main font-xl action action-slogan"
                        type="submit" 
                        disabled={invalid}
                    >
                        Buscar  
                    </button>             
                </Link>
            </div>  
        </form>
    );
}
 
export default FiltersBtns;