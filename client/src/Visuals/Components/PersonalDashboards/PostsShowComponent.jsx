import React from 'react'

function PostsShowComponent({text}) {
    return (
        <div className='bg-gray-200 w-44 h-32 p-10 flex justify-center 
                    items-center overflow-ellipsis cursor-pointer 
                    whitespace-pre-wrap hover:bg-red-300 rounded-3xl duration-300	'>
            <span>{text}</span>
        </div>
    )
}

export default PostsShowComponent
