import React from 'react'

function PaginationBtn({simbol, workFunction, active}) {
    return (
        <div className='PaginationBtnDiv'>
            <button onClick={workFunction} disabled={active}>{simbol}</button>
        </div>
    )
}

export default PaginationBtn
