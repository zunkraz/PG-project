import React from 'react'
import PostsShowComponent from './PostsShowComponent'

function ProfessionalPostsContainer({posts}) {
    return (
        <div className=' m-10 flex items-center justify-around flex-wrap h-96 mx-36 bg-gray-100'>
            {posts?.map((elem,index)=>{
                return <PostsShowComponent key={index} text={elem}/>
            })}
        </div>
    )
}

export default ProfessionalPostsContainer
