import React from 'react'
import Slogan from '../Components/SloganComponents/Slogan'
import WeekTips from '../Components/WeekTipsComponents/WeekTips'

import FeaturedProfessions from '../Components/FeaturedProfessions/FeaturedProfessions'
import FeaturedProfessionals from '../Components/FeaturedProfessionals/FeaturedProfessionals'
import Testimonials from '../Components/Testimonials/Testimonials'

import { getAllProfs } from '../../Controllers/actions/professionalsActions'
import { getAllCountries} from '../../Controllers/actions/constantInfoActions'
import {useDispatch} from "react-redux"


function Home() {


    const dispatch= useDispatch()
    dispatch(getAllProfs());
    dispatch(getAllCountries());

    return (
        <div>
            <Slogan />
            <FeaturedProfessions/>
            <WeekTips/>
            <FeaturedProfessionals/>
            <Testimonials/>
        </div>
    )
}

export default Home
