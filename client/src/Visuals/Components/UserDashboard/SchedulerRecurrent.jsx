import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import { addtoSchedule } from "../../../ApiReq/schedule";
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';

export default function SchedulerRecurrent ({userId}){
    const days= ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
    const deng= {Lunes: "Mon", Martes:"Tue", Miercoles:"Wed", Jueves:"Thu", Viernes:"Fri", Sabado:"Sat", Domingo:"Sun"}

    const [daystime, setDt]= useState({Mon:[], Tue:[], Wed:[], Thu:[], Fri:[], Sat:[], Sun:[]})
    
    const onChangeTime=(date)=>{
        const hour = date.toString().split(" ")[4].slice(0,5)
        const day= date.toString().split(" ")[0]
        if(!daystime[day].find(e=>e===hour)){
            setDt({...daystime, 
            [day]: [...daystime[day], hour]})
        }
    };

    const handleClick= ()=>{
        const app=[]
        for (let key in daystime){
            daystime[key].forEach(t=> app.push(date(key, t, userId)))
        }
        let app1= app.flat()

        if(app1.length===0){
            return Swal.fire({
                title: '¡Error!',
                text: 'Debes agregar tus turnos',
                icon:'warning',
                confirmButtonColor: "#FF214F",
                allowOutsideClick:false,
            })
        }
        addtoSchedule(app1)
        setDt({Mon:[], Tue:[], Wed:[], Thu:[], Fri:[], Sat:[], Sun:[]});
        
        return Swal.fire({
                title: '¡Realizado exitosamente!',
                text: 'Turnos agregados a tu agenda',
                icon:'success',
                confirmButtonColor: "#FF214F",
                allowOutsideClick:false,
            })
    };
    
    const handleClickFilt= (e)=>{
        const {name, value}= e.target
        setDt({...daystime,
            [name]: daystime[name].filter(t=>t!==value)})
    };

    return (
    <div>
        <div className='padd-md-b font-main text-bold text-center- font-xl border-bottom-color-main'>
            Configura tu agenda
        </div>
        <div className='padd-md-b font-main text-bold text-center- font-lg margin-bottom-xl py-2'>
            Aquí puedes configurar tus turnos. Selecciona los horarios según cada día de la semana y presiona "Confirmar" para agregar los turnos a tu agenda.
        </div>
        <div className="padd-md-b w-full px-3 flex flex-row justify-center divide-x h-80 mt-2">
        {days.map((d)=>{
            return (
            <div key={days.indexOf(d)} className="py-2 px-6 flex flex-col">
                <div className="flex flex-col justify-center divide-y h-10">
                    <p className="flex justify-center text-lg mb-1">{d}</p> 
                    <DatePicker
                        selected={new Date(2021,1,days.indexOf(d)+1, 8)}
                        onChange={(date) => onChangeTime(date)}
                        showTimeSelect
                        showTimeSelectOnly
                        className="shadow appearance-none border rounded w-24 py-1 px-3 text-gray-700 leading-tight focus:outline-none flex justify-center focus:shadow-outline"
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                    />
                </div>
                <ul className="flex flex-col mt-6">
                    {daystime[deng[d]].map(e=>{
                        return (<li className="px-2 py-1 flex justify-center" key={daystime[deng[d]].indexOf(e)}>
                               {e} <button className="bg-white w-1 mt-0.5 flex justify-center items-center h-5 hover:bg-gray-100 text-gray-800 font-semibold px-2 border border-gray-400 rounded mx-2"
                                    onClick={handleClickFilt} name={deng[d]} value={e}
                                    >x</button>
                            </li>
                        )
                    })}
                </ul>
            </div>)
        })}
        </div>
        <div className="flex justify-center mt-2">
            <button onClick={handleClick} className="btn-prof w-24 my-2 mr-3"><span>Confirmar</span></button>
            
        </div>
    </div>
  )
}


function date (day, time, userId) {
    const dnum= {
      Sun:0, Mon:1, Tue:2, Wed:3, Thu:4, Fri:5, Sat:6
    }
    let a= new Date()
    let d = new Date(),
    year = d.getYear(),
    days = [];
    d.setDate(dnum[day]);
    const months= ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    // Get all the other Mondays in the month
    while (d.getYear() === year) {
        var pushDate = new Date(d.getTime());
        if(a.getMonth()=== pushDate.getMonth() && a.getDate()<pushDate.getDate()){
          days.push({date: day + " "+ months[(pushDate.getMonth())] + " " + ('0' + pushDate.getDate()).slice(-2) + " " + pushDate.getFullYear() + " " +time,
                    userId:userId,
                    availavility:true
        });
        }
        else if (a.getMonth() !== pushDate.getMonth()){
          days.push({date: day + " "+ months[(pushDate.getMonth())] + " " + ('0' + pushDate.getDate()).slice(-2) + " " + pushDate.getFullYear() + " " +time,
                    userId:userId,
                    availavility:true
                    });
        }
        d.setDate(d.getDate() + 7);
    }
    return days
  }
