import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router'
import UserDashboard from '../Components/UserDashboard/UserDashboard'
import { getSingleUser } from '../../ApiReq/users'



function Dashboard({match}) {
    
    const username = match.params.username
    
    const [userData, setUserData] = useState({})
    
    useEffect(() => {
        getSingleUser(username).then(user=>{
            setUserData(user)
        })
    },[username])
    
    
    
    return (
        <div>
            {!window.localStorage.login?<Redirect to='/'/>:userData.isAdmin?<Redirect to='/admin'/>:<UserDashboard userData={userData}/>}
            
        </div>
    )
}

export default Dashboard
