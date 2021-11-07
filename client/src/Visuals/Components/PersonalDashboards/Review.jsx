import React, {useEffect,useState} from 'react'
import {getReviews} from '../../../ApiReq/constantInfo'
import PopContainer from '../PopContainer'
import EditReview from './EditReview'

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
        <section>
            <h2>Review</h2>
            {!review ? 
            <div>
                <p>Para LATAM Exponential es muy importante que nos hagas saber qué ha sido para ti la plataforma, deja tu feedback:</p>
                <button onClick={changePopUp}>Añadir feedback</button> 
            </div> :
            <div>
                <h3>Tu Review:</h3>
                <p>{review.text}</p>
                <span>{review.rate === 'Good' ? 'Bueno' : 'Malo'}</span>
                <button onClick={changePopUp}>Editar review</button>
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