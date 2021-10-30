import React , { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
    console.log(userNames)
    console.log(userMails)

    const [userFind, setUserFind] = useState('')
    const [passVerified, setPassVerified] = useState('')
    console.log('user Find => '+ userFind)
    
    const [userFields, setuserFields] = useState({
        userReady:'',
        password:'',
        repassword:''
    })
    const handleFields=(e)=>{
        console.log('name => '+ e.target.name)
        console.log('value => '+ e.target.value)

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
            console.log(e.target.value)
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
            
            setuserFields({
                ...userFields, password:e.target.value 
            })
            return
        }
        if(e.target.name==='repassword'){
            setuserFields({
                ...userFields, repassword: e.target.value
            })
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
            return
        }
    }

    const cleanErrors=(prop)=>{
        setErrors({
            ...errors, [prop]:''
        })
    }
    const logIn = ()=>{alert('Ingresando')}
    console.log('User Fields =>> ')
    console.log(userFields)

    console.log('User Errors =>>')
    console.log(errors)


    const classSelectBtn = `bg-gray-200 px-8 py-4 w-96 mt-5 rounded-xl font-semibold 
                            text-3xl uppercase tracking-widest text-gray-100 
                            cursor-pointer hover:bg-gray-400 duration-1000
                            border-2 border-gray-200 shadow-xl ring-4 ring-gray-300 ring-opacity-50`

    const classLogBtn=`bg-transparent px-8 py-4 w-96 mt-5 rounded-xl font-semibold 
                text-3xl uppercase tracking-widest text-gray-100 
                cursor-pointer hover:bg-red-300 duration-1000
                border-2 border-gray-200 shadow-xl `


    return (
        <div class='flex flex-col items-center justify-start mt-44 h-screen'>
            <LoginFormComponents    classSelectBtn={classSelectBtn} 
                                    classLogBtn={classLogBtn} 
                                    handleFields={handleFields}
                                    logIn={logIn}/>
        </div>
    )
}

export default LoginComponentsContainer
