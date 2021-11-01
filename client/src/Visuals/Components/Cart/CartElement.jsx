import React from "react";

export default function CardElement({name, date, sessions, price}){
    return (
        <div className="grid grid-cols-4 gap-4">
            <p>{name}</p>
            <p>{date}</p>
            <p>{sessions} ({(sessions*30+" min")})</p>
            <p>${price}</p>
        </div>
    )
}