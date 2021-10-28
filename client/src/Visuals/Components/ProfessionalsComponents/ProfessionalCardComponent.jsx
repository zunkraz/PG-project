import React from 'react'
import BigButton from '../BigButton'
import ProfessionalCardData from './ProfessionalCardData'
import ProfessionalCardInfo from './ProfessionalCardInfo'
import SimilarProfessionals from './SimilarProfessionals'

function ProfessionalCardComponent({img, likes, dislikes, sessions, biography, professionalData, schedule, data}) {

    const contratado = ()=>{alert('Profesional Contratado!')}

    return (
        <div class='mx-5 p-5 flex flex-col'>
            <div class='flex'>
                <div class='w-2/6'>
                    <ProfessionalCardData   img={img}
                                            likes={likes}
                                            dislikes={dislikes}
                                            sessions={sessions}
                            />
                </div>
                <div class='w-4/6 ml-10'>
                    <ProfessionalCardInfo   biography={biography}
                                            professionalData={professionalData}
                                            schedule={schedule}
                            />
                </div>
            </div>
            <div class='mt-10'>
                <BigButton  onClickFunction={contratado}
                            text='CONTRATAR'
                            cssClass='bg-green-300 w-3/5 p-8 rounded-3xl mt-10 mb-10 text-2xl font-semibold tracking-widest w-4/5 ml-24'
                    />
                <SimilarProfessionals data={data}/>
            </div>
        </div>
    )
}

export default ProfessionalCardComponent
