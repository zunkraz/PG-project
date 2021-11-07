import React, {useEffect} from "react";
import * as FaIcons from 'react-icons/fa';
import BasicForm from "./BasicForm";
import {useDispatch, useSelector} from "react-redux";
import {deleteAdminTip,putAdminTip,getAdminTips} from "../../../Controllers/actions/adminActions";

function TipDashboard({isAdmin, token}){
  const dispatch = useDispatch();
  const allTips = useSelector(state=>state.adminReducer.adminTips);
  const tipDeleted = useSelector(state=>state.adminReducer.tipDeleted);
  const tipModified = useSelector(state=>state.adminReducer.tipModified);
  const tipPosted = useSelector(state=>state.adminReducer.tipPosted);

  function handleTipDelete(id){
    dispatch(deleteAdminTip(id));
  }
  function handleTipChange(status,id){
    dispatch(putAdminTip({isApproved:!status},id,{isAdmin, token}))
  }
  useEffect(()=>{
    dispatch(getAdminTips({isAdmin, token}));
  },[tipPosted, tipDeleted, tipModified, dispatch, isAdmin, token]);
  useEffect(()=>{
    if(!allTips.length) dispatch(getAdminTips({isAdmin, token}));
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
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Estado
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium whitespace-nowrap text-gray-500 uppercase tracking-wider">
                    Cambiar estado
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Borrar
                  </th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {allTips && allTips.map(t=> {
                  return (<tr key={t._id}>
                    <td className="px-6 py-2 whitespace-wrap">
                      <div className="text-sm font-normal text-gray-900">
                        {t.text}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-left">
                      {t.isApproved?
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-200 text-gray-800">
                    Aprobado </span> :
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-200 text-gray-800">
                    No aprobado</span>}
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap text-center text-sm font-medium">
                      <button onClick={()=>handleTipChange(t.isApproved,t._id)}><FaIcons.FaRedo/></button>
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap text-center text-sm font-medium">
                      <button onClick={()=>handleTipDelete(t._id)}><FaIcons.FaRegTrashAlt/></button>
                    </td>
                  </tr>)
                })}
                </tbody>
              </table>
            </div></div></div></div>
      <BasicForm component={"tips"}/>
    </div>
  )
}

export default TipDashboard;