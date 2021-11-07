import React, {useState} from 'react'
import Swal from 'sweetalert2'

const ReportProblem = () => {

const [report, setReport] = useState('');
const [error, setError] = useState(false);

const handleChange = e => {
    setReport(e.target.value);
}
const handleSubmit = e => {
    e.preventDefault();
    if(report.trim() === ''){
       return setError(true);
    }
    setError(false);
    setReport('');
   
    return Swal.fire({
        title: '¡Enviado!',
        text: 'Nos contactaremos contigo',
        icon:'success',
        confirmButtonColor: "#e83454", 
    }
    )
}

    return (  
        <div className='m-24'>
            <form onSubmit={handleSubmit}>
            <div className="flex flex-col">

            <label className="leading-loose text-2xl text-center"> Describe tu problema aquí y te contactaremos en breve</label>
            <textarea
                className="form-textarea mt-1 block w-full border-2"
                rows="8"
                placeholder="Describe tu problema aquí."
                onChange={handleChange}
                value={report}
                ></textarea>  
            </div>
               
            <div className="pt-4 flex items-center space-x-4">
                    <button className="bg-primary  hover:bg-red-500 transition duration-300 ease-in-out flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                    type='submit'
                    >Crear Reporte</button>
            </div>
            {
                error && <h2>La descripción no puede estar vacía</h2> 
            }
            </form>
        </div>
    );
}
 
export default ReportProblem;

//PENDIENTE CONECTAR LA RUTA DEL REPORTE AL BACK