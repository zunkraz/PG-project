import React from 'react'
import ProfessionalCardComponent from './ProfessionalCardComponent'
import ProfessionalOpinionsComponents from './ProfessionalOpinionsComponents'
import SimilarProfessionals from './SimilarProfessionals'




function ProfessionalContainer() {

    /* funciones necesarias

    getProfessional : {
        agregar opiniones, numero de sessiones, biografia, perfil profesional (matricula, etc)
    }
    */

    // Funcion de getProfessional by name

    /*
    {
        username: PK STRING
        name: STRING
        lastName: STRING
        category: STRING
        likes: NUMBER
        dislikes: NUMBER 
        img: STRING
        schedule: [{date: DATE, available: BOOLEAN}] (Arreglo de fechas disponibles y no disponibles)
    }
    */

    const professional = {
        username: 'Eliseo_TheRock',
        name: 'Eliseo',
        lastName: 'Jhonson',
        category: 'Abogado',
        likes: 253,
        dislikes: 23,
        sessions: 233,
        img: 'https://i.pinimg.com/736x/87/19/d8/8719d87ae0cfca2b23c297993c156a23--dwayne-the-rock-my-rock.jpg',
        schedule: [ {date: 'Lunes', available: true},
                    {date: 'Martes', available: true},
                    {date: 'Miercoles', available: false},
                    {date: 'Jueves', available: true},
                    {date: 'Viernes', available: false},
                ], /*(Arreglo de fechas disponibles y no disponibles)*/
        biography: 'Acá se mostraría la biografia editable de cada profesional',
        professionalData: 'Acá se mostraría la informacion laboral de cada profesional',
        opinions: [ 'Excelente profesional, lo recomiendo',
                    'Me atendio rapido, sin problemas', 
                    'Llego un ratito tarde pero muy buen profesional',
                    'Muy buena onda, 10/10'
                ],
        similarProfessionals: [
            {name:'Carlos', lastName:'Terrabusi', category:'Abogado' ,img:'https://www.keithandthegirl.com/Show/Pictures/1GF0MHSQ6NM6G5S0LTW1-Display.jpg'},
            {name:'Jesica', lastName:'Borla', category:'Abogado' ,img:'https://th.bing.com/th/id/OIP.ia5VD2nduOpahuhdqyerRAHaEr?pid=ImgDet&w=1200&h=758&rs=1'},
            {name:'Guillermo', lastName:'Zeemo', category:'Abogado' ,img:'https://img.minutoneuquen.com/u/fotografias/fotosnoticias/2020/2/19/211483.jpg'},
        ]
    }

    return (
        <div>
            <div>
                <span>{`${professional.name} ${professional.lastName}`}</span>
                <span>{professional.category}</span>
            </div>
            <div>
                <div>
                    <div>
                        <ProfessionalCardComponent  img={professional.img} 
                                                    likes={professional.likes} 
                                                    dislikes={professional.dislikes}
                                                    sessions={professional.sessions}
                                                    biography={professional.biography}
                                                    professionalData={professional.professionalData}
                                                    schedule={professional.schedule}
                                                    data={professional.similarProfessionals}
                                />
                    </div>
                </div>
                <div>
                    <ProfessionalOpinionsComponents opinions={professional.opinions}/>
                </div>
            </div>
        </div>
    )
}

export default ProfessionalContainer
