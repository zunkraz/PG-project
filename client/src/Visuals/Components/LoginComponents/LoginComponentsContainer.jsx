import React , { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { checkLoginAction, cleanLoginCheck } from '../../../Controllers/actions/loginAction'
import { getAllUsers } from '../../../Controllers/actions/userActions'

import LoginFormComponents from './LoginFormComponents'



function LoginComponentsContainer() {

    //funcion que llame el listado de usernames y mails
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getAllUsers())
    },[])

    const users = useSelector(state => state.userReducer.users)
    const userNames = users.map(elem=>elem.username)
    const userMails = users.map(elem=>elem.email)
    // console.log(userNames)
    // console.log(userMails)

    const [userFind, setUserFind] = useState('')
    const [passVerified, setPassVerified] = useState('')
    const [UserCanLog, setUserCanLog] = useState(true)
    const [passError, setPassError] = useState(false)

    // console.log('USER FIND => '+ userFind)
    // console.log('USER PASS => ' + passVerified)
    
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
                    setUserFind('User Coincidence')
                    cleanErrors('userReady')
                    return
                }else if(!userNames.includes(e.target.value)){
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
            //console.log(e.target.value)
            if(userMails.includes(e.target.value)){
                setUserFind('User Coincidence')
                cleanErrors('userReady')
                setuserFields({
                    ...userFields, userReady:e.target.value
                })
                return
            }else if(!userNames.includes(e.target.value)){
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
    console.log(UserLog)
    const logIn = ()=>{
        dispatch(checkLoginAction({username:userFields.userReady, password: userFields.password}))
        setShowErrorText(true)
    }

    if(UserLog === 'Las contraseñas no coinciden'){
        setPassError(true)
        setuserFields({
            ...userFields, password:''
        })
        dispatch(cleanLoginCheck())
        setShowErrorText(true)
    }

    // console.log('User Logged => ')
    //console.log(UserLog)
    //console.log(passError)
    
    // console.log('USER CAN LOG =>> ' + UserCanLog)

    console.log('User Fields =>> ')
    console.log(userFields)

    // console.log('User Errors =>>')
    // console.log(errors)


    return (
        <div class='flex flex-col items-center justify-start mt-44 h-screen'>
            {!UserLog.length &&
                <LoginFormComponents    handleFields={handleFields}
                                        logIn={logIn}
                                        tagUser={userFind}
                                        tagPass={passVerified}
                                        UserCanLog={UserCanLog}
                                        passError={passError}
                                        UserLog={UserLog}
                                        showError={showErrorText}
                                    />
            }
            {(UserLog.length && UserLog==='Correcto') && 
                <Redirect to='/miperfil'/>
            }
        </div>
    )
}

export default LoginComponentsContainer
