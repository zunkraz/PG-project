import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../Controllers/actions/cartActions";

export default function CardElement({name, date, sessions, price}){
    const dispatch= useDispatch()
    const handleClick= ()=>{
        dispatch(removeFromCart(date))
    }
    return (
        <div className="grid grid-cols-5 gap-4">
            <p>{name}</p>
            <p>{date}</p>
            <p>{sessions} ({(sessions*30+" min")})</p>
            <p>${price}</p>
            <button onClick={handleClick} class="bg-white w-2 flex justify-center items-center h-7 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">X</button>
        </div>
    )
}