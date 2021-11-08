import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {postAdminCategory,postAdminCountry,postAdminTip,putAdminCategory} from "../../../Controllers/actions/adminActions";


function BasicForm({component}){
  const dispatch = useDispatch();
  const allInfo = {categories:{name:'',searchCount:0,img:''},countries:{name:''},tips:{text:'',isApproved:true}};
  const allCategories = useSelector(state=>state.constantInfoReducer.categories);
  const [info,setInfo] = useState(allInfo[component]);
  const userOnPage = useSelector(state=>state.sessionReducer.status);
  const {isAdmin, token} = userOnPage;

  function handleChange(ev){
    setInfo({...info,[ev.target.name]:ev.target.value});
  }
  function handleSubmitCat(ev){
    ev.preventDefault();
    if(info.name==='') return;
    if(!(allCategories.find(c=>c.name===info.name))){
      if (info.img !== '') dispatch(postAdminCategory(info, {isAdmin, token}));
      else return;
    }
    else {
      let id = allCategories.filter(c => c.name === info.name)[0]._id;
      let data = (info.img!=='') ? {img: info.img} : {};
      data = (info.searchCount===0)? data : {...data,searchCount:info.searchCount};
      dispatch(putAdminCategory(id, data, {isAdmin, token}))
    }
    setInfo(allInfo[component]);
  }
  function handleSubmitCountry(ev){
    console.log(isAdmin, token);
    ev.preventDefault();
    if (info.name!=='') {
      dispatch(postAdminCountry(info, {isAdmin, token}));
      setInfo(allInfo[component]);
    }
  }
  function handleSubmitTip(ev){
    ev.preventDefault();
    dispatch(postAdminTip(info, {isAdmin, token}));
    setInfo(allInfo[component]);
  }
  if (component==='categories') return (
  <form className="m-5 border-2 width-20 bg-gray-100 rounded-md" autoComplete="off" onSubmit={(ev, isAdmin, token)=>handleSubmitCat(ev, isAdmin, token)}>
    <label className="m-2" htmlFor={"name"}>Nombre</label>
    <input className="padd-md-l" name="name" type={"text"} value={info.name} onChange={(ev)=>handleChange(ev)} required={true}/>
    <label className="m-2" htmlFor={"searchCount"}>Cantidad de búsquedas</label>
    <input className="padd-md-l" name="searchCount" type="number" step={1} min={0} value={info.searchCount} onChange={ev=>handleChange(ev)} required={true}/>
    <label className="m-2" htmlFor={"img"}>URL imagen</label>
    <input className="padd-md-l" name="img" type="url" value={info.img} onChange={(ev)=>handleChange(ev)}/>
    <input type="submit" className="font-bold border-1 rounded-b bg-color-dark-a10 hover:bg-gray-300" value="Agregar / editar categoría"/>
  </form>);

  if (component==='tips') return (
    <form className="m-5 border-2 width-20 bg-gray-100 rounded-md" autoComplete="off" onSubmit={(ev)=>handleSubmitTip(ev)}>
      <label className="m-2" htmlFor={"name"}>Nuevo tip: </label><br/>
      <textarea className="form-textarea mt-1 block w-full" name="text" value={info.text} onChange={(ev)=>handleChange(ev)} required={true}/>
      <input type="submit" className="font-bold border-1 rounded-b bg-color-dark-a10 hover:bg-gray-300" value="Agregar tip"/>
    </form>);

  if (component==='reviews') return (
    <form className="m-5 border-2 width-20 bg-gray-100 rounded-md" autoComplete="off" onSubmit={(ev)=>handleSubmitTip(ev)}>
      <label className="m-2" htmlFor={"name"}>Nuevo review: </label><br/>
      <textarea className="form-textarea mt-1 block w-full" name="text" value={info.text} onChange={(ev)=>handleChange(ev)} required={true}/>
      <input type="submit" className="font-bold border-1 rounded-b bg-color-dark-a10 hover:bg-gray-300" value="Agregar tip"/>
    </form>);

  if (component==='countries') return (
    <form className="m-5 border-2 width-20 bg-gray-100 rounded-md" autoComplete="off" onSubmit={(ev)=>handleSubmitCountry(ev)}>
      <label className="m-2" htmlFor={"name"}>Nombre</label>
      <input className="padd-md-l" name="name" type={"text"} value={info.name} onChange={(ev)=>handleChange(ev)} required={true}/>
      <input type="submit" className="font-bold border-1 rounded-b bg-color-dark-a10 hover:bg-gray-400" value="Agregar país"/>
    </form>);

}
export default BasicForm;