import React, { useEffect, useState } from 'react'
import PopBtns from './PopBtns'
import Textarea from "@material-tailwind/react/Textarea";

function CreateReview(props) {

    const [rating, setRating] = useState(false)
    const [rating1, setRating1] = useState(0)
    const [rating2, setRating2] = useState(0)
    const [rating3, setRating3] = useState(0)
    const [rating4, setRating4] = useState(0)
    const [rating5, setRating5] = useState(0)

    const handleRating =(e)=>{
        console.log(e)
        console.log(rating)
        console.log(rating1)
        console.log(rating2)
        console.log(rating3)
        console.log(rating4)
        console.log(rating5)
        switch (e.target.name) {
            case '1':
                setRating1(true)
                setRating2(false)
                setRating3(false)
                setRating4(false)
                setRating5(false)
                setRating(1)
                break;
            case '2':
                setRating1(true)
                setRating2(true)
                setRating3(false)
                setRating4(false)
                setRating5(false)
                setRating(2)
                break;
            case '3':
                setRating1(true)
                setRating2(true)
                setRating3(true)
                setRating4(false)
                setRating5(false)
                setRating(3)
                break;
            case '4':
                setRating1(true)
                setRating2(true)
                setRating3(true)
                setRating4(true)
                setRating5(false)
                setRating(4)
                break;
            case '5':
                setRating1(true)
                setRating2(true)
                setRating3(true)
                setRating4(true)
                setRating5(true)
                setRating(5)
                break;
        
            default:
                setRating1(false)
                setRating2(false)
                setRating3(false)
                setRating4(false)
                setRating5(false)
                setRating(0)
                break;
        }
    }

    const grayClass="w-12 h-12 text-gray-400 cursor-pointer text-4xl"
    const redClass="w-12 h-12 text-red-500 cursor-pointer text-4xl"
    const yellowClass="w-12 h-12 text-yellow-500 cursor-pointer text-4xl"
    const greenClass="w-12 h-12 text-green-400 cursor-pointer text-4xl"

    return (
        <div>
            <div className='flex flex-col justify-center my-4'>
                <div className='flex justify-center my-2'>
                    <h3 className='text-semibold font-xl tracking-wider'>Califique al Profesional</h3>
                </div>
                <div className='flex justify-around w-3/5 m-auto'>
                    <button className={rating1===false?grayClass:rating>3?greenClass:rating<3?redClass:yellowClass}
                            name='1'
                            onClick={handleRating}>x</button>
                    <button className={rating2===false?grayClass:rating>3?greenClass:rating<3?redClass:yellowClass}
                            name='2'
                            onClick={handleRating}>x</button>
                    <button className={rating3===false?grayClass:rating>3?greenClass:rating<3?redClass:yellowClass}
                            name='3'
                            onClick={handleRating}>x</button>
                    <button className={rating4===false?grayClass:rating>3?greenClass:rating<3?redClass:yellowClass}
                            name='4'
                            onClick={handleRating}>x</button>
                    <button className={rating5===false?grayClass:rating>3?greenClass:rating<3?redClass:yellowClass}
                            name='5'
                            onClick={handleRating}>x</button>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <PopBtns 
                    onCancel={props.onCancel}/>
            </div>
        </div>
    )
}

export default CreateReview

