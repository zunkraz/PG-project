import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../../Controllers/actions/cartActions';

function RomoveFromCartBtn({date}) {
    const dispatch = useDispatch();
    return (
        <div>
            <button onclick={() => dispatch(removeFromCart(date))}>Quitar</button>

        </div>
    )
}

export default RomoveFromCartBtn;
