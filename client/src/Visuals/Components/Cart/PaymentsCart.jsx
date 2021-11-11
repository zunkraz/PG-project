import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux';
import { getCartInfo } from '../../../ApiReq/cart';

const PaymentsCart =  () => {
  const customerId = useSelector(state => state.sessionReducer.status.id)
 const [render, setRender] = useState([])
    
 useEffect( () => {
  const payRender =   getCartInfo(customerId)
  payRender.then(data => setRender(data))
  },[])
  console.log(render.length)

    return ( 
        <div>
      <table className="min-w-full table-auto">
        <thead className="justify-between">
          <tr className="bg-primary">
           
            <th className="px-16 py-2">
              <span className="text-gray-300">Contratados</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-300">Precio</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-300">Fecha</span>
            </th>

            <th className="px-16 py-2">
              <span className="text-gray-300">Sessiones (30 min)</span>
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
              <span className="text-center ml-4 font-semibold">{e.description}</span>
            </td>
            <td className="px-16 py-2">
                $ {e.totalCost}
            </td>
            <td className="px-16 py-2">
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
      <h1>NADA</h1>
      }
        </tbody>
      </table>
    </div>
     );
}
 
export default PaymentsCart;

