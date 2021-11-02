import React from 'react'
import PersonalCardUser from './PersonalCardUser'

function PersonalDashboardContainer({user}) {
    //console.log(user)
    return (
        <div className='bg-gray-100 rounded-3xl '>
                <PersonalCardUser   img={user.img} 
                                    likes={user.likes} 
                                    dislikes={user.dislikes} 
                                    //sessions={user.category==='Normal'?user.timeOfSessions:user.visibility}
                                    //isVerified={user.isVerified}
                                    professional={user.isProfessional}
                    />
        </div>
    )
}

export default PersonalDashboardContainer
