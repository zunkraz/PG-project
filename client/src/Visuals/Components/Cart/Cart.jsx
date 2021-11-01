import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CardElement from "./CartElement";

export default function Cart(){
    
    const order= useSelector(state=>state.cartReducer.appointments)
    const elements= order.map(o=><li className="mb-2">
        <CardElement name={o.name}
        date={o.appointment.date}
        sessions={o.appointment.sessions}
        price={o.appointment.sessions[0]*10}
        />
    </li>)
    
    let suma= 0
    order.forEach(o=> suma += o.appointment.sessions[0]*10)
    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 m-4 divide-y ">
            <div className="grid grid-cols-5 gap-4 mb-2 ">
                <p className="text-xl">Consultoria virtual con:</p>
                <p className="text-xl">Fecha</p>
                <p className="text-xl"> Cantidad de sesiones</p>
                <p className="text-xl">Precio</p>
                <p className="text-xl">Eliminar</p>
            </div>
            {elements.length>0 ? <ul className="py-4">
                {elements}
            </ul>: <p className="text-2xl flex justify-center py-6">Tu carrito esta vacio</p>}
            <div className="grid grid-cols-4 gap-4 my-4 py-5">
                <p className="col-span-3 text-2xl">Total</p>
                <p className="text-2xl">${suma}</p>
            </div>
            <div>
                <button className="uk-button uk-button-danger uk-margin uk-width-1-1">Pagar</button>
            </div>
        </div>
    )

}
