import React from 'react'
import PaymentsSupport from '../Components/SuportComponents/PaymentsSupport';
import ReportProblem from '../Components/SuportComponents/ReportProblem';
import ServicesSupport from '../Components/SuportComponents/ServicesSupport';
import SuggestionsSupport from '../Components/SuportComponents/SuggestionsSupport';
import PrivacySupport from '../Components/SuportComponents/PrivacySupport';
import { Link, Route, Switch  } from 'react-router-dom';

const Supports = () => {
    return ( 


        <div className='grid grid-cols-6'>
            <div className=' ml-1 col-start-0 col-end-2  shadow-2xl'>
                <aside className='flex flex-wrap justify-center '>
                    <h1 className='text-2xl text-center mt-2'>Selecciona una Categoría</h1>
                    <div className='flex flex-col'>

                    <Link to='/soporte/servicios'>
                        <button className='rounded-md  mt-2 w-full bg-primary  font-bold py-2 px-4 transition duration-300 ease-in-out' type='button'>Servicios</button>
                    </Link>
                    <Link to='/soporte/sugerencias'>
                        <button className='rounded-md mt-2 w-full bg-primary  font-bold py-2 px-4 transition duration-300 ease-in-out' type='button'>Sugerencias</button>
                    </Link>
                    <Link to='/soporte/pagos'>
                        <button className='rounded-md mt-2 w-full bg-primary  font-bold py-2 px-4 transition duration-300 ease-in-out' type='button'>Sobre los Pagos</button>
                    </Link>
                    <Link to='/soporte/politicas'>
                        <button className='rounded-md mt-2 w-full bg-primary  font-bold py-2 px-4 transition duration-300 ease-in-out' type='button'>Políticas y Privacidad</button>
                    </Link>
                    <Link to='/soporte/reporte'>
                        <button className='rounded-md  mt-2 w-full bg-primary  font-bold py-2 px-4 transition duration-300 ease-in-out' type='button'>Reportar un Problema</button>
                    </Link>
                    <Link to='/'>
                        <button className=' rounded-md  mt-2 w-full bg-primary font-bold py-2 px-4 transition duration-300 ease-in-out mb-3' type='button'>Volver al inicio</button>
                    </Link>
                    </div>
                </aside>
            </div>

            <div className='col-start-2 col-end-7 flex justify-center'>
                <article className='w-full mt-7'>
                    <Switch>
                    <Route exact path='/soporte/pagos'>
                        <PaymentsSupport />
                    </Route>
                    <Route exact path='/soporte/reporte'>
                        <ReportProblem />
                    </Route>
                    <Route exact path='/soporte/servicios'>
                        <ServicesSupport />
                    </Route>
                    <Route exact path='/soporte/sugerencias'>
                        <SuggestionsSupport />
                    </Route>
                    <Route exact path='/soporte/politicas'>
                        <PrivacySupport />
                    </Route>
                    </Switch>
                </article>

            </div>
        </div>
     );
}
 
export default Supports;