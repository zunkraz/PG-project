import React from 'react'
import { Link } from 'react-router-dom'
import UserDashboard from '../Components/UserDashboard/UserDashboard'



function Dashboard() {

    return (
        <div>
            <UserDashboard/>
            <Link className='flex bg-green-200 justify-center 
                        cursor-pointer h-20 items-center font-xl font-semibold hover:no-underline hover:text-red-400 duration-300' 
                        to='/profesional'> {'==>'}  PROFESIONAL COMPONENT  {'<=='} </Link>
        </div>
    )
}

export default Dashboard
