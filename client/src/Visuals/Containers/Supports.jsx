import React from 'react'
import PaymentsSupport from '../Components/SuportComponents/PaymentsSupport';
import ReportProblem from '../Components/SuportComponents/ReportProblem';
import ServicesSupport from '../Components/SuportComponents/ServicesSupport';
import SuggestionsSupport from '../Components/SuportComponents/SuggestionsSupport';
import PrivacySupport from '../Components/SuportComponents/PrivacySupport';

const Supports = () => {
    return ( 

        <div className='grid grid-cols-6 bg-gray-400'>
            <div className='bg-green-400 col-start-0 col-end-2'>
                <aside className='flex flex-wrap justify-center'>
                    <h1 className='text-2xl text-center mt-2'>Selecciona una Categoría</h1>
                    <button className=' mt-1 w-4/5 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' type='button'>Servicios</button>
                    <button className=' mt-1 w-4/5 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' type='button'>Sugerencias</button>
                    <button className=' mt-1 w-4/5 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' type='button'>Sobre los Pagos</button>
                    <button className=' mt-1 w-4/5 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' type='button'>Políticas y Privacidad</button>
                    <button className=' mt-1 w-4/5 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' type='button'>Reportar un Problema</button>
                    <button className=' mt-1 w-4/5 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-3' type='button'>Volver al inicio</button>
                </aside>
            </div>

            <div className='bg-blue-400 col-start-2 col-end-7 flex justify-center'>
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