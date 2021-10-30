import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {delAdminUser, getAdminUsers, putAdminUser} from '../../../Controllers/actions/adminActions'

function UserRow({user}){
  const dispatch = useDispatch();
  const userDeleted = useSelector(state=>state.adminReducer.userDeleted);
  const userModified = useSelector(state=>state.adminReducer.userModified);
  useEffect(()=>{
    dispatch(getAdminUsers())
  },[userDeleted,userModified]);

  function handleUserDelete(username){
    return dispatch(delAdminUser(username))
  }
  function handleResetPassword(username){
    return dispatch(putAdminUser(username,{password:'123456'}))
  }
  function handleChangeRole(username,isAdmin){
    if(isAdmin) dispatch(putAdminUser(username,{isAdmin:false}))
    else dispatch(putAdminUser(username,{isAdmin:true}))
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
      <a onClick={()=>handleUserDelete(user.username)} className="text-red-600 hover:text-indigo-900">❌</a>
    </td>
      <td className="px-10 py-4 whitespace-nowrap text-center text-sm font-medium">
        <a onClick={()=>handleResetPassword(user.username)} className="text-indigo-600 hover:text-Green-900">♻</a>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
        <a onClick={()=>handleChangeRole(user.username,user.isAdmin)} className="text-indigo-600 hover:text-purple-900">👥</a>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
        <a onClick={()=>alert('Proximamente')} className="text-indigo-600 hover:text-indigo-900">✏</a>
      </td>
  </tr>
  </tbody>)

}
export default UserRow;