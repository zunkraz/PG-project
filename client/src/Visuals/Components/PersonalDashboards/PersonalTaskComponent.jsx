import React from 'react'

function PersonalTaskComponent({data}) {
    return (
        <div class= 'm-5 w-64'>
            <div class='border-b-8 border-double border-red-300 mb-5 text-center pb-5 font-xl font-semibold'>
                <span class='text-gray-500'>Agenda</span>
            </div>
            <div class='bg-red-300 p-3 rounded-xl h-full max-h max-w-screen-md font-lg'>
                {data?.map((elem,index)=>{
                    return <div class='bg-white mb-8 rounded-xl p-2' 
                                key={index}><span>{elem}</span></div>
                })}
            </div>
        </div>
    )
}

export default PersonalTaskComponent
