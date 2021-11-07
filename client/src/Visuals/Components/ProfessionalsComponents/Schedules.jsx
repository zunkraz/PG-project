/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfSchedule } from '../../../Controllers/actions/professionalsActions';



export default function Schedules({id, login}) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfSchedule(id))
    },[]);

    const schedules = useSelector(state => state.professionalReducer.profSchedule);

    return (
        <div className="padd-lg">
        <div className='padd-md-b font-main text-bold text-center- font-xl border-bottom-color-main'>
            Proximos turnos
        </div>
        {
        schedules.length ?
        schedules.slice(0,4).map((elem, index)=>{
            
            return  <div className='bg-color-extra4-a20 mrg-lg-t padd-lg border-color-dark-a20 border-radius-sm' key={index}>
                        
                        <div>{elem.date.datefull}hs</div>
                        <div>
                            {
                                login.length ? 
                                <button className="btn-prof">
                                Contratar
                                </button>
                                :null
                            }
                        </div>

                    </div>
        })
        : <span>Sin turnos disponibles</span>
        }
    </div>
    )
};