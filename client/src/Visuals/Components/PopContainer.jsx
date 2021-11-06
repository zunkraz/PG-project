import React from 'react'
import '../Assets/css/popup.custom.css'

function PopContainer(props) {
    return (props.trigger)?(
        <div className='bgpop'>
            <div className={props.principalDiv}>
                {props.children}
            </div>
        </div>
    ):'';
}

export default PopContainer
