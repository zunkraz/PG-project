import UserRow from "./UserRow";
import React, {useState} from "react";
import * as FaIcons from 'react-icons/fa';

function UserTable({usersAdmin}){
  const sortFunctions = {

  }
  return (
<div className="flex flex-col ">
  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-3">
    <div className="py-2 align-middle inline-block min-w-min sm:px-6 lg:px-8">
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div className="flex flex-row mr-4 "> Nombre de usuario <FaIcons.FaLongArrowAltUp/> <FaIcons.FaLongArrowAltDown/></div>
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div className="flex flex-row mr-4 "> Correo electrónico <FaIcons.FaLongArrowAltUp/> <FaIcons.FaLongArrowAltDown/></div>
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div className="flex flex-row mr-4 "> Rol <FaIcons.FaLongArrowAltUp/> <FaIcons.FaLongArrowAltDown/></div>
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div className="flex flex-row mr-4 "> Tipo de usuario <FaIcons.FaLongArrowAltUp/> <FaIcons.FaLongArrowAltDown/></div>
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Borrar
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Reset password
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Cambiar rol
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Editar
            </th>
          </tr>
          </thead>
          {usersAdmin.sort().map(u=> <UserRow key={u._id} user={u}/>)}
        </table>
      </div></div></div></div>
  )
}
export default UserTable;