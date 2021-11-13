import React, {useEffect} from "react";
import * as FaIcons from 'react-icons/fa';
import BasicForm from "./BasicForm";
import {useDispatch, useSelector} from "react-redux";
import {getAllCategories} from "../../../Controllers/actions/constantInfoActions";
import {deleteAdminCategory,putAdminCategory} from "../../../Controllers/actions/adminActions";
import Swal from 'sweetalert2';

function CategoryDashboard({token}){
  const dispatch = useDispatch();
  const allCategories = useSelector(state=>state.constantInfoReducer.categories);
  const catDeleted = useSelector(state=>state.adminReducer.categoryDeleted);
  const catModified = useSelector(state=>state.adminReducer.categoryModified);
  const catPosted = useSelector(state=>state.adminReducer.categoryPosted);

  function handleCatDelete(name,id){
    return Swal.fire({
          text:`Desea eliminar la categoría ${name}? Esta acción no se puede deshacer.`,
          icon: 'question',
          showCancelButton: true,
          cancelButtonText: 'Cancelar',
          confirmButtonText: 'Si',
          confirmButtonColor: "rgba(232,52,84,0.84)",
          cancelButtonColor: "#8c8f9a",
        }).then(result=>{
          if(result.isConfirmed){
            dispatch(deleteAdminCategory(id, token));
            Swal.fire({
              text:`Categoría ${name} eliminada.`,
              icon:'error',
              confirmButtonColor: "rgba(232,52,84,0.84)"})
          }})
  }

  function handleCatReset(name,id){
    return Swal.fire({
      text:`Desea resetear la cantidad de búsquedas de ${name}?`,
      icon: 'question',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si',
      confirmButtonColor: "rgba(232,52,84,0.84)",
      cancelButtonColor: "#8c8f9a",
    }).then(result=>{
      if(result.isConfirmed){
        dispatch(putAdminCategory(id,{searchCount: 0}, token));
        Swal.fire({
          text:`Cantidad de búsquedas reseteada.`,
          icon:'error',
          confirmButtonColor: "rgba(232,52,84,0.84)"})
      }})
  }

  useEffect(()=>{
    dispatch(getAllCategories(token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[catDeleted,catModified,catPosted]);

  useEffect(()=>{
    if(!allCategories.length) dispatch(getAllCategories(token));
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
              Categoría
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Cantidad de búsquedas
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Resetear búsquedas
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Borrar
            </th>
          </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {allCategories && allCategories.map(c=> {
              return (<tr key={c._id}>
              <td className="px-6 py-2 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-8 w-10">
                    <img className="h-10 w-10 rounded-full"
                         src={c.img || "https://cambodiaict.net/wp-content/uploads/2019/12/computer-icons-user-profile-google-account-photos-icon-account.jpg"} alt=""/>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {c.name}
                    </div>
                    </div>
                </div>
              </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  {c.searchCount}
                </td>
                <td className="px-5 py-4 whitespace-nowrap text-center text-sm font-medium">
                  <button onClick={()=>handleCatReset(c.name,c._id)}><FaIcons.FaRedo/></button>
                </td>
                <td className="px-5 py-4 whitespace-nowrap text-center text-sm font-medium">
                  <button onClick={()=>handleCatDelete(c.name,c._id)}><FaIcons.FaRegTrashAlt/></button>
                </td>
              </tr>)
            })}
          </tbody>
        </table>
      </div></div></div></div>
        <BasicForm component={"categories"}/>
      </div>
    )
}

export default CategoryDashboard;