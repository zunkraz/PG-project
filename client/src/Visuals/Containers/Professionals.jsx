import React from 'react'
import SearchBarPro from '../Components/SearchBarPro/SearchBarPro'
import ProfesionalsCatalog from '../Components/ProfessionalCard/ProfessionalsCatalog'
import {useDispatch,useSelector} from "react-redux"
import { getAllProfs } from '../../Controllers/actions/professionalsActions'
import { getAllCountries } from '../../Controllers/actions/constantInfoActions'


function Profesionals() {
    
const professionals = useSelector(state => state.professionalReducer.professionals)
const dispatch= useDispatch()
dispatch(getAllCountries());
    if(!professionals.length){
        dispatch(getAllProfs())
    }

    return (
        <div>
            
            <SearchBarPro />
            <ProfesionalsCatalog/>
        </div>
    )
}

export default Profesionals
