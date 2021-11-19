import PaymentsCartClient from './PaymentsCartClient';
import { getCartInfo } from '../../../ApiReq/cart';
import PaymentsCartPro from './PaymentsCartPro';
import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux';

const PaymentsCart =  () => {
  const userOnPage = useSelector(state=>state.sessionReducer.status);
  const {token} = userOnPage;
  const customerId = useSelector(state => state.sessionReducer.status.id)
  const order= useSelector(state=>state.sessionReducer.status)
  const {isProfessional} = order;
  const [render, setRender] = useState([])
  const [clientRender, setClientRender] = useState([])
    
 useEffect( () => {
  window.scrollTo(0, 0)
   if(isProfessional){
    getCartInfo(customerId,true,token)
    .then(data => {
      console.log(data);
      setRender(data)});
      getCartInfo(customerId,false,token)
      .then(data => setClientRender(data));
   }else{
    const payRender =   getCartInfo(customerId,false,token)
    payRender.then(data => setRender(data));
   }
  },[customerId, isProfessional, token]);

    return ( 
    <div>
      {
        !isProfessional 
        ? 
       <div>
          <PaymentsCartClient 
            render={render}
          />
       </div>
        :
        <div>
          <PaymentsCartClient 
            render={clientRender}
          />
          <PaymentsCartPro 
            render={render}
          />
        </div>
      }
     
    </div>
     );
}
 
export default PaymentsCart;

