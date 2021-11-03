import React, {useState} from 'react';
import FiltersFields from './FilterFields';
import NameSearch from './NameSearch';
import {useSelector, useDispatch} from 'react-redux'
import { filterProfessional, getAllProfs } from '../../../Controllers/actions/professionalsActions';

const SearchBarPro = () => {
const dispatch = useDispatch();
const professionals = useSelector(state => state.professionalReducer.professionals)

const [data, setData] = useState({
        name: '',
        profesion: '',
        country: '',
        min: '',
        max: '',
        likes: '',
});

    const [optionView, setOptionView] = useState({
        optionViewBtnOne:true,
        optionViewBtnTwo:false,
    })
const {optionViewBtnOne,optionViewBtnTwo} = optionView;

const [error, setError] = useState(false);
const [errorSubmit,setErrorSubmit] = useState(false);
    // FUNCIONES START FUNCIONES START FUNCIONES START FUNCIONES START

const handleChange = e => {
    setData({
        ...data,
        [e.target.name]: e.target.value
    })
}


const handleCliks = () => {
    setOptionView({
        ...optionView,
        optionViewBtnOne: !optionViewBtnOne,
        optionViewBtnTwo: !optionViewBtnTwo,
    })
}
const handleSubmit = e => {
    e.preventDefault()
   
    if(error === true || !Object.values(data).map(e => e === '').includes(false)){
        return setErrorSubmit(true)
    }else{
        // Aqui despacho la acción
        setErrorSubmit(false);
        dispatch(filterProfessional(data,professionals))
        setData({
            name: '',
            profesion: '',
            country: '',
            min: '',
            max: '',
            likes: '',
        })
       
    }
}

// FUNCIONES END FUNCIONES END FUNCIONES END FUNCIONES END FUNCIONES END
    return ( 
    <aside>
        <form
        onSubmit={handleSubmit}
        >
       
        <div>
            <button 
            className="uk-button uk-button-danger"
            onClick={handleCliks}
            disabled={optionViewBtnOne}
            >Buscar por Nombre</button>
            <button 
            className="uk-button uk-button-danger"
            onClick={handleCliks}
            disabled={optionViewBtnTwo}

            >Búsqueda Personalizada</button>
        </div>
        {optionViewBtnOne &&
            <NameSearch
            data={data}
            setData={setData}
            optionView={optionView}
            handleChange={handleChange}
            />
        }
        {
        optionViewBtnTwo && 
        <FiltersFields
        data={data}
        setData={setData}
        optionView={optionView}
        error={error}
        setError={setError}
        handleChange={handleChange}
        />
        } 
        <button 
        type="submit" 
        value="Buscar"
        className="uk-button uk-button-danger uk-margin"
        >Buscar</button>
       
        </form>
        <button 
        type="button" 
        onClick={() => dispatch(getAllProfs())}
        className="uk-button uk-button-danger uk-margin"
        >Restablecer</button>
        {errorSubmit && <div><h3>Verifique sus campos</h3></div>}
    </aside>
     );
}
 
export default SearchBarPro;