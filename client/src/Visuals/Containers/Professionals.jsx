import React, { useEffect } from 'react'
import SearchBarPro from '../Components/SearchBarPro/SearchBarPro'
import ProfesionalsCatalog from '../Components/ProfessionalCard/ProfessionalsCatalog'
import {useDispatch,useSelector} from "react-redux"
import { getAllProfs } from '../../Controllers/actions/professionalsActions'
import { getAllCategories, getAllCountries } from '../../Controllers/actions/constantInfoActions'


export default function Profesionals() {
    const dispatch= useDispatch()

    const professionals =
    useSelector(state => state.professionalReducer.professionals);

    const countries = 
    useSelector(state => state.constantInfoReducer.countries)

    const categories = 
    useSelector(state => state.constantInfoReducer.categories)

    useEffect(() => {
        if(!professionals.length || !countries.length || !categories.length) {
            dispatch(getAllProfs())
            dispatch(getAllCountries())
            dispatch(getAllCategories())
        }
    }, []);

    return (
        <div>
            <SearchBarPro />
            <ProfesionalsCatalog/>
        </div>
    )
}
