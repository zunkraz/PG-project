import React from 'react'
import ProfessionalCardData from './ProfessionalCardData'
import ProfessionalCardInfo from './ProfessionalCardInfo'

function ProfessionalCardComponent({img, likes, dislikes, sessions, biography, professionalData, schedule}) {
    return (
        <div>
            <div className='ProfessionalCard'>
                <ProfessionalCardData   img={img}
                                        likes={likes}
                                        dislikes={dislikes}
                                        sessions={sessions}
                        />
            </div>
            <div>
                <ProfessionalCardInfo   biography={biography}
                                        professionalData={professionalData}
                                        schedule={schedule}
                        />
            </div>
        </div>
    )
}

export default ProfessionalCardComponent
