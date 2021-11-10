import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getReviews } from "../../../ApiReq/constantInfo";
import PopContainer from "../PopContainer";
import EditReview from "./EditReview";
import {Link} from 'react-router-dom'
import "../../Assets/CustomGS.css";

export default function Review() {
  const [review, setReview] = useState({});
  const [popUp, setPopUp] = useState(false);

  const userId = useSelector((state) => state.sessionReducer.status.id);
  const sesion = useSelector(state=>state.sessionReducer.status.token)

  useEffect(() => {
    window.scrollTo(0, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    getReviews(userId).then((r) => {
      setReview(r);
    });  
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  },[]);

  function changePopUp(e) {
    setPopUp((state) => (state ? false : true));
  }

  if(sesion){
  return (
    <div className="m-0 w-full mt-0.5 h-96 flex flex-col items-center">
        <h1>HEADER SECCIÓN DE OPINIÓN</h1>
        <div className="w-3/5 h-4/5 p-4">
            {!review ? (
            <div className="flex flex-col justify-evenly items-center h-full">
                <p className="font-bold w-max">
                Es importante para nosotros conocer tu opinión sobre la plataforma
                </p>
                <button 
                    onClick={changePopUp}
                    className="w-2/5 text-sm bg-white rounded-lg duration-700
                    hover:bg-green-500 bg-opacity-5
                    ring ring-green-500 ring-offset-green-500 "
                    >
                    <span
                        className=" text-green-500 tracking-widest 
                        duration-700 hover:text-white"
                    >
                        Añadir opinión
                    </span>
                </button>
            </div>
            ) : (
            <div className="flex flex-col justify-evenly items-center h-full">
                <h3 className="font-bold w-max">Tu opinión:</h3>
                <div className="flex flex-col items-center">
                    <p className="bg-gray-100 rounded-lg m-0 w-96 text-md h-40 p-4 overflow-y-auto scroll relative">
                        {review.text}
                        <span
                        className={`absolute bottom-4 right-4 m-y-1 w-1/4 text-sm px-2 align-middle inline-flex text-xs 
                            leading-5 font-semibold rounded-full text-gray-800 max-w-max 
                            ${review.rate === "Good" ? "bg-green-200" : "bg-red-200"}`}
                        >
                            {review.rate === "Good" ? "Bueno" : "Malo"}
                        </span>
                    </p>
                </div>
                <button 
                    onClick={changePopUp}
                    className="w-2/5 text-sm bg-white rounded-lg duration-700
                                hover:bg-green-500 bg-opacity-5
                                ring ring-green-500 ring-offset-green-500 "
                    >
                    <span
                        className=" text-green-500 tracking-widest 
                                            duration-700 hover:text-white"
                    >
                        Editar opinión
                    </span>
                </button>
            </div>
            )}
        </div>
            
            <PopContainer
            children={
                <EditReview
                close={setPopUp}
                review={review}
                setReview={setReview}
                userId={userId}
                />
            }
            trigger={popUp}
            />
    </div>
  );}else{
      return(
        <div className="m-0 w-full mt-0.5 h-96 flex flex-col items-center">
            <h1>HEADER SECCIÓN DE OPINIÓN</h1>
            <div className="font-bold w-max my-10">¡Inicia sesión para dejar tu opinión sobre nuestra plataforma!</div>
            <Link to='/ingresar'>
                <button className='w-32 text-sm bg-white rounded-lg duration-700
                    hover:bg-red-500 bg-opacity-5
                    ring ring-red-500 ring-offset-red-500'> 
                    <span className=" text-red-500 font-md
                                            duration-700 hover:text-white"> Iniciar sesión</span></button>
            </Link>
        </div>
      )
  }
}
