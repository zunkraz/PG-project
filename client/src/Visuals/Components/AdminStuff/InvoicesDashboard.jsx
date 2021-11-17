import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAdminInvoices} from "../../../Controllers/actions/adminActions";

function InvoicesDashboard({token}){
  const dispatch = useDispatch();
  const allInvoices = useSelector(state=>state.adminReducer.adminInvoices);

  useEffect(()=>{
      if(!allInvoices.length) dispatch(getAdminInvoices(token));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

  function handleSearch(e){
    e.preventDefault();

  }
  return (
    <React.Fragment>
      <form onSubmit={event => handleSearch(event)}>
        <div className="col-1-1@xl col-1-1@lg col-1-1@md padd-md flex-center-xl-lg-md">
          <div className="col-1-8@xl col-1-5@lg col-1-1@xs padd-md">
            <div className="font-lg font-main text-bold">
              <span>Buscar Facturas:</span>
            </div>
          </div>
          <div className="col-7-8@xl col-4-5@lg col-1-1@xs padd-md">
            <input
              type="text"
              name="username"
              defaultValue=""
              onChange={event => handleSearch(event)}
              className="uk-input font-sm border-radius-sm"
              autoComplete="off"
              placeholder="Buscar por nombre de cliente o código de orden"
            />
          </div>
        </div>
      </form>
      {allInvoices[0] && allInvoices[0].map(i => {
       return (
         <div key={i._id} className="col-1-5@xl col-1-3@lg col-1-3@md col-1-1@sm col-1-1@xs padd-md">
             <div className="wrapper padd-md bg-color-extra4-a20 border-color-dark-a20 border-radius-sm shadow-md">                 {/* invoice data */}
                  <div className="padd-md font-sm flex-bar">
                    <div className="text-bold">Cliente:</div>
                    <span>
                      {i.customerId.username}
                      </span>
                  </div>
                  <div className="padd-md font-sm flex-bar">
                    <div className="text-bold">Fecha de compra:</div>
                    <span>
                       {i.date.slice(0,10)}
                      </span>
                  </div>
                   {/* Hired Prof */}
                   <div className="padd-md font-sm flex-bar">
                      <div className="text-bold">Profesional Contratado:</div>
                      <span>
                       {i.description}
                      </span>
                    </div>
                    {/* Order */}
                    <div className="padd-md font-sm flex-bar">
                      <div className="text-bold">Num de Orden:</div>
                      <span>
                       {i.orderID}
                      </span>
                    </div>
               <div className="padd-md font-sm flex-bar">
                 <div className="text-bold">Cantidad de sesiones:</div>
                 <span>
                       {i.numberOfSessions}
                      </span>
               </div>
             </div>
                   {/* Button Change Review */}
                   {/*<div className="padd-md font-sm">*/}
                   {/*    <button*/}
                   {/*      className="width-100 padd-sm border-radius-sm action action-primary flex-center"*/}
                   {/*      onClick={()=>handleReviewDelete(review._id)}*/}
                   {/*    >*/}
                   {/*      <FaIcons.FaRedo/>&emsp;Cambiar Estado*/}
                   {/*    </button>*/}
                   {/*</div>*/}
         </div>
       )
        //customerId.username
        //date
        //totalCost
        //schedules[] date.shortcut
        //description
        //numberOfSessions
        //orderID
      })}

    </React.Fragment>
      )
}

export default InvoicesDashboard;