import React, {useState} from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Scheduler(){
    
    const [date, setDate] = useState(new Date());
    const [app, setApp] = useState([])

    const days={
      Mon:"Lunes",
      Tue:"Martes",
      Wed:"Miercoles",
      Thu:"Jueves",
      Fri:"Viernes",
      Sat:"Sabado"
    }
    
    const dateToJSON = (date) => {
      let dateArray = date.toString().split(" ").slice(0, 6)
      console.log(dateArray)
      let dateObj = {
        dayName: days[dateArray[0]],
        month: dateArray[1],
        dayNumber: dateArray[2],
        year: dateArray[3],
        time: dateArray[4],
        timeZone: dateArray[5]
      }
      return dateObj;
    }
    
    const showDate = date =>{
        console.log(dateToJSON(date))
    //   console.log(date)
        if(!app.find(e=>e===date.toString())){
            setApp([...app, date.toString()])
        }
    
    }
    
    
      return (
          <div className="flex flex-col justify-center w-full">
            <div className="flex justify-center">
                <div>
                <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                showTimeSelect
                className="rounded-sm uk-input uk-form-width-medium"
                dateFormat="MMMM d, yyyy h:mm aa"
                />
                </div>
                <div>
                <button
                type="button"
                value="Mostrar Fecha"
                className="uk-button uk-button-danger w-48 uk-margin"
                onClick={() => showDate(date)}
                >Agregar</button>
                </div>
            </div>
            <div className="flex justify-center">
                <ul>
                    {app.map(e=>{
                        return(<li key={app.indexOf(e)}> {e}</li>)
                    })}
                </ul>
            </div>
          </div>
        
      );
    }