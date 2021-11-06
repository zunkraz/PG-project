import React from 'react'
import PaymentsSupport from '../Components/SuportComponents/PaymentsSupport';
import ReportProblem from '../Components/SuportComponents/ReportProblem';
import ServicesSupport from '../Components/SuportComponents/ServicesSupport';
import SuggestionsSupport from '../Components/SuportComponents/SuggestionsSupport';
import PrivacySupport from '../Components/SuportComponents/PrivacySupport';

const Supports = () => {
    return ( 


        <div className='grid grid-cols-6'>
            <div className=' ml-1 col-start-0 col-end-2  shadow-2xl'>
                <aside className='flex flex-wrap justify-center '>
                    <h1 className='text-2xl text-center mt-2'>Selecciona una Categoría</h1>
                    <button className=' mt-2 w-full bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 transition duration-300 ease-in-out hover:bg-red-600' type='button'>Servicios</button>
                    <button className=' mt-2 w-full bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 transition duration-300 ease-in-out hover:bg-red-600' type='button'>Sugerencias</button>
                    <button className=' mt-2 w-full bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 transition duration-300 ease-in-out hover:bg-red-600' type='button'>Sobre los Pagos</button>
                    <button className=' mt-2 w-full bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 transition duration-300 ease-in-out hover:bg-red-600' type='button'>Políticas y Privacidad</button>
                    <button className=' mt-2 w-full bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 transition duration-300 ease-in-out hover:bg-red-600' type='button'>Reportar un Problema</button>
                    <button className=' mt-2 w-full bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 transition duration-300 ease-in-out hover:bg-red-600 mb-3' type='button'>Volver al inicio</button>
                </aside>
            </div>

            <div className='col-start-2 col-end-7 flex justify-center'>
                <article className='w-full mt-7'>
                    <PaymentsSupport />
                    {/* <ReportProblem />
                    <ServicesSupport />
                    <SuggestionsSupport />
                    <PrivacySupport /> */}
                </article>

            </div>
        </div>
     );
}
 
export default Supports;