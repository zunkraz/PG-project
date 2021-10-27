import React from 'react'
import ProfessionOfTheWeek from '../../Components/ProfessionOfTheWeek/ProfessionOfTheWeek';
import FeaturedProfessions from '../../Components/FeaturedProfessions/FeaturedProfessions';
import Testimonials from '../../Components/Testimonials/Testimonials';
import FeaturedProfessionals from '../../Components/FeaturedProfessionals/FeaturedProfessionals';
import Facts from '../../Components/Facts/Facts';

function Home() {
    return (
        <div>
            <ProfessionOfTheWeek />
            <FeaturedProfessions />
            <Testimonials />
            <FeaturedProfessionals />
            <Facts />
        </div>
    )
}

export default Home