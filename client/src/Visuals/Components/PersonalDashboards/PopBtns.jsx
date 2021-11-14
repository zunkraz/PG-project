import React from 'react'

function PopBtns(props) {

    const btnActive = `w-48 h-10 mr-4 bg-white rounded-xl duration-700
                        hover:bg-green-500 ring-white bg-opacity-5
                        ring-4 ring-offset-1 ring-offset-green-500`
    const btnDisactive = `w-48 h-10 mr-4 bg-white rounded-xl duration-700
                        hover:bg-gray-500 ring-white bg-opacity-5
                        ring-4 ring-offset-1 ring-offset-gray-500 cursor-not-allowed`

    const textActive = `text-green-500 font-medium tracking-widest 
                        duration-700 hover:text-white`
    const textDisactive = `text-gray-500 font-medium tracking-widest 
                            duration-700 hover:text-white cursor-not-allowed`


    return (
        <div>
            <div className='flex justify-around'>
                    <button className={props.disabled?btnDisactive:btnActive}
                            disabled={props.disabled}
                            onClick={props.onSuccess}
                        ><span  className={props.disabled?textDisactive:textActive}
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

export default PopBtns
