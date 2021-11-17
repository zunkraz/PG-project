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
    
 useEffect( () => {
  window.scrollTo(0, 0)
   if(isProfessional){
    const payRender =   getCartInfo(customerId,true,token)
    payRender.then(data => setRender(data));
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
        <PaymentsCartClient 
            render={render}
        />
        :
        <PaymentsCartPro 
          render={render}
        />
      }
     
    </div>
     );
}
 
export default PaymentsCart;

