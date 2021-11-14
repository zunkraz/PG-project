import React from "react";
import * as FaIcons from "react-icons/fa";
import Swal from "sweetalert2";
import {useDispatch} from "react-redux";
import {deleteAdminReview, putAdminReview} from "../../../Controllers/actions/adminActions";

function ReviewDashboardItem({review,token}){
  const dispatch = useDispatch();

  function handleReviewDelete(id){
    return Swal.fire({
      text:`Desea borrar a esta opinión? Esta acción no se puede deshacer.`,
      icon: 'question',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si',
      confirmButtonColor: "rgba(232,52,84,0.84)",
      cancelButtonColor: "#8c8f9a",
    }).then(result=>{
      if(result.isConfirmed){
        dispatch(deleteAdminReview(id,token));
        Swal.fire({
          text:`Eliminada.`,
          icon:'error',
          confirmButtonColor: "rgba(232,52,84,0.84)"})
      }})
  }
  function handleReviewChange(status,id){
    return Swal.fire({
      text:`Desea cambiar la calificación?`,
      icon: 'question',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si',
      confirmButtonColor: "rgb(165 220 134)",
      cancelButtonColor: "#8c8f9a",
    }).then(result => {
      if(result.isConfirmed){
        dispatch(putAdminReview({rate:status==="Good"?"Bad":"Good"},id,token))
        Swal.fire({
          text:`Calificación cambiada.`,
          icon:'success',
          confirmButtonColor: "rgb(165 220 134)"})
      }})
  }

    return (<tr>
      <td className="px-6 py-2 whitespace-wrap">
        <div className="text-sm font-normal text-gray-900">
          {review.text}
        </div>
      </td>
      <td className="text-sm text-left font-medium text-gray-900">
        {review.userId!==null?review.userId.username:'anónimo'}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-left">
        {review.rate==="Good"?
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-200 text-gray-800">
                    Bueno </span> :
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-200 text-gray-800">
                    Malo</span>}
      </td>
      <td className="px-5 py-4 whitespace-nowrap text-center text-sm font-medium">
        <button onClick={()=>handleReviewChange(review.rate,review._id)}><FaIcons.FaRedo/></button>
      </td>
      <td className="px-5 py-4 whitespace-nowrap text-center text-sm font-medium">
        <button onClick={()=>handleReviewDelete(review._id)}><FaIcons.FaRegTrashAlt/></button>
      </td>
    </tr>)
}

export default ReviewDashboardItem;