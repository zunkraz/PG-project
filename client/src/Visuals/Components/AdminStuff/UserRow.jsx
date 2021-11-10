import React from 'react';
import {useDispatch} from "react-redux";
import {delAdminUser, putAdminUser} from '../../../Controllers/actions/adminActions';
import * as FaIcons from "react-icons/fa";
import Swal from 'sweetalert2';

function UserRow({user, isAdmin, token}){
  const dispatch = useDispatch();

  function handleUserDelete(username){
    return Swal.fire({
      text:`Desea borrar a ${username}? Esta acción no se puede deshacer.`,
      icon: 'question',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si',
      confirmButtonColor: "rgba(232,52,84,0.84)",
      cancelButtonColor: "#8c8f9a",
    }).then(result=>{
      if(result.isConfirmed){
        dispatch(delAdminUser(username));
        Swal.fire({
          text:`${username} eliminado.`,
          icon:'error',
          confirmButtonColor: "rgba(232,52,84,0.84)"})}})
  }
  function handleResetPassword(username){
    return Swal.fire({
      text:`Desea resetear el password de ${username}?`,
      icon: 'question',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si',
      confirmButtonColor: "rgb(165 220 134)",
      cancelButtonColor: "#8c8f9a",
    }).then(result => {
      if(result.isConfirmed){
        dispatch(putAdminUser(username, {password: '123456'}, {isAdmin, token}));
        Swal.fire({
          text:`Password cambiado.`,
          icon:'success',
          confirmButtonColor: "rgb(165 220 134)"})}})
  }
  function handleChangeRole(username,isAdmin){
    return Swal.fire({
      text:`Desea cambiar el rol de ${username}?`,
      icon: 'question',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si',
      confirmButtonColor: "rgb(165 220 134)",
      cancelButtonColor: "#8c8f9a",
  }).then(result => {
      if (result.isConfirmed) {
        if (isAdmin) dispatch(putAdminUser(username, {isAdmin: false}));
        else dispatch(putAdminUser(username, {isAdmin: true}));
        Swal.fire({
          text:`${username} ahora es ${isAdmin?'usuario':'administrador'}.`,
          icon:'success',
          confirmButtonColor: "rgb(165 220 134)"})
      }})
  }
  function handleVerifyUser(username,isVerified){
    return Swal.fire({
      text:`Desea ${!isVerified?'aprobar':'desactivar'} la cuenta de ${username}? Si no está verificado no se ofrecerán sus servicios.`,
      icon: 'question',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: `${!isVerified?'Aprobar':'Desactivar'}`,
      confirmButtonColor: `${!isVerified?'rgb(165 220 134)':'rgba(232,52,84,0.84)'}`,
      cancelButtonColor: "#8c8f9a",
    }).then(result=>{
      if(result.isConfirmed){
        dispatch(putAdminUser(username, {isVerified: !isVerified}));
        Swal.fire({
          text:`Estado de cuenta cambiado'}.`,
          icon:'success',
          confirmButtonColor: "rgb(165 220 134)"})}})
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
      {user.isAdmin?
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-200 text-gray-800">
          Admin </span> :
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-200 text-gray-800">
          Usuario</span>}
    </td>
      <td className="px-6 py-4 whitespace-nowrap">
        {user.isProfessional?
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-200 text-gray-800">
          Profesional</span> :
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-pink-300 text-gray-800">
          Cliente</span>}
    </td>
    <td className="px-5 py-4 whitespace-nowrap text-center text-sm font-medium">
      {user.isProfessional?<button onClick={() => handleVerifyUser(user.username, user.isVerified)}>{
        user.isVerified ? <FaIcons.FaCheck color={'green'}/> : <FaIcons.FaTimes color={'red'}/>}</button>:' '}
    </td>
      <td className="px-10 py-4 whitespace-nowrap text-center text-sm font-medium">
        <button onClick={()=>handleResetPassword(user.username)}><FaIcons.FaRedo/></button>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
        <button onClick={()=>handleChangeRole(user.username,user.isAdmin)}><FaIcons.FaUserFriends/></button>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
        <button onClick={()=>handleUserDelete(user.username)}><FaIcons.FaRegTrashAlt/></button>
      </td>
  </tr>
  </tbody>)

}
export default UserRow;