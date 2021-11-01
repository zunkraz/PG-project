import React from 'react'
import LoginComponentsContainer from '../Components/LoginComponents/LoginComponentsContainer'

function Login({Joined, setUsername}) {
    return (
        <div>
            <LoginComponentsContainer Joined={Joined} setUsername={setUsername}/>
        </div>
    )
}

export default Login
