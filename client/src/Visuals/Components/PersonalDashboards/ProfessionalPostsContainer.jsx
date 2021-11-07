import React from 'react'
import PostsShowComponent from './PostsShowComponent'
//<div className='flex items-center justify-around flex-wrap h-96 mx-36 bg-gray-100'></div>
function ProfessionalPostsContainer({posts}) {
    return (
        <div className="padd-lg">
            <div className='padd-md-b font-main text-bold text-center- font-xl border-bottom-color-main'>
                Publicaciones
            </div>
            {
                posts?.map((elem,index)=>{
                    return <PostsShowComponent key={index} text={elem}/>
                })
            }            
        </div>
    )
}

export default ProfessionalPostsContainer
