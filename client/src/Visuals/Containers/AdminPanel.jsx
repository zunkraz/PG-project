import React, {useEffect, useState} from 'react';
import {getAdminUsers} from '../../Controllers/actions/adminActions';
import {useDispatch, useSelector} from "react-redux";
import UserTable from "../Components/AdminStuff/UserTable";
//import BigButton from "../Components/BigButton";
import CategoryDashboard from "../Components/AdminStuff/CategoryDashboard";
import CountryDashboard from "../Components/AdminStuff/CountryDashboard";
import TipDashboard from "../Components/AdminStuff/TipDashboard";
import ReviewDashboard from "../Components/AdminStuff/ReviewDashboard";
import AppointmentDashboard from "../Components/AdminStuff/AppointmentDashboard";
import {Redirect} from "react-router-dom";
import Swal from 'sweetalert2';
import ComponentHeader from '../Components/ComponentHeader';

const componentHeaderData = {
  title: "Panel de Administrador",
  subtitle: "Quisque eget mauris eget nisi consectetur lobortis at eu massa.",
  bg: null,// Si esta propiedad se envia null, se asigna un fondo aleatorio.
}

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
  const buttonSelected = 'width-100 padd-sm bg-color-main font-color-light border-color-main border-2x border-radius-sm';
  const buttonNonSelected = 'width-100 padd-sm border-radius-sm border-color-main';
  const buttonsOff = {
    Usuarios:buttonNonSelected,
    Facturacion:buttonNonSelected,
    Categorias:buttonNonSelected,
    Paises:buttonNonSelected,
    Tips:buttonNonSelected,
    Opiniones:buttonNonSelected,
  };
  const [buttons,setButtons] = useState({...buttonsOff,Usuarios:buttonSelected});

  const divStyle ={
    display: 'flex',
    marginLeft:'30px',
    marginBottom:'5px'
  }

  function handleShown(e){
    if(e.target.type === 'submit') {
      setButtons({...buttonsOff,[e.target.innerText]:buttonSelected});
      setShownData(e.target.innerText);
    }
    else {
      setShownData(e.target.value);
    }    
  }
  //const userOnPage = {isAdmin:true};
  if (userOnPage.isAdmin) return (
    <React.Fragment>
      <div className="wrapper">
        <ComponentHeader data={componentHeaderData} />
      </div>
      <div className="wrapper">
        {/* <h1 className='uk-padding text-bold font-main font-1x'>Panel de Administrador</h1> style={divStyle}*/}
        <section>
          <div className="col-1-1@xl col-1-1@lg col-1-1@md col-1-1@sm padd-md element-sm-xs">
            <div className="padd-md">
              <select className="uk-select width-100 padd-md border-radius-sm" onChange={(e)=>handleShown(e)}>
                <option disabled>Seleccione una opción</option>
                <option value="Usuarios">Usuarios</option>
                <option value="Facturación">Facturación</option>
                <option value="Categorías">Categorías</option>
                <option value="Países">Países</option>
                <option value="Tips">Tips</option>
                <option value="Opiniones">Opiniones</option>
              </select>
            </div>
          </div>
          <div className="col-1-1@xl col-1-1@lg col-1-1@md col-1-1@sm padd-md element-xl-lg-md">
            <div className="col-1-6@xl col-1-6@lg col-1-6@md padd-md">
              <button 
                className={`width-100 padd-sm border-2x border-radius-sm ${shownData === 'Usuarios' ? 'bg-color-main font-color-light border-color-main' : 'action action-main'}`}
                onClick={(e)=>handleShown(e)}
              >
                Usuarios
              </button>
            </div>
            <div className="col-1-6@xl col-1-6@lg col-1-6@md padd-md">
              <button
                className={`width-100 padd-sm border-2x border-radius-sm ${shownData === 'Facturación' ? 'bg-color-main font-color-light border-color-main' : 'action action-main'}`}
                onClick={(e)=>handleShown(e)}
              >
                Facturación
              </button>
            </div>
            <div className="col-1-6@xl col-1-6@lg col-1-6@md padd-md">
              <button
                className={`width-100 padd-sm border-2x border-radius-sm ${shownData === 'Categorías' ? 'bg-color-main font-color-light border-color-main' : 'action action-main'}`}
                onClick={(e)=>handleShown(e)}
              >
                Categorías
              </button>
            </div>
            <div className="col-1-6@xl col-1-6@lg col-1-6@md padd-md">
              <button
                className={`width-100 padd-sm border-2x border-radius-sm ${shownData === 'Países' ? 'bg-color-main font-color-light border-color-main' : 'action action-main'}`}
                onClick={(e)=>handleShown(e)}
              >
                Países
              </button>
            </div>
            <div className="col-1-6@xl col-1-6@lg col-1-6@md padd-md">
              <button
                className={`width-100 padd-sm border-2x border-radius-sm ${shownData === 'Tips' ? 'bg-color-main font-color-light border-color-main' : 'action action-main'}`}
                text="Tips"
                onClick={(e)=>handleShown(e)}
              >
                Tips
              </button>
            </div>
            <div className="col-1-6@xl col-1-6@lg col-1-6@md padd-md">
              <button
                className={`width-100 padd-sm border-2x border-radius-sm ${shownData === 'Opiniones' ? 'bg-color-main font-color-light border-color-main' : 'action action-main'}`}
                onClick={(e)=>handleShown(e)}
              >
                Opiniones
              </button>
            </div>
            {/*
            <BigButton text="Usuarios" onClickFunction={(e)=>handleShown(e)} cssActive={buttons.Usuarios} />
            <BigButton text="Facturación" onClickFunction={(e)=>handleShown(e)} cssActive={buttons.Facturacion} />
            <BigButton text="Categorías" onClickFunction={(e)=>handleShown(e)} cssActive={buttons.Categorias} />
            <BigButton text="Países" onClickFunction={(e)=>handleShown(e)} cssActive={buttons.Paises} />
            <BigButton text="Tips" onClickFunction={(e)=>handleShown(e)} cssActive={buttons.Tips} />
            <BigButton text="Opiniones" onClickFunction={(e)=>handleShown(e)} cssActive={buttons.Opiniones} />
            */}
          </div>
          {shownData==="Usuarios" && <UserTable usersAdmin={usersAdmin} token={token}/>}
          {shownData==="Categorías" && <CategoryDashboard token={token}/>}
          {shownData==="Facturación" && <AppointmentDashboard token={token}/>}
          {shownData==="Países" && <CountryDashboard token={token}/>}
          {shownData==="Tips" && <TipDashboard token={token}/>}
          {shownData==="Opiniones" && <ReviewDashboard token={token}/>}
        </section>
      </div>
    </React.Fragment>
    );
  else {
    return <Redirect to={'/'}/>
  }
}

export default AdminPanel;