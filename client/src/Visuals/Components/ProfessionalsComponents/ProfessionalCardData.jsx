import React from 'react'

function ProfessionalCardData({img, likes, dislikes, sessions}) {
    return (
        <div>
            <div>
                <img src={img} alt='Professional Img'/>
            </div>
            <div>
                <span>{likes}</span>
                <span>{dislikes}</span>
            </div>
            <div>
                <span>{sessions}</span>
            </div>
        </div>
    )
}

export default ProfessionalCardData
