import React from 'react'

function ReviewPop(props) {
    return (
        <div>
            <div>
                TU COMPONENTE AQUI
            </div>
            <div className='flex justify-around'>
                <button className='w-48 h-10 mr-4 bg-white rounded-xl duration-700
                                    hover:bg-green-500 ring-white bg-opacity-5
                                    ring-4 ring-offset-1 ring-offset-green-500'
                        onClick={props.onSuccess}
                    ><span  className='text-green-500 font-medium tracking-widest 
                                    duration-700 hover:text-white'
                        >Confirmar</span></button>
                <button className='w-48 ml-4 bg-white bg-opacity-5
                                    hover:bg-red-500 rounded-xl duration-700
                                    ring-white ring-4 ring-offset-1 ring-offset-red-500'
                        onClick={props.onCancel}
                    ><span  className='text-red-500 font-medium tracking-widest
                                    duration-700 hover:text-white'
                        >Cancelar</span></button>
            </div>
        </div>
    )
}

export default ReviewPop
