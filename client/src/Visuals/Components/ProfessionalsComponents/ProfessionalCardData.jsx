import React from 'react'
import { FcApproval } from "react-icons/fc";
import { TiThumbsUp , TiThumbsDown } from "react-icons/ti";


function ProfessionalCardData({img, likes, dislikes, sessions}) {
    return (
        <div className='h-auto'>
            <div className='bg-gray-200 rounded-2xl'>
                <img className='p-3 rounded-3xl' src={img} alt='Professional Img'/>
            </div>
            <div className='flex items-center justify-around p-4 '>
                <div className='flex text-2xl items-center'>
                    <TiThumbsUp className='text-green-500 mr-4'/>
                    <span className='text-gray-500'>{likes}</span>
                </div>
                <div className='flex text-2xl items-center'>
                    <TiThumbsDown className='text-red-500 mr-4'/>
                    <span>{dislikes}</span>
                </div>
            </div>
            <div className='flex bg-gray-200 justify-around items-center'>
                <span className=' font-xl text-gray-800 font-semibold'> Sesiones :</span>
                <p className='font-lg font-bold text-green-700'>{sessions} </p>
                <FcApproval className='font-xl'/>
            </div>
        </div>
    )
}

export default ProfessionalCardData
