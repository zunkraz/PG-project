import React from 'react'
import FooterEndBtn from '../FooterEndBtn/FooterEndBtn'
import './FooterEnd.css'

function FooterEnd() {

    const imgList = [
        'https://cdn.discordapp.com/attachments/902284628621148220/902284698259185724/facebook_logo_square_icon_134009.png',
        'https://cdn.discordapp.com/attachments/902284628621148220/902284692936593458/instagram_ig_logo_icon_134013.png',
        'https://cdn.discordapp.com/attachments/902284628621148220/902284709327937556/twitter_logo_circle_icon_134015.png',
        'https://cdn.discordapp.com/attachments/902284628621148220/902284703514632222/youtube_logo_square_icon_134024.png',
        'https://cdn.discordapp.com/attachments/902284628621148220/902284687131705394/spotify_logo_icon_134023_1.png',
    ]

    const hrefList = [
        'https://www.facebook.com/',
        'https://www.instagram.com/',
        'https://twitter.com/',
        'https://www.youtube.com/',
        'https://www.spotify.com/',
    ]


    return (
        <div className='FooterEndDiv'>
            <div className='FooterEndLogo'>
                No Somos Fiverr
            </div>
            <div className='FooterEndBtnPrimaryDiv'>
                <FooterEndBtn name='Facebook' url={hrefList[0]} src={imgList[0]} alt='Facebook-Logo'/>
                <FooterEndBtn name='Instagram' url={hrefList[1]} src={imgList[1]} alt='Instagram-Logo'/>
                <FooterEndBtn name='Twitter' url={hrefList[2]} src={imgList[2]} alt='Twitter-Logo'/>
                <FooterEndBtn name='Youtube' url={hrefList[3]} src={imgList[3]} alt='Youtube-Logo'/>
                <FooterEndBtn name='Spotify' url={hrefList[4]} src={imgList[4]} alt='Spotify-Logo'/>
            </div>
        </div>
    )
}

export default FooterEnd
