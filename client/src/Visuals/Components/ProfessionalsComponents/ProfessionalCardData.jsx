import React from 'react'

function ProfessionalCardData({img, likes, dislikes, sessions}) {
    return (
        <div class='bg-green-200 h-auto'>
            <div class='bg-yellow-200'>
                <img class='p-3' src={img} alt='Professional Img'/>
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
