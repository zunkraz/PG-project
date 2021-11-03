import React from 'react'
import { useDispatch} from 'react-redux'
import { useParams } from 'react-router'
import { getProfByUser } from '../../../Controllers/actions/professionalsActions'
import ProfessionalContainer from './ProfessionalContainer'


function ProfessionalDashboard({login}) {
    const {username}= useParams()
    const dispatch= useDispatch()
    dispatch(getProfByUser(username))
    

    return (
        <div class='bg-gray-100'>
            <ProfessionalContainer username={username} login={login}/>
        </div>
    )


}

export default ProfessionalDashboard
