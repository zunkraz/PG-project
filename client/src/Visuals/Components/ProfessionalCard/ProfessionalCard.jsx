import React from "react";
import { Link } from "react-router-dom";
import ImageComponent from "../ImageComponent";
import * as FaIcons from 'react-icons/fa';

export default function ProfessionalCard({username, name, lastName, category, likes, dislikes, img}){
    return (
        <div className="border-color-extra4-a20 border-radius-sm overflow-hidden box-shadow-xs">
            <Link to={`/profesionales/${username}`} style={{ "textDecoration": "none" }}>
                <ImageComponent img={img} ratio={"ratio-1-1"}/>
            </Link>
            <div className="padd-xl-t padd-lg-lr padd-lg-b border-top-color-main position-relative bg-color-light">
        	    <div className="position-middle-parent">
                    <div className="icon-xl border-radius-sm bg-color-main flex-center">
                        <span></span>
                    </div>
                </div>               
                <div className="text-bold text-center font-lg font-main">{name} {lastName}</div>
                <div className="text-bold text-center font-main">{category}</div>
                <div className="wrapper mrg-lg-t">
                    <div className="col-1-2@xl col-1-2@lg col-1-2@md text-center">
                        <div className="flex-center font-xl font-color-extra1">
                            <FaIcons.FaThumbsUp/>
                        </div>
                        <div className="padd-md text-bold font-main">{likes}</div>
                    </div>
                    <div className="col-1-2@xl col-1-2@lg col-1-2@md text-center">
                        <div className="flex-center font-xl font-color-extra1">
                            <FaIcons.FaThumbsDown/>
                        </div>                        
                        <div className="padd-md text-bold font-main">{dislikes}</div>
                    </div>                      
                </div>
                <div className="wrapper padd-lg-b">                
                    <Link to={`/profesionales/${username}`}  style={{ "textDecoration": "none" }}>
                        <div className="mrg-lg-t padd-md border-radius-sm action action-professional">
                            Ver Profesional
                        </div>
                    </Link>
                </div>
            </div>
        </div>        
    )
}

