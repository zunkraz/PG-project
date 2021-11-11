import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import {postTipUser} from '../../../ApiReq/users'

function AddPostComponent({close,setTips,userId}) {

    const token = useSelector(state=>state.sessionReducer.status.token)

    const [post, setPost] = useState('')
    const [disabled,setDisabled] = useState(true)
    const [characters,setCharacters] = useState(80)
    
    function postChange(e){
        if(e.target.value.length <= 80){
            setPost(e.target.value)
            setDisabled(e.target.value.length<1)
            setCharacters(80-e.target.value.length)
        }
    }

    function postTip(e){
        e.preventDefault()
        postTipUser({text:post,userId},token)
        .then(r => setTips(s => [...s,r]))
        close()
    }


    return (
        <form className='flex flex-col h-3/5 justify-evenly'>
            <h1 className='text-bold font-lg'>Postea un tip para la plataforma:</h1>
            <textarea placeholder='Haz una publicación...' 
                    onChange={postChange} 
                    value={post} 
                    rows="5"
                    className='bg-gray-50 rounded-lg p-4 resize-none'>{post}</textarea>
            <span className='font-sm'>Te quedan {characters} caracteres</span>

        <div className='flex justify-around'>
                <button onClick={postTip} 
                        disabled={disabled}
                        className={`w-48 h-10 mr-4 rounded-xl duration-700
                        ring-white bg-opacity-5 ring-4 ring-offset-1 ring-offset-green-500 
                        ${disabled ? 'bg-gray-900 hover:cursor-auto' : 'bg-white'}
                        ${!disabled?'hover:bg-green-500':''} `}>
                            <span className={`text-green-500 font-medium tracking-widest 
                                    duration-700  
                                    ${!disabled ? 'hover:text-white':''}`}>Postear</span>
                </button>
            <button onClick={()=>close()}
                    className='w-48 ml-4 bg-white bg-opacity-5
                    hover:bg-red-500 rounded-xl duration-700
                    ring-white ring-4 ring-offset-1 ring-offset-red-500'>
                <span className='text-red-500 font-medium tracking-widest
                                    duration-700 hover:text-white'>Cerrar</span>
            </button>

        </div>
        </form>
    )
}

export default AddPostComponent
