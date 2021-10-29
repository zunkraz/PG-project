import React from 'react'
import { FcApproval } from "react-icons/fc";
import { TiThumbsUp , TiThumbsDown } from "react-icons/ti";


function PersonalCardUser({img, likes, dislikes, sessions, isVerified,category}) {
    return (
        <div class='h-auto w-80 pt-4'>
            <div class='flex justify-center bg-gray-0 rounded-2xl justify-center '>
                <img class='p-3 w-56 rounded-3xl' src={img} alt='Professional Img'/>
            </div>
                {isVerified&& <div class='flex justify-center font-lg'><span>Usuario Verificado</span><FcApproval class='font-xl ml-2'/></div>}
                {!isVerified && <div class='flex justify-center font-lg'><span>Usuario no verificado</span></div>}
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
                {category==='Normal'?
                    <span class=' font-lg text-gray-800 font-semibold'>Horas Asistidas :</span>
                        :
                    <span class=' font-lg text-gray-800 font-semibold'>Sesiones Completadas :</span>
                }
                {category==='Normal'?
                    <p class='font-lg font-bold text-green-600 ml-4'>{sessions} Hs</p>
                        :
                        <p class='font-lg font-bold text-green-600 ml-4'>{sessions}</p>
                }
            </div>
        </div>
    )
}

export default PersonalCardUser
