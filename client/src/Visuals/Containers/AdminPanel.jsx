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

function AdminPanel(){
  const dispatch = useDispatch();
  const usersAdmin = useSelector(state=>state.adminReducer.adminUsers);
  const userDeleted = useSelector(state=>state.adminReducer.userDeleted);
  const userModified = useSelector(state=>state.adminReducer.userModified);
  const userOnPage = useSelector(state=>state.sessionReducer.status);
  const {isAdmin, token} = userOnPage;

  useEffect(()=>{
  dispatch(getAdminUsers({token, isAdmin}));
  console.log(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[userDeleted,userModified]);

  const [shownData,setShownData] = useState('Users');
  const buttonSelected = 'bg-gray-300 p-0 font-medium rounded-md mr-5 h-7 w-28';
  const buttonNonSelected = 'bg-gray-100 p-0 font-medium rounded-md mr-5 h-7 w-28';
  const buttonsOff = {
    Users:buttonNonSelected,
    Appointments:buttonNonSelected,
    Categories:buttonNonSelected,
    Countries:buttonNonSelected,
    Tips:buttonNonSelected,
    Reviews:buttonNonSelected };
  const [buttons,setButtons] = useState({...buttonsOff,Users:buttonSelected});

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
        <BigButton text= "Users" onClickFunction={(e)=>handleShown(e)} cssActive={buttons.Users} />
        <BigButton text="Appointments" onClickFunction={(e)=>handleShown(e)} cssActive={buttons.Appointments} />
        <BigButton text="Categories" onClickFunction={(e)=>handleShown(e)} cssActive={buttons.Categories} />
        <BigButton text="Countries" onClickFunction={(e)=>handleShown(e)} cssActive={buttons.Countries} />
        <BigButton text="Tips" onClickFunction={(e)=>handleShown(e)} cssActive={buttons.Tips} />
        <BigButton text="Reviews" onClickFunction={(e)=>handleShown(e)} cssActive={buttons.Reviews} />
      </div>
      {shownData==="Users" && <UserTable usersAdmin={usersAdmin} isAdmin={isAdmin} token={token}/>}
      {shownData==="Categories" && <CategoryDashboard isAdmin={isAdmin} token={token}/>}
      {shownData==="Appointments" && <AppointmentDashboard isAdmin={isAdmin} token={token}/>}
      {shownData==="Countries" && <CountryDashboard isAdmin={isAdmin} token={token}/>}
      {shownData==="Tips" && <TipDashboard isAdmin={isAdmin} token={token}/>}
      {shownData==="Reviews" && <ReviewDashboard isAdmin={isAdmin} token={token}/>}
    </div>);
  else {
    return <Redirect to={'/'}/>
  }
}

export default AdminPanel;