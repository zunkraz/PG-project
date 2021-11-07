/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfSchedule } from '../../../Controllers/actions/professionalsActions';
import {Link} from 'react-router-dom';
import { addToCart } from '../../../Controllers/actions/cartActions';


export default function Schedules({id, login, name, lastname, category}) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfSchedule(id))
    },[]);
    const [day, setDay]= useState("Todos")
    const [month, setMonth]= useState("Todos")
    const sched= useSelector(state=>state.professionalReducer.profSchedule)
    const carrito= useSelector(state=>state.sessionReducer.cart)

    const price = 10;
    
    function handleClick(e) {
        dispatch(addToCart({
            name:name+" "+lastname,
            appointment:{
            date:e.target.name,
            sessions:1
            },
            price:price,
            id:e.target.id,
            category:category
        }))
    };
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
        <div className="padd-lg">
        <div className='padd-md-b font-main text-bold text-center- font-xl border-bottom-color-main'>
            Proximos turnos
        </div>
        <div>
        <span>Filtar por: </span>
            <label></label>
            <select onChange={selectDay}>
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
        </div>
        <ul>
        {
        filter(sched).length>0 ?
        filter(sched).map((elem, index)=>{
            
            return  <li className='bg-color-extra4-a20 mrg-lg-t padd-lg border-color-dark-a20 border-radius-sm' 
                    key={index}
                    >
                        {dateJoin(elem.date)}  {carrito.find(e=>e.id===elem._id) ? 
                            <span>En carrito</span> 
                                    : 
                            <button id={elem._id} name={dateJoin(elem.date)} onClick={handleClick} className="btn-prof">Contratar</button>}
                        
                        {/* <div>{elem.date.datefull}hs</div>
                        <div style={{textAlign:'right'}}>
                            {
                                login.length ? 
                                <button
                                className="btn-prof"
                                value={elem.date.datefull}
                                onClick={onClick}
                                >
                                <span>Contratar</span>
                                </button>
                                :
                                <Link to='/ingresar'>
                                <button className="btn-prof-nologin">
                                <span>Inicia sesion para reservar</span>
                                </button>
                                </Link>
                            }
                        </div> */}

                    </li>
        })
        : <span>Sin turnos disponibles</span>
        }
        </ul>
    </div>
    )
};