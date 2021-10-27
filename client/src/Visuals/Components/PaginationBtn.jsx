import React from 'react'

function PaginationBtn({simbol, workFunction}) {
    return (
        <div>
            <button onClick={workFunction} >{simbol}</button>
        </div>
    )
}

export default PaginationBtn
