import React, { useEffect } from 'react'
import SearchBarPro from '../Components/SearchBarPro/SearchBarPro'
import ProfesionalsCatalog from '../Components/ProfessionalCard/ProfessionalsCatalog'
import {useDispatch} from "react-redux"
import { getAllProfs } from '../../Controllers/actions/professionalsActions'
import { getAllCategories, getAllCountries } from '../../Controllers/actions/constantInfoActions'


export default function Profesionals() {
    const dispatch= useDispatch()

    useEffect(() => {

            dispatch(getAllProfs())
            dispatch(getAllCountries())
            dispatch(getAllCategories())
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <SearchBarPro />
            <ProfesionalsCatalog/>
        </div>
    )
}
