import React, {useEffect,useState} from 'react'
import {getReviews} from '../../../ApiReq/constantInfo'
import Review from './Review'

function ReviewPop({onCancel,userId,onSuccess}) {

    
    const [review,setReview] = useState({})
    const [status, setStatus] = useState('')
    const [revText,setRevText] = useState('')
    

    useEffect(()=>{
        getReviews(userId)
        .then(r=>{
            setReview(r)
            setRevText(r?r.text:'')
            setStatus(r?'Editar opinión':'Postear opinión')
        })
    },[])

    function rewChange(e){
        setRevText(e.target.value)
        // setDisabled(e.target.value && rate ? false : true )
    }

    return (
        <section>
            <h2>Review</h2>
            <div>
            <div>
            {!review ? 
                <p>Para LATAM Exponential es muy importante que nos hagas saber qué ha sido para ti la plataforma, deja tu feedback:</p>
             : <p>Tu Opinión:</p>}
            </div> 
            <div>
                <h3>Tu Review:</h3>

                <textarea placeholder='Dejanos tu feedback...' onChange={rewChange} value={revText} rows="5">{revText}</textarea>
                
                <span>{review.rate === 'Good' ? 'Bueno' : 'Malo'}</span>
            </div>
            </div>
            <div className='flex justify-around'>
                <button className='w-48 h-10 mr-4 bg-white rounded-xl duration-700
                                    hover:bg-green-500 ring-white bg-opacity-5
                                    ring-4 ring-offset-1 ring-offset-green-500'
                        onClick={onSuccess||''}
                    ><span  className='text-green-500 font-medium tracking-widest 
                                    duration-700 hover:text-white'
                        >Aceptar</span></button>
                <button className='w-48 ml-4 bg-white bg-opacity-5
                                    hover:bg-red-500 rounded-xl duration-700
                                    ring-white ring-4 ring-offset-1 ring-offset-red-500'
                        onClick={onCancel}
                    ><span  className='text-red-500 font-medium tracking-widest
                                    duration-700 hover:text-white'
                        >Cancelar</span></button>
            </div>
        </section>
    )
}

export default ReviewPop
