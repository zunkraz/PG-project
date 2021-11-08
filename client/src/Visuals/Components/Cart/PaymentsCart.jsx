import React from 'react'
import { FaBackspace } from 'react-icons/fa';


const PaymentsCart = () => {
    
    return ( 
        <div>
      <table className="min-w-full table-auto">
        <thead className="justify-between">
          <tr className="bg-primary">
            <th className="px-16 py-2">
              <span className="text-gray-300"></span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-300">Descripcion</span>
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
              <span className="text-gray-300">Codigo</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-blue-600">
          <tr className="bg-white border-4 border-gray-200">
            <td class="px-16 py-2 flex flex-row items-center">
              <img
                class="h-8 w-8 rounded-full object-cover "
                src="https://randomuser.me/api/portraits/men/30.jpg"
                alt=""
              />
            </td>
            <td>
              <span className="text-center ml-4 font-semibold">Dean Lynch</span>
            </td>
            <td className="px-16 py-2">
                10$
            </td>
            <td className="px-16 py-2">
              <span>05/06/2020</span>
            </td>
            <td className="px-16 py-2">
              <span>1</span>
            </td>

            <td className="px-16 py-2">
              <span className="text-green-500">
                Pagado
              </span>
            </td>

            <td className="px-16 py-2">
              <span>
                123456
              </span>
            </td>
          </tr>

          {/* BORRAR BORRAR BORRAR BORRRAR BORRAR BORRAR BORRAR BORRRAR BORRAR BORRAR BORRAR BORRRAR */}

          <tr className="bg-white border-4 border-gray-200">
            <td class="px-16 py-2 flex flex-row items-center">
              <img
                class="h-8 w-8 rounded-full object-cover "
                src="https://randomuser.me/api/portraits/women/25.jpg"
                alt=""
              />
            </td>
            <td>
              <span className="text-center ml-4 font-semibold">Pepita perez</span>
            </td>
            <td className="px-16 py-2">
                10$
            </td>
            <td className="px-16 py-2">
              <span>06/06/2020</span>
            </td>
            <td className="px-16 py-2">
              <span>1</span>
            </td>

            <td className="px-16 py-2">
              <span className="text-green-500">
                Pagado
              </span>
            </td>

            <td className="px-16 py-2">
              <span>
                123456
              </span>
            </td>
          </tr>

          <tr className="bg-white border-4 border-gray-200">
            <td class="px-16 py-2 flex flex-row items-center">
              <img
                class="h-8 w-8 rounded-full object-cover "
                src="https://randomuser.me/api/portraits/men/31.jpg"
                alt=""
              />
            </td>
            <td>
              <span className="text-center ml-4 font-semibold">Daniel Dhers</span>
            </td>
            <td className="px-16 py-2">
                10$
            </td>
            <td className="px-16 py-2">
              <span>05/06/2020</span>
            </td>
            <td className="px-16 py-2">
              <span>2</span>
            </td>

            <td className="px-16 py-2">
              <span className="text-green-500">
                Pagado
              </span>
            </td>

            <td className="px-16 py-2">
              <span>
                123456
              </span>
            </td>
          </tr>

          <tr className="bg-white border-4 border-gray-200">
            <td class="px-16 py-2 flex flex-row items-center">
              <img
                class="h-8 w-8 rounded-full object-cover "
                src="https://randomuser.me/api/portraits/women/15.jpg"
                alt=""
              />
            </td>
            <td>
              <span className="text-center ml-4 font-semibold">Santiago Maligno</span>
            </td>
            <td className="px-16 py-2">
                10$
            </td>
            <td className="px-16 py-2">
              <span>05/06/2020</span>
            </td>
            <td className="px-16 py-2">
              <span>3</span>
            </td>

            <td className="px-16 py-2">
              <span className="text-green-500">
                Pagado
              </span>
            </td>

            <td className="px-16 py-2">
              <span>
                123456
              </span>
            </td>
          </tr>

          <tr className="bg-white border-4 border-gray-200">
            <td class="px-16 py-2 flex flex-row items-center">
              <img
                class="h-8 w-8 rounded-full object-cover "
                src="https://randomuser.me/api/portraits/women/70.jpg"
                alt=""
              />
            </td>
            <td>
              <span className="text-center ml-4 font-semibold">Helen Chufa</span>
            </td>
            <td className="px-16 py-2">
                10$
            </td>
            <td className="px-16 py-2">
              <span>05/06/2020</span>
            </td>
            <td className="px-16 py-2">
              <span>2</span>
            </td>

            <td className="px-16 py-2">
              <span className="text-green-500">
                Pagado
              </span>
            </td>

            <td className="px-16 py-2">
              <span>
                123456
              </span>
            </td>
          </tr>
         
        </tbody>
      </table>
    </div>
     );
}
 
export default PaymentsCart;

