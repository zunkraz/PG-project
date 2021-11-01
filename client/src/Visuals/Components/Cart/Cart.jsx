import React from "react";
import CardElement from "./CartElement";

export default function Cart(){

    const elements= orders.map(o=><li className="mb-2">
        <CardElement name={o.name}
        date={o.date}
        sessions={o.sessions}
        price={o.price}
        />
    </li>)

    const suma= 20
    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 m-4 divide-y ">
            <div className="grid grid-cols-4 gap-4 mb-2 ">
                <p className="text-xl">Consultoria virtual con:</p>
                <p className="text-xl">Fecha</p>
                <p className="text-xl"> Cantidad de sesiones</p>
                <p className="text-xl">Precio</p>
            </div>
            <ul className="py-4">
                {elements}
            </ul>
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

const orders=[{name:"Carlos avila", date:"Lunes", sessions:"1", price:"10"}, {name:"Marcos avila", date:"Martes", sessions:"2", price:"10"}]