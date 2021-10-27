import React from 'react';
import FeaturedProfessional from './FeaturedProfessional';

export function FeaturedProfessionals() {

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

    return (
        <div>
            <div className="wrapper padd-xl bg-color-dark-a20">
                <section>
                    <div className="text-bold font-main font-2x">
                        Profesionales Destacados
                    </div>
                    <div className="mrg-lg-t">
                        Quisque placerat, sem tempus porta posuere, metus odio feugiat nunc, ut rhoncus nunc dui eget massa. Vivamus laoreet ullamcorper felis at egestas. Vivamus varius erat sit amet massa viverra sodales. Sed erat risus, posuere sit amet ullamcorper sit amet, efficitur ut leo.
                    </div>
                </section>
            </div>
            <div className="wrapper padd-xl-tb bg-color-dark-a40">
                <section>
                    {
                        professionals && professionals.map(function (professionalData, index) {
                            return <FeaturedProfessional key={index} data={professionalData} />
                        })
                    }             
                </section>
            </div>
        </div>
    )
}
export default FeaturedProfessionals;