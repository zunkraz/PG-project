import React from 'react'
import BigButton from '../BigButton'
import ProfessionalCardData from './ProfessionalCardData'
import ProfessionalCardInfo from './ProfessionalCardInfo'
import SimilarProfessionals from './SimilarProfessionals'

function ProfessionalCardComponent({img, likes, dislikes, sessions, biography, professionalData, schedule, data}) {

    const contratado = ()=>{alert('Profesional Contratado!')}

    return (
        <div>
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
            <div>
                <BigButton  onClickFunction={contratado}
                            text='CONTRATAR'
                            cssClass=''
                    />
                <SimilarProfessionals data={data}/>
            </div>
        </div>
    )
}

export default ProfessionalCardComponent
