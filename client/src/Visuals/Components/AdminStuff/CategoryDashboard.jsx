import React, {useEffect} from "react";
import * as FaIcons from 'react-icons/fa';
import BasicForm from "./BasicForm";
import {useDispatch, useSelector} from "react-redux";
import {getAllCategories} from "../../../Controllers/actions/constantInfoActions";
import {deleteAdminCategory,putAdminCategory} from "../../../Controllers/actions/adminActions";

function CategoryDashboard({isAdmin, token}){
  const dispatch = useDispatch();
  const allCategories = useSelector(state=>state.constantInfoReducer.categories);
  const catDeleted = useSelector(state=>state.adminReducer.categoryDeleted);
  const catModified = useSelector(state=>state.adminReducer.categoryModified);
  const catPosted = useSelector(state=>state.adminReducer.categoryPosted);

  function handleCatDelete(name,id){
    if(window.confirm(`Desea eliminar la categoría ${name}?`)) dispatch(deleteAdminCategory(id));
  }
  function handleCatReset(name,id){
    if(window.confirm(`Desea resetear la cantidad de búsquedas de ${name}?`)) dispatch(putAdminCategory(id,{searchCount: 0},{isAdmin, token}));
  }
  useEffect(()=>{
    dispatch(getAllCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[catDeleted,catModified,catPosted]);
  useEffect(()=>{
    if(!allCategories.length) dispatch(getAllCategories());
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