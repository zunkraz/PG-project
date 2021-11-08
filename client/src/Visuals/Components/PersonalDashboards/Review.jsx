import React, {useEffect,useState} from 'react'
import {getReviews} from '../../../ApiReq/constantInfo'
import PopContainer from '../PopContainer'
import EditReview from './EditReview'
import '../../Assets/CustomGS.css'

export default function Review({userId}){
    const [review,setReview] = useState({})
    const [popUp, setPopUp] = useState(false)

    useEffect(()=>{
        getReviews(userId)
        .then(r=>{
            setReview(r)
        })
    },[])

    function changePopUp(e){
        setPopUp(state=> state ? false : true)
    }

    return(
        <section className='m-0 w-full mt-0.5 h-36'>
            {!review ? 
            <div className='flex flex-col justify-evenly h-full'>
                <p className='m-0 text-sm'>Es importante para nosotros conocer tu opinión sobre la plataforma</p>
                <button onClick={changePopUp}
                        className='w-full text-sm bg-white rounded-lg duration-700
                        hover:bg-green-500 ring-white bg-opacity-5
                        ring-4 ring-offset-1 ring-offset-green-500'>
                            <span className='text-green-500 tracking-widest 
                                    duration-700 hover:text-white'>Añadir feedback</span>
                </button> 
            </div> :
            <div className='flex flex-col justify-evenly h-full'>
                <h3 className='font-bold'>Tu opinión:</h3>
                <div className='flex items-center'>
                    <p className='m-0 w-3/4 text-sm max-h-14 overflow-y-auto scroll'>{review.text}</p>
                    <span className={`w-1/4 h-4 text-xs px-2 align-middle inline-flex text-xs leading-5 font-semibold rounded-full text-gray-800 max-w-max ${review.rate==='Good'? 'bg-green-200' :  'bg-red-200'}`}>{review.rate === 'Good' ? 'Bueno' : 'Malo'}</span>
                </div>
                <button className='w-full text-sm bg-white rounded-lg duration-700
                        hover:bg-green-500 ring-white bg-opacity-5
                        ring-4 ring-offset-1 ring-offset-green-500' 
                    onClick={changePopUp}>
                        <span className='text-green-500 tracking-widest 
                                    duration-700 hover:text-white'>Editar review</span>
                </button>
            </div>
            }

            <PopContainer 
                children={
                    <EditReview 
                        close={setPopUp} 
                        review={review}
                        setReview={setReview}
                        userId={userId}/>} 
                        trigger={popUp}/>
        </section>
    )
}