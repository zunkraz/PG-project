import React , { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { checkLoginAction, cleanLoginCheck } from '../../../Controllers/actions/loginAction'
import { getAllUsers } from '../../../Controllers/actions/userActions'

import LoginFormComponents from './LoginFormComponents'



function LoginComponentsContainer({Joined, setUsername, setLogin}) {

    //funcion que llame el listado de usernames y mails
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getAllUsers())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const users = useSelector(state => state.userReducer.users)
    const userNames = users.map(elem=>elem.username)
    const userMails = users.map(elem=>elem.email)
    const [userIndex, setUserIndex] = useState()


    const [userFind, setUserFind] = useState('')
    const [passVerified, setPassVerified] = useState('')
    const [UserCanLog, setUserCanLog] = useState(true)
    const [passError, setPassError] = useState(false)

    
    const [userFields, setuserFields] = useState({
        userReady:'',
        password:''
    })
    const handleFields=(e)=>{

        if(e.target.name==='username'){
            setuserFields({
                ...userFields, userReady:e.target.value
            })
                if(userNames.includes(e.target.value)){
                    setUserIndex(userNames.indexOf(e.target.value))
                    setUserFind('User Coincidence')
                    cleanErrors('userReady')
                    return
                }else if(!userNames.includes(e.target.value)){
                    setUserIndex({})
                    setUserFind('')
                    handleErrors(e.target.name)
                }
                userFind.length===0 && setErrors({
                    userReady:'have some error',
                    password:'have some error'
                })
            return
        }
        if(e.target.name==='email'){
          
            if(userMails.includes(e.target.value)){
                setUserIndex(userMails.indexOf(e.target.value))
                setUserFind('User Coincidence')
                cleanErrors('userReady')
                setuserFields({
                    ...userFields, userReady:e.target.value
                })
                return
            }else if(!userNames.includes(e.target.value)){
                setUserIndex({})
                setUserFind('')
                handleErrors(e.target.name)
            }
            
            return
        }
        if(e.target.name==='password'){
            if(e.target.value.length>3){
                setPassVerified('Password Verified')
                cleanErrors('password')
                setuserFields({
                    ...userFields, password:e.target.value
                })
                setUserCanLog(false)
                setShowErrorText(false)
            }else{
                setPassVerified('')
                handleErrors(e.target.name)
                setuserFields({
                    ...userFields, password:''
                })
                setUserCanLog(true)
            }
            return
        }
        
    }

    const [errors, setErrors] = useState({
        userReady:'have some error',
        password:'have some error'
    })

    const handleErrors=()=>{
        if(userFind.length>0){
            setErrors({
                ...errors, userReady:'' 
            })
            return;
        }
        if(passVerified.length>0){
            setErrors({
                ...errors, password:'' 
            })
            setPassError(false)
            return
        }
    }

    const cleanErrors=(prop)=>{
        setErrors({
            ...errors, [prop]:''
        })
    }
    const [showErrorText, setShowErrorText] = useState(false)
    const UserLog = useSelector(state=> state.sessionReducer.status)
    //console.log(UserLog)

    if(UserLog === 'Las contraseñas no coinciden'){
        setPassError(true)
        setLogin(false)
        setuserFields({
            ...userFields, password:''
        })
        dispatch(cleanLoginCheck())
        setShowErrorText(true)
    }


    const logIn = ()=>{
        dispatch(checkLoginAction({username:userNames[userIndex], password: userFields.password}))
            //console.log('PRE JOINED => '+ userNames[userIndex])
            setUsername(userNames[userIndex])
            Joined(userNames[userIndex])
        //console.log({username:userNames[userIndex], password: userFields.password})
        setShowErrorText(true)
    }

 

    // const Joined=()=>{
    //     if(!window.localStorage.login && UserLog==='Correcto')console.log('LOGEANDO')
    // }
    //window.localStorage.login = true : window.localStorage.login = ''
    /* 
    const Joined = () => {
        window.localStorage.login = true;
    }
    
    const Logout = () => {
        window.localStorage.login = '';
    }
    */

    return (
        <div class='flex flex-col items-center justify-start mt-44 h-screen'>
            {(UserLog.length && UserLog==='Correcto') ? 
                <Redirect to={`/miperfil/${userNames[userIndex]}`}/>
            :
            ( UserLog!=='Correcto') &&
                <LoginFormComponents    handleFields={handleFields}
                                        logIn={logIn}
                                        tagUser={userFind}
                                        tagPass={passVerified}
                                        UserCanLog={UserCanLog}
                                        passError={passError}
                                        UserLog={UserLog}
                                        showError={showErrorText}
                                        Joined={Joined}
                                    />
            }
        </div>
    )
}

export default LoginComponentsContainer
