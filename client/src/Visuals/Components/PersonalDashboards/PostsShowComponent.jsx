import React from 'react'
/*
<div className='bg-gray-200 w-44 h-32 p-10 flex justify-center 
                    items-center overflow-ellipsis cursor-pointer 
                    whitespace-pre-wrap hover:bg-red-300 rounded-3xl duration-300	'>
*/
function PostsShowComponent({text}) {
    return (
        <div className='bg-color-extra4-a20 mrg-lg-t padd-lg border-color-dark-a20 border-radius-sm'>
            <span>{text}</span>
            <div className="mrg-lg-t padd-sm-tb font-sm border-radius-sm action action-user-dashboard-cancel">
                Eliminar Publicación
            </div> 
        </div>
    )
}

export default PostsShowComponent
