/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfSchedule } from '../../../Controllers/actions/professionalsActions';
import {Link} from 'react-router-dom';
import { addToCart } from '../../../Controllers/actions/cartActions';


export default function Schedules({id, login, name, lastname, category}) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfSchedule(id))
    },[]);
    
    const price = Math.random*10;

    function onClick(e) {
        const appointment = {
            name: `${name} ${lastname} (${category})`,
            appointment:{
                date: e.target.value,
                sessions: 1,
                price: price
            }
        }
        dispatch(addToCart(appointment))
    };

    const schedules = useSelector(state => state.professionalReducer.profSchedule);

    return (
        <div className="padd-lg">
        <div className='padd-md-b font-main text-bold text-center- font-xl border-bottom-color-main'>
            Proximos turnos
        </div>
        {
        schedules.length ?
        schedules.slice(0,4).map((elem, index)=>{
            
            return  <div className='bg-color-extra4-a20 mrg-lg-t padd-lg border-color-dark-a20 border-radius-sm' 
                    key={index}
                    >
                        
                        <div>{elem.date.datefull}hs</div>
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
                        </div>

                    </div>
        })
        : <span>Sin turnos disponibles</span>
        }
    </div>
    )
};