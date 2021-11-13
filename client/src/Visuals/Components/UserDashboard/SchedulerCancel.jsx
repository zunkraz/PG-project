import React, { useState} from "react";
import {  useSelector } from "react-redux";
import { deleteSchedulebyId, getSchedulesById } from "../../../ApiReq/schedule";

export default function SchedulerCancel ({userId}){
    const [day, setDay]= useState("Todos")
    const [month, setMonth]= useState("Todos")
    const [app, setApp]=useState([])

    const dateJoin= (date)=>{
        return date.dayName+", "+date.dayNumber+" de "+date.month+" "+date.year+" "+date.time
    }

    const months= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    const days= ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]

    const selectDay = (e)=>{
        const {value}=e.target
        setDay(value)
    }

    const selectMonth = (e)=>{
        const {value}=e.target
        setMonth(value)
    }
    const filter= (sched)=>{
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

    async function clickSearch(){ 
        const sched= await getSchedulesById(userId)
        const filteredSched= filter(sched)
        setApp(filteredSched)
        if (filteredSched.length===0){
            alert("No hay turnos en la fecha bucada")
        }
    }

    function handleClick (e){
        const {id}= e.target
        const m = window.confirm("Estas seguro que quieres borrar el turno?")
        if (m == true) {
            deleteSchedulebyId(id)
            setApp(app.filter(e=> e._id !== id));
        } 
    }

    return (
        <div className="padd-lg">
        <div className='padd-md-b font-main text-bold text-center- font-xl border-bottom-color-main'>
            Quitar turno
        </div>
        <div>
        <p className="my-2">Buscar por: </p>
            <div>
            <label htmlFor="days" className="mr-2">Día:</label>
            <select id="days"onChange={selectDay} className="w-48 uk-input border-radius-sm font-main">
                <option value="Todos">  Todos </option>
                {days.map(d=>{
                    return <option value={d} key={days.indexOf(d)}>{d}</option>
                })}
            </select>
            <label htmlFor="month" className="mx-2">Mes:</label>
            <select id="month" onChange={selectMonth} className="w-48 uk-input border-radius-sm font-main">
                <option value="Todos">  Todos </option>
                {months.map(m=>{
                    return <option value={m} key={months.indexOf(m)}>{m}</option>
                })}
            </select>
            <button onClick={clickSearch} className="btn-prof w-24 my-2 ml-3">Buscar</button>
            </div>
        </div>
        <ul>
        {
        app.length>0 ?
        app.slice(0, 4).map((elem, index)=>{
            
            return  <li className='bg-color-extra4-a20 mrg-lg-t w-1/3 padd-lg border-color-dark-a20 border-radius-sm' 
                    key={index}
                    >
                        <div>
                            {dateJoin(elem.date)}  
                            <button id={elem._id} name={dateJoin(elem.date)} onClick={handleClick} className="ml-2 padd-sm-tb w-1/6 font-sm border-radius-sm action action-user-dashboard-cancel">
                                Borrar</button>
                            
                        </div>
                    </li>
        })
        : null
        }
        </ul>
    </div>
    )
}