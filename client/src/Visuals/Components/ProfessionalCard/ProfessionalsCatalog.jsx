import React from "react";
import ProfessionalCard from "./ProfessionalCard";

export default function ProfesionalsCatalog(){
    return (
        <ul class="flex flex-wrap">
        {professionals.map(p=>{
            return(<li key={professionals.indexOf(p)}>
                <ProfessionalCard key={professionals.indexOf(p)}
                id={professionals.indexOf(p)}
                name={p.name}
                lastName= {p.lastName}
                img={p.img}
                category= {p.category}
                likes= {p.likes}
                dislikes= {p.dislikes}
                />

            </li>)
        })}
        </ul>
    )
}

const professionals = [
    {
        name: "Ricardo",
        lastName: "Montaner",
        category: "Arquitecto",
        likes: 25,
        dislikes: 4,
        img: "https://media.istockphoto.com/photos/confident-businessman-portrait-isolated-picture-id455586761?s=612x612",
    },
    {
        name: "Paulina",
        lastName: "Rubio",
        category: "Profesora",
        likes: 75,
        dislikes: 14,
        img: "https://media.istockphoto.com/photos/portrait-of-young-cheerful-african-american-woman-picture-id1207862195?s=612x612",
    },
    {
        name: "Ricardo",
        lastName: "Arjona",
        category: "Abogado",
        likes: 23,
        dislikes: 8,
        img: "https://media.istockphoto.com/photos/portrait-of-serious-mid-adult-man-picture-id805011368?s=612x612",
    },
    {
        name: "Andres",
        lastName: "Cepeda",
        category: "Contador",
        likes: 84,
        dislikes: 21,
        img: "https://media.istockphoto.com/photos/mature-businessman-portrait-isolated-picture-id455586203?s=612x612",
    },
    {
        name: "Julieta",
        lastName: "Venegas",
        category: "Gamer",
        likes: 61,
        dislikes: 19,
        img: "https://media.istockphoto.com/photos/m-taking-this-business-to-the-top-picture-id460078235?s=612x612",
    },
];
