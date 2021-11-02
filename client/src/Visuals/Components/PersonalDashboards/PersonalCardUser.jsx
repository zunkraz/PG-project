import React, { useEffect, useState } from 'react'
import { FcApproval } from "react-icons/fc";
import { TiThumbsUp , TiThumbsDown } from "react-icons/ti";


function PersonalCardUser({img, likes, dislikes, sessions, isVerified, professional}) {

    const [random, setRandom] = useState()

    useEffect(() => setRandom(Math.ceil(Math.random()*10)) ,[])

    //
    return (
        <div className='h-auto w-80 pt-4'>
            <div className='flex justify-center bg-gray-0 rounded-2xl justify-center '>
                <img className='p-3 w-56 rounded-3xl' src={img} alt='Professional Img'/>
            </div>
                {/*isVerified*/ random>5 && <div className='flex justify-center font-lg'><span>Usuario Verificado</span><FcApproval class='font-xl ml-2'/></div>}
                {/*!isVerified*/random<5 && <div className='flex justify-center font-lg'><span>Usuario no verificado</span></div>}
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
                {professional &&   
                    <span className=' font-lg text-gray-800 font-semibold'>Sesiones Completadas :</span>
                }
                {professional && 
                    <p className='font-lg font-bold text-green-600 ml-4'>{ Math.floor(random*1000/likes + 5) /*sessions*/}</p>
                }
                
                {/* {category==='Normal'?
                    <span className=' font-lg text-gray-800 font-semibold'>Horas Asistidas :</span>
                        :
                    <span className=' font-lg text-gray-800 font-semibold'>Sesiones Completadas :</span>
                }
                {category==='Normal'?
                    <p className='font-lg font-bold text-green-600 ml-4'>{sessions} Hs</p>
                        :
                        <p className='font-lg font-bold text-green-600 ml-4'>{sessions}</p>
                } */}
            </div>
        </div>
    )
}

export default PersonalCardUser
