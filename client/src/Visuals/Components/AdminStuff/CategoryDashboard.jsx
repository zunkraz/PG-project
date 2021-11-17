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
    <React.Fragment>
      {/* Barra de Edicion - Busqueda */}
      <BasicForm component={"categories"}/>
      {/* Listado de Categorias */}
      <div className="col-1-1@xl col-1-1@lg col-1-1@md col-1-1@sm col-1-1@xs padd-md">
          {allCategories && allCategories.map(c=> {
              return (
                <div key={c._id} className="col-1-3@xl col-1-3@lg col-1-2@md col-1-1@sm col-1-1@xs padd-md">
                  <div className="wrapper bg-color-extra4-a20 border-color-dark-a20 border-radius-sm shadow-md">

                    
                    <div className="element-xl-lg-md-sm">
                      <div className="col-1-1@xl col-1-1@xs padd-md flex-center">
                        {/* Image */}
                        <div className="col-1-3@xl col-1-4@xs padd-md">
                          <div
                            className="ratio-1-1 uk-background-cover border-radius-100"
                            data-src={c.img || "https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?b=1&k=20&m=1300845620&s=170667a&w=0&h=JbOeyFgAc6-3jmptv6mzXpGcAd_8xqkQa_oUK2viFr8="}
                            data-uk-img="">
                          </div>
                        </div>
                        {/* Info */}
                        <div className="col-2-3@xl col-3-4@xs padd-md">
                          {/* Name */}
                          <div className="padd-md font-sm flex-bar">
                            <div className="text-bold">Categoría:</div>
                            <span>{c.name}</span>
                          </div>
                          {/* Searches */}
                          <div className="padd-md font-sm flex-bar">
                            <div className="text-bold">Búsquedas:</div>
                            <span>{c.searchCount}</span>
                          </div>                      
                        </div>
                      </div>
                    </div>


                    <div className="element-xs">
                      {/* Image */}
                      <div className="col-1-1@xs padd-md flex-center">
                        <div className="width-50">
                        <div
                          className="ratio-1-1 uk-background-cover border-radius-100"
                          data-src={c.img || "https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?b=1&k=20&m=1300845620&s=170667a&w=0&h=JbOeyFgAc6-3jmptv6mzXpGcAd_8xqkQa_oUK2viFr8="}
                          data-uk-img="">
                        </div>
                        </div>
                      </div>
                      {/* Info */}
                      <div className="col-1-1@xs padd-md">
                        {/* Name */}
                        <div className="padd-md font-sm flex-bar">
                          <div className="text-bold">Categoría:</div>
                          <span>{c.name}</span>
                        </div>
                        {/* Searches */}
                        <div className="padd-md font-sm flex-bar">
                          <div className="text-bold">Búsquedas:</div>
                          <span>{c.searchCount}</span>
                        </div>                      
                      </div>
                    </div>   
                    
                                     
                    {/* Buttons */}
                    <div className="col-1-1@xl col-1-1@xs padd-md">
                    {/* Reset Searches */}
                      <div className="padd-md font-sm">
                        <button
                          className="width-100 padd-sm border-radius-sm action action-primary flex-center"
                          onClick={()=>handleCatReset(c.name,c._id)}
                        >
                          <FaIcons.FaRedo/>&emsp;Restablecer Búsquedas
                        </button>
                      </div>
                      {/* Delete Category */}
                      <div className="padd-md font-sm">
                          <button 
                            className="width-100 padd-sm border-radius-sm action action-danger flex-center"
                            onClick={()=>handleCatDelete(c.name,c._id)}
                          >
                            <FaIcons.FaRegTrashAlt/>&emsp;Eliminar Categoría
                          </button>
                        </div>
                      </div>
                    </div>
                </div>
              )
            })}
      </div>
    </React.Fragment>
    )
}

export default CategoryDashboard;