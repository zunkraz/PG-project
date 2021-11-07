import React, {useEffect} from "react";
import * as FaIcons from 'react-icons/fa';
import {useDispatch, useSelector} from "react-redux";
import {deleteAdminReview,putAdminReview,getAdminReviews} from "../../../Controllers/actions/adminActions";

function ReviewDashboard({isAdmin, token}){
  const dispatch = useDispatch();
  const allReviews = useSelector(state=>state.adminReducer.adminReviews);
  const reviewDeleted = useSelector(state=>state.adminReducer.reviewDeleted);
  const reviewModified = useSelector(state=>state.adminReducer.reviewModified);

  function handleReviewDelete(id){
    dispatch(deleteAdminReview(id));
  }
  function handleReviewChange(status,id){
    dispatch(putAdminReview({rate:status==="Good"?"Bad":"Good"},id,{isAdmin, token}))
  }
  useEffect(()=>{
    dispatch(getAdminReviews({isAdmin, token}));
  },[reviewDeleted, reviewModified, dispatch, isAdmin, token]);
  useEffect(()=>{
    if(!allReviews.length) dispatch(getAdminReviews({isAdmin, token}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div className="flex items-start mrg-2x-b">
      <div className="flex flex-col ">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-3">
          <div className="py-2 align-middle inline-block min-w-min sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Texto
                  </th>
                  <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Autor
                  </th>
                  <th scope="col" className="px-2 py-3 text-left text-xs font-medium whitespace-nowrap text-gray-500 uppercase tracking-wider">
                    Calificación
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium whitespace-nowrap text-gray-500 uppercase tracking-wider">
                    Cambiar calificación
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Borrar
                  </th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {allReviews && allReviews.map(r => {
                  return (<tr key={r._id}>
                    <td className="px-6 py-2 whitespace-wrap">
                     <div className="text-sm font-normal text-gray-900">
                          {r.text}
                        </div>
                    </td>
                    <td className="text-sm text-left font-medium text-gray-900">
                      {r.userId!==null?r.userId.username:'anónimo'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-left">
                      {r.rate==="Good"?
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-200 text-gray-800">
                    Bueno </span> :
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-200 text-gray-800">
                    Malo</span>}
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap text-center text-sm font-medium">
                      <button onClick={()=>handleReviewChange(r.rate,r._id)}><FaIcons.FaRedo/></button>
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap text-center text-sm font-medium">
                      <button onClick={()=>handleReviewDelete(r._id)}><FaIcons.FaRegTrashAlt/></button>
                    </td>
                  </tr>)
                })}
                </tbody>
              </table>
            </div></div></div></div>
    </div>
  )
}
export default ReviewDashboard;