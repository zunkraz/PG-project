import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../../Controllers/actions/cartActions';

function RomoveFromCartBtn({date}) {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(removeFromCart(date))} className="bg-white w-2 flex justify-center items-center h-7 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Quitar</button>

        </div>
    )
}

export default RomoveFromCartBtn;
