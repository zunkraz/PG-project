import React from "react";
import RemoveFromCart from "../Cart/RomoveFromCartBtn";

export default function CardElement({ date, price}){
    return (
        <div className="grid grid-cols-5 gap-4">
            <p>{date}</p>
            {price && <p>${price}</p>}
            <RemoveFromCart date={date}/>
        </div>
    )
}