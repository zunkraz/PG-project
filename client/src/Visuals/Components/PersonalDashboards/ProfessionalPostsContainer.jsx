import Review from '../PersonalDashboards/Review'
import React from 'react'
import PostsShowComponent from './PostsShowComponent'
//<div className='flex items-center justify-around flex-wrap h-96 mx-36 bg-gray-100'></div>
function ProfessionalPostsContainer({userId}) {
    let posts = [{text:'hola'},{text:'chao'},{text:'hola'}]
    return (
        <div className="padd-lg">
            <div className='padd-md-b font-main text-bold text-center- font-xl border-bottom-color-main'>
                Publicaciones
            </div>
            <Review userId={userId}/>
            {
                posts?.map((elem,index)=>{
                    return <PostsShowComponent key={index} text={elem.text}/>
                })
            }            
        </div>
    )
}

export default ProfessionalPostsContainer
