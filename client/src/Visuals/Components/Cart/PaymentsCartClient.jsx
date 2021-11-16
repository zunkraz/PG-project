import React from 'react'

const PaymentsCartClient = ({render}) => {
    return ( 
        <div className='mt-4 mb-8 mx-auto shadow-xl w-11/12 table-auto'>
            <table className="min-w-full table-auto">
            <thead className="justify-between">
            <tr className="bg-primary">
            
                <th className="px-8 py-2">
                <span className="text-gray-300">Contratados</span>
                </th>
                <th className="px-8 py-2">
                <span className="text-gray-300">Precio</span>
                </th>
                <th className="px-8 py-2">
                <span className="text-gray-300">Fecha</span>
                </th>

                <th className="px-8 py-2">
                <span className="text-gray-300">Sesiones (30 min)</span>
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
            let Render = 
            <tr  key={index} className="bg-white border-4 border-gray-200">
                <td>
                <span className="text-center ml-4 font-semibold">{e.description}</span>
                </td>
                <td className="px-16 py-2">
                    $ {e.totalCost}
                </td>
                <td className="px-8 py-2">
                <span>{e.date.slice(0,10)}</span>
                </td>
                <td className="px-16 py-2 text-center">
                <span>{e.numberOfSessions}</span>
                </td>

                <td className="px-16 py-2">
                <span className="text-green-500">
                    Pagado
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
        null
        }
            </tbody>
        </table>
        <div className='flex justify-center'>
            {render.length === 0 && <h1 className=' my-4 text-2xl'>No hay Facturas que mostrar</h1>}
        </div>
        </div>
     );
}
 
export default PaymentsCartClient;