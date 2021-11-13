import React from 'react'

const PaymentsCartPro = ({render}) => {
    let totalProfit  = 0;
    return ( 
    <div>
        <div>

            <table className="mt-4 mx-auto shadow-xl w-11/12 table-auto">
                <thead className="justify-between">
                <tr className="bg-primary">
                
                    <th className="px-8 py-2">
                    <span className="text-gray-300">Clientes</span>
                    </th>
                    <th className="px-8 py-2">
                    <span className="text-gray-300">Fecha de cita</span>
                    </th>
                    <th className="px-8 py-2">
                    <span className="text-gray-300">Fecha para cobro</span>
                    </th>

                    <th className="px-8 py-2">
                    <span className="text-gray-300">Costo Total</span>
                    </th>
                    <th className="px-8 py-2">
                    <span className="text-gray-300">Estado</span>
                    </th>
                    <th className="px-8 py-2">
                    <span className="text-gray-300">Orden de Pago</span>
                    </th>
                </tr>
                </thead>
                <tbody>
                {render.length !== 0 ? render.map((e,index) => {
                    totalProfit = totalProfit + Number(e.profit);
                let Render = 
                <tr  key={index} className="bg-white border-4 border-gray-200">
                    <td>
                    <span className="text-center mx-12 font-semibold">{e.customerId.username}</span>
                    </td>
                    <td className="px-8 py-2 text-center">
                    <span>{e.schedules[0].date.year}-{e.schedules[0].date.shortcut.toString().slice(3,5)}-{e.schedules[0].date.dayNumber} </span>
                    </td> 
                    <td className="px-8 py-2">
                    <span>{e.availableDate.slice(0,10)}</span>
                    </td>
                    <td className="px-16 py-2">
                        $ {e.profit}
                    </td>

                    <td className="px-16 py-2">
                    <span className="text-green-500">
                        Disponible
                    </span>
                    </td>

                    <td className="px-16 py-2">
                    <span>
                        {e.orderID}
                    </span>
                    </td>
                </tr>
                return Render
                })
            :
            <h1>No hay Facturas que mostrar</h1>
            }
                </tbody>
            </table>
            <div className='grid grid-cols-2 mt-8 pb-8 shadow-xl w-11/12'>
               
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded w-2/5 justify-self-center shadow-xl">
            Solicitar Cobro
            </button>

                <h3 className=' text-green-500 font-bold text-center text-3xl'>
                    Monto disponible: $ {totalProfit}
                </h3>
            </div>
        </div>
    </div>
     );
}
 
export default PaymentsCartPro;