import React from "react";
import { Link } from "react-router-dom";
import { thumbsup, thumbsdown } from "../../Assets/icons";


export default function ProfessionalCard({id, name, lastName, category, likes, dislikes, img}){
    return (
        <div class="w-80 h-96 rounded overflow-hidden shadow-lg m-10">
            <Link to={`/professionals/${id}`} style={{ "textDecoration": "none" }}>
            <div class="h-1/2" >
                <img class="object-contain h-48 w-full" src={img} alt=""/>
            </div>
            <div class="h-1/4 px-6 py-4 space-y-2">
                <h4 class="font-bold text-xl mb-2">{name} {lastName}</h4>
                <p class="text-l mb-2"> {category} </p>
            </div>
            <div class="h-1/6 object-bottom px-6 py-4 space-y-2 flex flex-row justify-between content-end">
                <div class="flex flex-col">
                    <p class="inline-flex"> {thumbsup} {likes}</p> 
                    <p class="inline-flex"> {thumbsdown} {dislikes}</p>
                </div>
                    <p class="inline-flex">10$ por hora</p>
            </div>
            </Link>
        </div>
        
    )
}

