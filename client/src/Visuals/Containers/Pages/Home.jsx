import React from 'react'
import Slogan from '../../Components/SloganComponents/Slogan'
import WeekTips from '../../Components/WeekTipsComponents/WeekTips'

import FeaturedProfessions from '../../Components/FeaturedProfessions/FeaturedProfessions'
import FeaturedProfessionals from '../../Components/FeaturedProfessionals/FeaturedProfessionals'
import Testimonials from '../../Components/Testimonials/Testimonials'



function Home() {
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
