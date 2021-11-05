import React, { useState } from "react";
//import ProfessionalCard from "./ProfessionalCard";
import ProfessionalCard from "./../ProfessionalCardComponent";

import ReactPaginate from "react-paginate"
import { useSelector } from "react-redux";

export default function ProfesionalsCatalog(){
    const [pageNumber, setPageNumber]= useState(0)
    const profis= useSelector(state=>state.professionalReducer.professionalsRender)
    const error= useSelector(state=>state.professionalReducer.error)

    const profPerPage= profis.length<12 ? profis.length : 12
    const pageVisited= pageNumber * profPerPage
    
    const defImg= "https://media.istockphoto.com/photos/confident-businessman-portrait-isolated-picture-id455586761?s=612x612"

    const displayProfs= profis.slice(pageVisited, pageVisited + profPerPage).map(data=>{
        return(
            <div key={data._id} className="col-1-6@xl col-1-4@lg col-1-3@md col-1-2@sm col-1-1@xs padd-lg">
                <ProfessionalCard data={data} />
            </div>
        )
    })
    {/*
    <ProfessionalCard 
        key={data._id}
        username={data.username}
        name={data.name}
        lastName= {data.lastname}
        img={data.img ? data.img : defImg}
        category= {data.category[0] ? data.category[0].name : null}
        likes= {data.likes}
        dislikes= {data.dislikes}
    />
    */}
    const pageCount= Math.ceil(profis.length / profPerPage)
    const changePage= ({selected})=>{
        setPageNumber(selected)
    }
    

    if(error){
        return <div className="flex justify-center text-xl h-full p-40">No se encontraron resultados con ese criterio de busqueda</div>
    }
    else {return (
        <React.Fragment>
            <div className="wrapper">
                {displayProfs}
            </div>

            <div className="wrapper padd-lg">
                <ReactPaginate
                    breakLabel="..."
                    previousLabel="<"
                    nextLabel=">"
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"flex justify-center items-center space-x-1 "}
                    pageClassName={"flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md text-decoration:none"}
                    previousClassName={"flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md text-decoration:none"}
                    nextLinkClassName={"flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md text-decoration:none"}
                    activeLinkClassName={""}
                    renderOnZeroPageCount={null}
                />
            </div>
        </React.Fragment>
//Lo comenté por ahora por si hace falta
//         <div className="my-5">
//         <ul className="flex flex-wrap justify-center">
//         {displayProfs}
//         </ul>
//         <ReactPaginate
//             breakLabel="..."
//             previousLabel="<"
//             nextLabel=">"
//             pageCount={pageCount}
//             onPageChange={changePage}
//             containerClassName={"flex justify-center items-center space-x-1 cursor-pointer"}
//             pageClassName={"flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md text-decoration:none"}
//             previousClassName={"flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md text-decoration:none"}
//             nextLinkClassName={"flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md text-decoration:none"}
//             activeLinkClassName={""}
//             renderOnZeroPageCount={null}
//         />
//         </div>
    )}
}