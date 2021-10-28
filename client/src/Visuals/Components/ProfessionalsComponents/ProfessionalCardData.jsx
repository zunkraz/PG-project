import React from 'react'
import { FcApproval } from "react-icons/fc";
import { TiThumbsUp , TiThumbsDown } from "react-icons/ti";


function ProfessionalCardData({img, likes, dislikes, sessions}) {
    return (
        <div class='h-auto'>
            <div class='bg-gray-200 rounded-2xl'>
                <img class='p-3 rounded-3xl' src={img} alt='Professional Img'/>
            </div>
            <div class='flex items-center justify-around p-4 '>
                <div class='flex text-2xl items-center'>
                    <TiThumbsUp class='text-green-500 mr-4'/>
                    <span class='text-gray-500'>{likes}</span>
                </div>
                <div class='flex text-2xl items-center'>
                    <TiThumbsDown class='text-red-500 mr-4'/>
                    <span>{dislikes}</span>
                </div>
            </div>
            <div class='flex bg-gray-200 justify-around items-center'>
                <span class=' font-xl text-gray-800 font-semibold'> Sesiones :</span>
                <p class='font-lg font-bold text-green-700'>{sessions} </p>
                <FcApproval class='font-xl'/>
            </div>
        </div>
    )
}

export default ProfessionalCardData
