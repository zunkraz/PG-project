import React from 'react';
import {useDispatch} from "react-redux";
import {delAdminUser, putAdminUser} from '../../../Controllers/actions/adminActions';

function UserRow({user}){
  const dispatch = useDispatch();

  function handleUserDelete(username){
    if(window.confirm(`Desea eliminar a ${username}?`)) dispatch(delAdminUser(username));
    else console.log('Ok no lo elimino.');
  }
  function handleResetPassword(username){
    if(window.confirm(`Desea resetear el password de ${username}?`)) {
      dispatch(putAdminUser(username, {password: '123456'}));
    } else console.log('Ok no lo cambio.');
  }
  function handleChangeRole(username,isAdmin){
    if(window.confirm(`Desea cambiar el rol de ${username}?`)) {
      if (isAdmin) dispatch(putAdminUser(username, {isAdmin: false}));
      else dispatch(putAdminUser(username, {isAdmin: true}));
    } else console.log('Ok no lo cambio.');
  }

  return (
    <tbody className="bg-white divide-y divide-gray-200">
    <tr>
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="flex items-center">
        <div className="flex-shrink-0 h-10 w-10">
          <img className="h-10 w-10 rounded-full"
               src={user.img || "https://cambodiaict.net/wp-content/uploads/2019/12/computer-icons-user-profile-google-account-photos-icon-account.jpg"} alt=""/>
        </div>
        <div className="ml-4">
          <div className="text-sm font-medium text-gray-900">
            {user.username}
          </div>
          <div className="text-sm text-gray-500">
            {(user.name || '')  + ' ' + (user.lastname || '')}
          </div>
        </div>
      </div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      {user.email}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      {user.isAdmin? 'Admin': 'Usuario' }
    </td>
      <td className="px-6 py-4 whitespace-nowrap">
        {user.isProfessional?
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-green-800">
          Profesional</span> :
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          Regular</span>}
    </td>
    <td className="px-5 py-4 whitespace-nowrap text-center text-sm font-medium">
      <button onClick={()=>handleUserDelete(user.username)}>❌</button>
    </td>
      <td className="px-10 py-4 whitespace-nowrap text-center text-sm font-medium">
        <button onClick={()=>handleResetPassword(user.username)}>♻</button>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
        <button onClick={()=>handleChangeRole(user.username,user.isAdmin)}>👥</button>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
        <button onClick={()=>alert('Próximamente')}>✏</button>
      </td>
  </tr>
  </tbody>)

}
export default UserRow;