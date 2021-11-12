import React from 'react'
import { FcApproval } from "react-icons/fc";
import { TiThumbsUp , TiThumbsDown } from "react-icons/ti";
import ImageComponent from "../ImageComponent";


export default function QuickInfo({data}) {

    const {name, lastname, img, likes, dislikes, country, isProfessional, appointments, isVerified} = data;
    
    return (
        <div>
            <div className='padd-md-b font-main text-bold text-center- font-xl border-bottom-color-main'>
                {name} {lastname}
            </div>
            <div className="mrg-lg-t border-radius-sm overflow-hidden">
                <ImageComponent img={img} ratio={"ratio-1-1"}/>
            </div>
            
            <div className="text-bold text-center font-lg">{country.name}</div>
            <div className="padd-md-tb text-center font-main font-lg">
                {isVerified
                ? <span className="flex-center">Usuario Verificado<FcApproval className='font-xl mrg-sm-l'/></span>
                :<span>Usuario no verificado</span>
                }
            </div>
            <div className='flex items-center justify-around'>
                <div className='flex font-lg items-center'>
                    <TiThumbsUp className='font-2x font-color-success mrg-md-r'/>
                    <span className='text-gray-500'>{likes}</span>
                </div>
                <div className='flex text-lg items-center'>
                    <TiThumbsDown className='font-2x font-color-danger mrg-md-r'/>
                    <span className='text-gray-500'>{dislikes}</span>
                </div>
            </div>
            <div className='mrg-lg-t font-main font-lg flex-bar'>
                <div className='text-bold'>Rating score:</div >
                <span className='text-bold font-color-success'>5</span>
            </div>
            <div className='mrg-lg-t font-main font-lg flex-bar'>
                {isProfessional &&   
                    <div className='text-bold'>Sesiones Completadas:</div>
                }
                {isProfessional && 
                    <span className='text-bold font-color-success'>{appointments? appointments.length : 0}</span>
                }
            </div>
        </div>
    )
}
