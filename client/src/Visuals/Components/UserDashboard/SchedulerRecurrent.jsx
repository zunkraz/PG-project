import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import { addtoSchedule } from "../../../ApiReq/schedule";
import 'react-datepicker/dist/react-datepicker.css';

export default function SchedulerRecurrent ({userId, onCancel}){
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
    }

    const handleClick= ()=>{
        const app=[]
        for (let key in daystime){
            daystime[key].forEach(t=> app.push(date(key, t, userId)))
        }
        let app1= app.flat()
        if(app1.length===0){return alert("Tu agenda esta vacía")}
        alert('¡Hecho! Tus horarios han sido guardados')
        addtoSchedule(app1)
        onCancel()
    }
    
    const handleClickFilt= (e)=>{
        const {name, value}= e.target
        setDt({...daystime,
            [name]: daystime[name].filter(t=>t!==value)})
    }

    return (
    <div>
        <p className="flex justify-center pb-5 text-2xl">Fija tu agenda</p>
        <div className="w-full px-3 flex flex-row divide-x h-80">
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
            <button className="my-2 w-24 border-radius-sm action action-user-dashboard-cancel" onClick={onCancel}><span>Cancelar</span></button>
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

//   <input type="checkbox" className="w-6 inline mt-2" name={d} onClick={showTimePicker}/> 
/* Lunes <input type="checkbox" name="Lunes" onClick={showTimePicker}/> 
        {showTime.Lunes ? <DatePicker
                    selected={new Date(2021,1,1)}
                    onChange={(date) => onChangeTime(date)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                />: null}
        
        Martes <input type="checkbox" name="Martes" onClick={showTimePicker}/>
        {showTime.Martes ? <DatePicker
                    selected={new Date(2021,1,2)}
                    onChange={(date) => onChangeTime(date)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                />: null}
        Miercoles <input type="checkbox" name="Miercoles" onClick={showTimePicker}/>
        Jueves <input type="checkbox" name="Jueves" onClick={showTimePicker}/>
        Viernes <input type="checkbox" name="Viernes" onClick={showTimePicker}/>
        Sabado <input type="checkbox" name="Sabado" onClick={showTimePicker}/> */