import React from 'react'

function WeekTipsCard({text}) {
    return (
        <li className="ratio-5-1">
            <div className="uk-position-center col-1-2@xl col-1-2@lg col-1-2@md col-1-1">
                <div className="uk-position-center text-bold text-center text-italic text-shadow-md font-2x font-main font-color-light">
                    {text}
                </div>                
            </div>
        </li>
    )
}

export default WeekTipsCard
