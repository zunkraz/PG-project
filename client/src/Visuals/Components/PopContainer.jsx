import React from 'react'
import '../Assets/css/popup.custom.css'
import {useEffect} from 'react'

function PopContainer(props) {
    const principalDiv = props.principalDiv || `bg-white mt-20 h-4/5 w-2/5 flex flex-col items-center 
    justify-center rounded-lg shadow-lg 
    ring-white ring-4 ring-offset-1 ring-offset-red-500	`
    const children = props.children || 'HOLA'
    return (props.trigger)?(
        <div className='bgpop'>
            <div className={principalDiv}>
                {children}
            </div>
        </div>
    ):'';
}

export default PopContainer
