import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../Controllers/actions/cartActions';
import { useJitsi } from 'react-jutsu';

function AddToCartBtn({appointment}) {
    const dispatch = useDispatch();
    const jitsiConfig = {
        roomName: `Latam Exponential-${appointment.id}`,
        password: 'latam-exp',
        subject: 'fan',
        parentNode: 'jitsi-container',
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { error, jitsi } = useJitsi(jitsiConfig);
    appointment = {...appointment, meetingLink: jitsi._url || error};
    console.log(appointment);
    return (
        <div>
            <button onClick={() => dispatch(addToCart(appointment))} className="h-6 px-5 m-1 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700">Agregar al carrito</button>
            <div className='hidden' id={jitsiConfig.parentNode} />
        </div>
    )
}

export default AddToCartBtn;
