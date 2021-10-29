import React from 'react'
import ProfessionalCardComponent from './ProfessionalCardComponent'
import ProfessionalOpinionsComponents from './ProfessionalOpinionsComponents'




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
        biography: 'Me gradue de Henry a mediados del año pasado, desde ese momento de dedico a viajar por el mundo siendo el doble de la Roca Jhonson mientras brindo asesorias en esta gran plataforma',
        professionalData: [{name:'Matricula :',text:'234531456', verified:true},{name:'Graduado de : ', text:'Henry con Honores', verified:false}, {name:'Cursos : ', text:'Fabricación de Mayonesa casera, React-Redux',verified:true}],
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
            <div class='flex flex-col '>
                <span class='text-red-400 font-sans text-4xl pt-6 pb-3 
                            text-center text-opacity-900 uppercase 
                            font-extrabold 
                            border-b-8 border-double border-red-300 m-5'>{`${professional.name}  ${professional.lastName}`}</span>
                <span class='font-serif text-3xl tracking-wider 
                            text-gray-600 pb-6 text-center 
                            font-bold 
                            uppercase'>{professional.category}</span>
            </div>
            <div class='container mx-auto md:container md:mx-auto center px-4 flex '>
                <div class='w-4/5'>
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
                <div class='w-1/5'>
                    <ProfessionalOpinionsComponents data={professional.opinions}/>
                </div>
            </div>
        </div>
    )
}

export default ProfessionalContainer
