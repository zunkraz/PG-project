import React from 'react'
import LoginComponentsContainer from '../Components/LoginComponents/LoginComponentsContainer'

function Login({Joined, setUsername, setLogin}) {
    return (
        <div>
            <LoginComponentsContainer Joined={Joined} setUsername={setUsername} setLogin={setLogin}/>
        </div>
    )
}

export default Login
