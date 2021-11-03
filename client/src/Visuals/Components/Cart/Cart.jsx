import React from "react";
import { useSelector } from "react-redux";
import CardElement from "./CartElement";

export default function Cart(){
    
    const order= useSelector(state=>state.cartReducer.appointments)
    console.log(order);
    
    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 m-4 divide-y ">
            <div className="grid grid-cols-5 gap-4 mb-2 ">
                {order && order.map(o=> (<li className="mb-2"><CardElement date={o.date}/></li>))}
            </div>
            <div>
                <button className="uk-button uk-button-danger uk-margin uk-width-1-1">Pagar</button>
            </div>
        </div>
    )

}
