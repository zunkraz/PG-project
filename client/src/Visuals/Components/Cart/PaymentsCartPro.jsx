import React from 'react'

const PaymentsCartPro = ({render}) => {

    return ( 
    <div>
              <table className="min-w-full table-auto">
            <thead className="justify-between">
            <tr className="bg-primary">
            
                <th className="px-16 py-2">
                <span className="text-gray-300">Clientes</span>
                </th>
                <th className="px-16 py-2">
                <span className="text-gray-300">Fecha de cita</span>
                </th>
                <th className="px-16 py-2">
                <span className="text-gray-300">Fecha para cobro</span>
                </th>

                <th className="px-16 py-2">
                <span className="text-gray-300">Costo Total</span>
                </th>
                <th className="px-16 py-2">
                <span className="text-gray-300">Estado</span>
                </th>
                <th className="px-16 py-2">
                <span className="text-gray-300">Orden de Pago</span>
                </th>
            </tr>
            </thead>
            <tbody>
            {render.length !== 0 ? render.map((e,index) => {
            let Render = 
            <tr  key={index} className="bg-white border-4 border-gray-200">
                <td>
                <span className="text-center ml-4 font-semibold">{e.customerId.username}</span>
                </td>
                <td className="px-16 py-2 text-center">
                <span>{e.schedules[0].date.dayNumber} de {e.schedules[0].date.month} del {e.schedules[0].date.year} </span>
                </td> 
                <td className="px-16 py-2">
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
        <h1>No hay Facturas que mostrar Profesional</h1>
        }
            </tbody>
        </table>

            <div>
                <input 
                type="button"
                value= 'Solicitar cobro'
                />
            </div>
    </div>
     );
}
 
export default PaymentsCartPro;