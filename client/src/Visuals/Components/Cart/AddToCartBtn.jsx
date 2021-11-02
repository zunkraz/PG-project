import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../Controllers/actions/cartActions';

function AddToCartBtn({appointment}) {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(addToCart(appointment))} className="h-6 px-5 m-1 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700">Agregar al carrito</button>
        </div>
    )
}

export default AddToCartBtn;
