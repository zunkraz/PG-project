import React, {useEffect} from 'react';
import UserRow from "../Components/UserRow/UserRow";
import {getAdminUsers} from '../../Controllers/actions/adminActions';
import {useDispatch, useSelector} from "react-redux";

function AdminPanel(){
  const dispatch = useDispatch();
  const usersAdmin = useSelector(state=>state.adminReducer.adminUsers);
  const userDeleted = useSelector(state=>state.adminReducer.userDeleted);
  const userModified = useSelector(state=>state.adminReducer.userModified);
  useEffect(()=>{
  dispatch(getAdminUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[userDeleted,userModified]);

  //const userOnPage = useSelector(state=>state.sessionReducer.status); descomentar cuando ya este implementado
  const userLoggedIn = {isAdmin:true};

  if (userLoggedIn.isAdmin) return (
    <div>
      <h1 className='uk-padding text-bold font-main font-1x'>Panel de Administrador</h1>
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
                Correo electrónico
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
              {usersAdmin.map(u=> <UserRow key={u._id} user={u}/>)}
          </table>
        </div></div></div></div></div>);
  else {
    return <div><h1 className='uk-padding text-bold font-main font-1x'>404</h1></div>
  }
}

export default AdminPanel;