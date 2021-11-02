import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../Controllers/actions/cartActions';

function AddToCartBtn({appointment}) {
    const dispatch = useDispatch();
    return (
        <div>
            <button onclick={() => dispatch(addToCart(appointment))}>Agregar al carrito</button>
        </div>
    )
}

export default AddToCartBtn;
