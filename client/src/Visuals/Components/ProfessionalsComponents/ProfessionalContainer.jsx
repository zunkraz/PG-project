import React from 'react'
import { useSelector } from 'react-redux'
import ProfessionalCardComponent from './ProfessionalCardComponent'
import ProfessionalOpinionsComponents from './ProfessionalOpinionsComponents'




function ProfessionalContainer({username, login}) {
    const profData= useSelector(state=> state.professionalReducer.profDetail)
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
        img: "https://media.istockphoto.com/photos/confident-businessman-portrait-isolated-picture-id455586761?s=612x612",
        schedule: [ {date: 'Lunes', available: true},
                    {date: 'Martes', available: true},
                    {date: 'Miercoles', available: false},
                    {date: 'Jueves', available: true},
                    {date: 'Viernes', available: false},
                ], /*(Arreglo de fechas disponibles y no disponibles)*/
        biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        professionalData: [{name:'Matricula :',text:'234531456', verified:true},{name:'Graduado de : ', text:'Henry con Honores', verified:false}, {name:'Cursos : ', text:'Primeros auxilios, React-Redux',verified:true}],
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
    if(username===profData.username){
    return (
        <div>
            <div className='flex flex-col '>
                <span className='text-red-400 font-sans text-4xl pt-6 pb-3 
                            text-center text-opacity-900 uppercase 
                            font-extrabold 
                            border-b-8 border-double border-red-300 m-5'>{`${profData.name}  ${profData.lastname}`}</span>
                <span class='font-serif text-3xl tracking-wider 

                            text-gray-600 pb-6 text-center 
                            font-bold 
                            uppercase'>{profData.category[0].name}</span>
            </div>

            <div class='container mx-auto md:container md:mx-auto center px-4 flex '>
                <div class='w-4/5'>
                        <ProfessionalCardComponent  img={profData.img ? profData.img : professional.img} 
                                                    likes={profData.likes} 
                                                    dislikes={profData.dislikes}
                                                    sessions={professional.sessions}
                                                    biography={professional.biography}
                                                    professionalData={professional.professionalData}
                                                    schedule={professional.schedule}
                                                    data={professional.similarProfessionals}
                                                    name={profData.name+" " +profData.lastname}
                                                    login={login}

                                />
                </div>
                <div className='w-1/5'>
                    <ProfessionalOpinionsComponents data={professional.opinions}/>
                </div>
            </div>
        </div>
    )}
    else{
        return <div className="flex justify-center text-3xl h-full p-80">Cargando...</div>
    }
}

export default ProfessionalContainer
