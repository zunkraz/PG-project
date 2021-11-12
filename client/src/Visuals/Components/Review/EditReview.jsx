import React, {useState} from 'react'
import {updateReviewUser,postReviewUser} from '../../../ApiReq/users'
import {useSelector} from 'react-redux'
 
export default function EditReview({close,review,setReview,userId}){

    const [rew,setRew] = useState(review?.text || '')
    const [rate,setRate] = useState(review?.rate || '')
    const [disabled,setDisabled] = useState(!review)
    const [characters,setCharacters] = useState(200-(review? review.text.length : 0))
    const token = useSelector(state=>state.sessionReducer.status.token)

    function rewChange(e){
        if(e.target.value.length <= 200){
            setRew(e.target.value)
            setDisabled(e.target.value && rate ? false : true )
            setCharacters(200-e.target.value.length)
        }
    }

    function editRew(e){
        e.preventDefault()
        updateReviewUser({text:rew,rate:rate, reviewId:review._id, token})
        .then(r=>setReview(r))
        close()
    }

    function sendReview(e){
        e.preventDefault()
        postReviewUser({text:rew,rate,userId},token)
        .then(r=>setReview(r))
        close()
    }

    function rateChange(e){
        e.preventDefault()
        setRate(e.target.value)
        setDisabled(rew ? false : true)
    }
    return(
        <form className='flex flex-col h-3/5 justify-evenly'>
            <h1 className='text-bold font-lg'>Tu opinión sobre la plataforma:</h1>
            <textarea placeholder='Dejanos tu feedback...' 
                    onChange={rewChange} 
                    value={rew} 
                    rows="5"
                    className='bg-gray-50 rounded-lg p-4 resize-none'>{rew}</textarea>
            <span className='font-sm'>Te quedan {characters} caracteres</span>
            <div className='flex justify-evenly h-6'>
                <button value='Good' 
                    onClick={rateChange}
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-gray-800 hover:pointer ${rate==='Good' ?'bg-green-200':'bg-gray-200'}`}
                    >Bueno</button>
                <button value="Bad" 
                    onClick={rateChange}
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-gray-800 ${rate==='Bad' ?'bg-red-200':'bg-gray-200'}`}
                    >Malo</button>
            </div>

        <div className='flex justify-around'>
            {review ? 
                <button onClick={editRew} 
                        disabled={disabled}
                        className='w-48 h-10 mr-4 bg-white rounded-xl duration-700
                        hover:bg-green-500 ring-white bg-opacity-5
                        ring-4 ring-offset-1 ring-offset-green-500'>
                            <span className='text-green-500 font-medium tracking-widest 
                                    duration-700 hover:text-white'>Editar</span>
                </button> : 
                <button onClick={sendReview} 
                        disabled={disabled}
                        className={`w-48 h-10 mr-4 rounded-xl duration-700
                        ring-white bg-opacity-5 ring-4 ring-offset-1 ring-offset-green-500 
                        ${disabled ? 'bg-gray-900 hover:cursor-auto' : 'bg-white'}
                        ${!disabled?'hover:bg-green-500':''} `}>
                            <span className={`text-green-500 font-medium tracking-widest 
                                    duration-700  
                                    ${!disabled ? 'hover:text-white':''}`}>Enviar review</span>
                </button>}
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