import React from "react";
import * as FaIcons from "react-icons/fa";
import Swal from "sweetalert2";
import {deleteAdminTip, putAdminTip} from "../../../Controllers/actions/adminActions";
import {useDispatch} from "react-redux";

function TipDashboardItem({tip,tipCateg,token}){
  const dispatch = useDispatch();

  function handleTipDelete(id){
    return Swal.fire({
      text:`Desea borrar este tip? Esta acción no se puede deshacer.`,
      icon: 'question',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si',
      confirmButtonColor: "rgba(232,52,84,0.84)",
      cancelButtonColor: "#8c8f9a",
    }).then(result=>{
      if(result.isConfirmed){
        dispatch(deleteAdminTip(id, token));
        Swal.fire({
          text:`Tip eliminado.`,
          icon:'error',
          confirmButtonColor: "rgba(232,52,84,0.84)"})}})
  }
  function handleTipChange(status,id){
    return Swal.fire({
      text:`Desea ${!status?'aprobar':'desaprobar'} este tip? Si ${status?'no':''} está aprobado ${status?'no':''} se mostrará en la página.`,
      icon: 'question',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: `${!status?'Aprobar':'Desaprobar'}`,
      confirmButtonColor: `${!status?'rgb(165 220 134)':'rgba(232,52,84,0.84)'}`,
      cancelButtonColor: "#8c8f9a",
    }).then(result=>{
      if(result.isConfirmed){
        dispatch(putAdminTip({isApproved:!status}, id, token));
        Swal.fire({
          text:`Estado cambiado.`,
          icon:'success',
          confirmButtonColor: "rgb(165 220 134)"})}})
  }

  return (
    <tr>
      <td className="px-6 py-2 whitespace-wrap">
        <div className="text-sm font-normal text-gray-900">
          {tip.text}
        </div>
      </td>
      {tipCateg==="Todas"?<td className="px-6 py-4 whitespace-nowrap text-left">
          {tip.categoryId?
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-400 text-gray-800">
                    {tip.categoryId.name} </span> :
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-400 text-gray-800">
                    No TIENE</span>}
        </td>
        :<td/>}
      <td className="px-6 py-4 whitespace-nowrap text-left">
        {tip.isApproved?
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-200 text-gray-800">
                    Aprobado </span> :
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-200 text-gray-800">
                    No aprobado</span>}
      </td>
      <td className="px-5 py-4 whitespace-nowrap text-center text-sm font-medium">
        <button onClick={()=>handleTipChange(tip.isApproved,tip._id)}><FaIcons.FaRedo/></button>
      </td>
      <td className="px-5 py-4 whitespace-nowrap text-center text-sm font-medium">
        <button onClick={()=>handleTipDelete(tip._id)}><FaIcons.FaRegTrashAlt/></button>
      </td>
    </tr>)
}

export default TipDashboardItem;