import React from 'react'
import '../Assets/css/popup.custom.css'

function PopContainer(props) {
    const divClassConstan = `bg-white mt-2 h-4/5 w-2/5 flex flex-col items-center 
                            justify-center rounded-lg shadow-lg 
                            ring-white ring-4 ring-offset-1 ring-offset-red-500	`
    
    return (props.trigger)?(
        <div className='bgpop'>
            <div className={props.principalDiv?props.principalDiv:divClassConstan}>
                {props.children}
            </div>
        </div>
    ):'';
}

export default PopContainer
