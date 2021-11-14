import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {postAdminTip} from "../../../Controllers/actions/adminActions";
import Swal from 'sweetalert2';
import {getAllCategories} from "../../../Controllers/actions/constantInfoActions";

function TipsForm(){
  const dispatch = useDispatch();
  const allCategories = useSelector(state=>state.constantInfoReducer.categories);
  const userOnPage = useSelector(state=>state.sessionReducer.status);
  const {token} = userOnPage;
  const clearTipForm = {text:'',userId:userOnPage.id,isApproved:true,categoryId:''}
  const [info,setInfo] = useState(clearTipForm);

  useEffect(()=>{
    if(allCategories.length===0) dispatch(getAllCategories(token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  function handleChange(ev){
    setInfo({...info,[ev.target.name]:ev.target.value});
  }
  function handleSubmitTip(ev){
    ev.preventDefault();
    if(info.categoryId==='') {
      Swal.fire({
        text: `Elije una categoría!`,
        icon: 'error',
        confirmButtonColor: "rgba(232,52,84,0.84)"
      });
      return;
    }
    if(info.categoryId!=='') {
      dispatch(postAdminTip(info, token));
      Swal.fire({
        text: `Tip agregado!`,
        icon: 'success',
        confirmButtonColor: "rgb(165 220 134)"
      });
    }
    setInfo(clearTipForm);
  }

  return (
    <form className="m-5 border-2 width-80 bg-gray-100 rounded-md" autoComplete="off" onSubmit={handleSubmitTip}>
      <label className="m-2" htmlFor={"name"}>Nuevo tip: </label><br/>
      <textarea className="form-textarea mt-1 block w-full" name="text" value={info.text} onChange={handleChange} required={true}/>
      <select className="bg-color-light-a20" name="categoryId" value={info.categoryId} onChange={handleChange}>
        <option readOnly>Categoría</option>
        {allCategories&&allCategories.map(c=><option key={c._id} value={c._id} >{c.name}</option>)}
      </select>
      <input type="submit" className="font-bold border-1 rounded-b bg-color-dark-a10 hover:bg-gray-300" value="Agregar tip"/>
    </form>);
}
export default TipsForm;