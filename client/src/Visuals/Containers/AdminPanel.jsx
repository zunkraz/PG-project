import React, {useEffect, useState} from 'react';
import {getAdminUsers} from '../../Controllers/actions/adminActions';
import {useDispatch, useSelector} from "react-redux";
import UserTable from "../Components/AdminStuff/UserTable";
import BigButton from "../Components/BigButton";
import CategoryDashboard from "../Components/AdminStuff/CategoryDashboard";
import CountryDashboard from "../Components/AdminStuff/CountryDashboard";
import TipDashboard from "../Components/AdminStuff/TipDashboard";
import ReviewDashboard from "../Components/AdminStuff/ReviewDashboard";
import AppointmentDashboard from "../Components/AdminStuff/AppointmentDashboard";
import {Redirect} from "react-router-dom";
import Swal from 'sweetalert2';

function AdminPanel(){
  const dispatch = useDispatch();
  const usersAdmin = useSelector(state=>state.adminReducer.adminUsers);
  const userDeleted = useSelector(state=>state.adminReducer.userDeleted);
  const userModified = useSelector(state=>state.adminReducer.userModified);
  const userOnPage = useSelector(state=>state.sessionReducer.status);
  const {token} = userOnPage;

  useEffect(()=>{
    if(userOnPage.username==='sccocogaston') Swal.fire({
      title: 'Hola Gastón!',
      width: 260,
      confirmButtonText: '👻',
      confirmButtonColor: 'rgb(239 239 239)',
      padding: '2em',
      backdrop: `rgb(63 81 181 / 68%)
      url("https://sweetalert2.github.io/images/nyan-cat.gif")
      center`,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  useEffect(()=>{
    window.scrollTo(0,0);
    dispatch(getAdminUsers(userOnPage.id,token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[userDeleted,userModified]);

  const [shownData,setShownData] = useState('Usuarios');
  const buttonSelected = 'bg-gray-300 p-0 font-medium rounded-md mr-5 h-7 w-28';
  const buttonNonSelected = 'bg-gray-100 p-0 font-medium rounded-md mr-5 h-7 w-28';
  const buttonsOff = {
    Usuarios:buttonNonSelected,
    Facturacion:buttonNonSelected,
    Categorias:buttonNonSelected,
    Paises:buttonNonSelected,
    Tips:buttonNonSelected,
    Opiniones:buttonNonSelected };
  const [buttons,setButtons] = useState({...buttonsOff,Usuarios:buttonSelected});

  const divStyle ={
    display: 'flex',
    marginLeft:'30px',
    marginBottom:'5px'
  }

  function handleShown(e){
    setButtons({...buttonsOff,[e.target.innerText]:buttonSelected});
    setShownData(e.target.innerText);
  }
  //const userOnPage = {isAdmin:true};

  if (userOnPage.isAdmin) return (
    <div className="min-h-screen">
      <h1 className='uk-padding text-bold font-main font-1x'>Panel de Administrador</h1>
      <div style={divStyle}>
        <BigButton text= "Usuarios" onClickFunction={(e)=>handleShown(e)} cssActive={buttons.Usuarios} />
        <BigButton text="Facturación" onClickFunction={(e)=>handleShown(e)} cssActive={buttons.Facturacion} />
        <BigButton text="Categorías" onClickFunction={(e)=>handleShown(e)} cssActive={buttons.Categorias} />
        <BigButton text="Países" onClickFunction={(e)=>handleShown(e)} cssActive={buttons.Paises} />
        <BigButton text="Tips" onClickFunction={(e)=>handleShown(e)} cssActive={buttons.Tips} />
        <BigButton text="Opiniones" onClickFunction={(e)=>handleShown(e)} cssActive={buttons.Opiniones} />
      </div>
      {shownData==="Usuarios" && <UserTable usersAdmin={usersAdmin} token={token}/>}
      {shownData==="Categorías" && <CategoryDashboard token={token}/>}
      {shownData==="Facturación" && <AppointmentDashboard token={token}/>}
      {shownData==="Países" && <CountryDashboard token={token}/>}
      {shownData==="Tips" && <TipDashboard token={token}/>}
      {shownData==="Opiniones" && <ReviewDashboard token={token}/>}
    </div>);
  else {
    return <Redirect to={'/'}/>
  }
}

export default AdminPanel;