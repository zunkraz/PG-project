import React from 'react'
import LoginComponentsContainer from '../Components/LoginComponents/LoginComponentsContainer'

function Login({Joined, setUsername, setLogin, login}) {
    return (
        <div>
            <LoginComponentsContainer Joined={Joined} setUsername={setUsername} setLogin={setLogin} login={login}/>
        </div>
    )
}

export default Login
