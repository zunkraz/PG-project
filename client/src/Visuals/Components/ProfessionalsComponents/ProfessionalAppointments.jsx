import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from "../../../Controllers/actions/cartActions";

export default function ProfessionalAppointments ({name}) {
    const sched= useSelector(state=>state.professionalReducer.profSchedule)
    const carrito= useSelector(state=>state.sessionReducer.cart)
    
    const [day, setDay]= useState("Todos")
    const [month, setMonth]= useState("Todos")

    const dispatch= useDispatch()
    const handleClick= (e)=>{
        e.preventDefault()
        dispatch(addToCart({
                    name:name,
                    appointment:{
                    date:e.target.name,
                    sessions:1
                    },
                    id:e.target.id
                }))
    }

    const dateJoin= (date)=>{
        return date.dayName+", "+date.dayNumber+" de "+date.month+" "+date.year+" "+date.time
    }

    const months= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    const days= ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]

    const selectDay = (e)=>{
        const {value}=e.target
        setDay(value)
    }

    const selectMonth = (e)=>{
        const {value}=e.target
        setMonth(value)
    }
    const filter= ()=>{
        if(day==="Todos" && month==="Todos"){
            return sched
        }
        else if (day!=="Todos" && month!=="Todos"){
            return sched.filter(a => a.date.month===month && a.date.dayName===day)
        }
        else if(day!=="Todos"){
            return sched.filter(a => a.date.dayName===day)
        }
        else if(month!=="Todos"){
            return sched.filter(a => a.date.month===month)
        }
        
    }

    return (
        <div>
            Filtar por: <select onChange={selectDay}>
                <option value="Todos"> - Todos -</option>
                {days.map(d=>{
                    return <option value={d}>{d}</option>
                })}
            </select>
            <select onChange={selectMonth}>
                <option value="Todos"> - Todos -</option>
                {months.map(m=>{
                    return <option value={m}>{m}</option>
                })}
            </select>
            <ul className="w-4/5 ml-24 bg-white divide-y divide-gray-200">
                    {filter(sched).length>0 ? filter(sched).map(d=>
                        <li key={d._id} className="flex justify-between py-4 px-2">
                            {dateJoin(d.date)}  {carrito.find(e=>e.id===d._id) ? 
                            <span>En carrito</span> 
                                    : 
                            <button id={d._id} name={dateJoin(d.date)} onClick={handleClick} className="uk-button uk-button-danger">Agregar al carrito</button>}
                        </li>
                    ) : <div>No hay turnos disponibles</div>}
            </ul> 
        </div>
    )
}