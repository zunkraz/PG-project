import React, {useState} from 'react'
import {updateReviewUser,postReviewUser} from '../../../ApiReq/users'

export default function EditReview({close,review,setReview,userId}){

    const [rew,setRew] = useState(review?.text || '')
    const [rate,setRate] = useState(review?.rate || '')
    const [disabled,setDisabled] = useState(!review)


    function rewChange(e){
        setRew(e.target.value)
        setDisabled(e.target.value && rate ? false : true )
    }

    function editRew(e){
        e.preventDefault()
        console.log(rate)
        updateReviewUser({text:rew,rate:rate, reviewId:review._id})
        .then(r=>{
            console.log(r)
            return setReview(r)})
    }

    function sendReview(e){
        e.preventDefault()
        postReviewUser({text:rew,rate,userId})
        .then(r=>setReview(r))
    }

    function rateChange(e){
        e.preventDefault()
        setRate(e.target.value)
        setDisabled(rew ? false : true)
    }
    return(
        <form>
            <textarea placeholder='Dejanos tu feedback...' onChange={rewChange} value={rew} rows="10">{rew}</textarea>
            
            <button value='Good' onClick={rateChange}>Bueno</button>
            <button value="Bad" onClick={rateChange}>Malo</button>
            {review ? 
                <button onClick={editRew} disabled={disabled}>Editar</button> : 
                <button onClick={sendReview} disabled={disabled}>Enviar review</button>}
            <button onClick={()=>close()}>Cerrar</button>
        </form>
    )
}