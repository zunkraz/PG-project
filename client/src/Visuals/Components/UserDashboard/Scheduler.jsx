import React, {useState} from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addtoSchedule } from "../../../ApiReq/schedule";

export default function Scheduler({userId}){
    
    const [date, setDate] = useState(new Date());
    const [app, setApp] = useState([])
    // const [added, setAdded] = useState(false)
    
    const days={
      Mon:"Lunes",
      Tue:"Martes",
      Wed:"Miercoles",
      Thu:"Jueves",
      Fri:"Viernes",
      Sat:"Sabado"
    }
    
    // const dateToJSON = (date) => {
    //   let dateArray = date.toString().split(" ").slice(0, 6)
    //   console.log(dateArray)
    //   let dateObj = {
    //     dayName: days[dateArray[0]],
    //     month: dateArray[1],
    //     dayNumber: dateArray[2],
    //     year: dateArray[3],
    //     time: dateArray[4],
    //     timeZone: dateArray[5]
    //   }
    //   return dateObj;
    // }

    const showDate = date =>{
        //console.log(dateToJSON(date))
        // console.log(date)
        if(!app || !app.find(e=>e.date===date.toString())){
            setApp([...app, {
                date:date.toString(),
                userId:userId,
                availability:true
            }]
        )
        }
    }

    const handleClickmany=()=>{
        alert("Agregado!")
        console.log(app)
        setApp()
    }
    
    const removeApp=(e)=>{
        setApp(app.filter(d=>d.date!==e.target.name))
    }

    function daySpanish (date) {
        date=date.split(" ").slice(0, 5)
        date[0]= days[date[0]]
        return date.join(" ")
    }
    
      return (
          <div className="flex flex-col justify-center w-1/2 py-4 bg-white shadow-md rounded ">
            <div className="flex justify-center">
                <div>
                <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                showTimeSelect
                className="rounded-sm uk-input uk-form-width-medium mr-3"
                dateFormat="MMMM d, yyyy h:mm aa"
                withPortal
                />
                </div>
                <div>
                <button
                type="button"
                value="Mostrar Fecha"
                className=" padd-md border-radius-sm action action-professional"
                onClick={() => showDate(date)}
                >Agregar</button>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex justify-center py-4">
                    <ul>
                        {app ? app.map(e=>{
                            return(<li key={app.indexOf(e)} className="flex flex-row my-2"> 
                                    <p className="text-lg">{daySpanish(e.date)}</p>
                                    <button name={e.date} onClick={removeApp} className="bg-white w-2 flex justify-center items-center h-7 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mx-2">
                                        X</button>
                                </li>)
                        }) : null}
                    </ul>
                </div><div className="flex justify-center">
                    {app ? (<button className="padd-md border-radius-sm action action-professional" onClick={handleClickmany}>Confirmar</button>):null}
                </div>
            </div>
          </div>
        
      );
    }
