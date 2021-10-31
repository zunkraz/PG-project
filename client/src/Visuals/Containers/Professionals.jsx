import React from 'react'
import SearchBarPro from '../Components/SearchBarPro/SearchBarPro'
import ProfesionalsCatalog from '../Components/ProfessionalCard/ProfessionalsCatalog'
import {useDispatch} from "react-redux"
import { getAllProfs } from '../../Controllers/actions/professionalsActions'



function Profesionals() {

    const dispatch= useDispatch()
    dispatch(getAllProfs())

    return (
        <div>
            
            <SearchBarPro />
            <ProfesionalsCatalog/>
        </div>
    )
}

export default Profesionals
