import React, {useEffect, useState} from 'react';
import UserRow from "../Components/UserRow/UserRow";
import {getAdminUsers} from '../../Controllers/actions/adminActions'
import {useDispatch, useSelector} from "react-redux";

function AdminPanel(){
  const dispatch = useDispatch()
  const usersAdmin = useSelector(state=>state.adminReducer.adminUsers);
  useEffect(()=>{
    //axios.get(`${BASIC_URL}/admin/users`).then(users => setUsersAdmin(users.data)).catch(err => console.log(err))
  dispatch(getAdminUsers())
  },[]);

  let userOnPage = {isAdmin:true};  //para restringir lo que se muestra(?)

  if (userOnPage.isAdmin) return (
    <div>
      <h1 className='text-bold font-main font-1x'>Panel de Administrador</h1>
      <div className="flex flex-col ">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-3">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nombre de usuario
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Correo electronico
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
               Rol
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tipo de usuario
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
              {usersAdmin.map(u=> <UserRow key={u.username} user={u}/>)}
          </table>
        </div></div></div></div></div>)
  else {
    return <div> <h1 className='text-bold font-main font-1x'>404</h1></div>
  }
}

export default AdminPanel;