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
            <input 
            className="uk-button uk-button-danger"
            value="Buscar por Nombre"
            onClick={handleCliks}
            disabled={optionViewBtnOne}
            />
            <input 
            className="uk-button uk-button-danger"
            value="Búsqueda Personalizada"
            onClick={handleCliks}
            disabled={optionViewBtnTwo}

            />
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
        <input 
        type="submit" 
        value="Buscar"
        className="uk-button uk-button-danger uk-margin"
        />
       
        </form>
        <input 
        type="button" 
        value="Restablecer"
        onClick={() => dispatch(getAllProfs())}
        className="uk-button uk-button-danger uk-margin"
        />
        {errorSubmit && <div><h3>Verifique sus campos</h3></div>}
    </aside>
     );
}
 
export default SearchBarPro;