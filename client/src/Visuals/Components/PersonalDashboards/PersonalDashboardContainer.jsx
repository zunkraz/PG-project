import React from 'react'
import PersonalCardUser from './PersonalCardUser'

function PersonalDashboardContainer({user}) {
    //console.log(user)
    return (
        <PersonalCardUser
            img={user.img} 
            likes={user.likes} 
            dislikes={user.dislikes} 
            //sessions={user.category==='Normal'?user.timeOfSessions:user.visibility}
            //isVerified={user.isVerified}
            professional={user.isProfessional}
        />
    )
}

export default PersonalDashboardContainer
