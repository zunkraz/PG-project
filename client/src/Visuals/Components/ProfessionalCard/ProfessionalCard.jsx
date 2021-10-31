import React from "react";
import { Link } from "react-router-dom";
import { thumbsup, thumbsdown } from "../../Assets/icons";


export default function ProfessionalCard({username, name, lastName, category, likes, dislikes, img}){
    return (
        <div className="w-64 h-96 rounded overflow-hidden shadow-lg m-10">
            <Link to={`/profesionales/${username}`} style={{ "textDecoration": "none" }}>
            <div className="h-1/2" >
                <img className="object-contain h-48 w-full" src={img} alt=""/>
            </div>
            <div className="h-1/4 px-6 py-4 space-y-2">
                <h4 className="font-bold text-xl mb-2">{name} {lastName}</h4>
                <p className="text-l mb-2"> {category} </p>
            </div>
            <div className="h-1/6 object-bottom px-6 py-4 space-y-2 flex flex-row justify-between content-end">
                <div className="flex flex-col">
                    <p className="inline-flex"> {thumbsup} {likes}</p> 
                    <p className="inline-flex"> {thumbsdown} {dislikes}</p>
                </div>
                    <p className="inline-flex">10$ por hora</p>
            </div>
            </Link>
        </div>
        
    )
}

