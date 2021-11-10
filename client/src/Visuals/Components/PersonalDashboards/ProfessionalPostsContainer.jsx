import React from 'react'
import PostsShowComponent from './PostsShowComponent'
//<div className='flex items-center justify-around flex-wrap h-96 mx-36 bg-gray-100'></div>
function ProfessionalPostsContainer({userId}) {
    let posts = [
        'Diseño para Halo-4', 'Como usar Photoshop en Iphone', 
        'Sabías sobre esta paleta de colores?', 'Diseño para Ark-II',
        'Diseño para Tetris'
    ]
    return (
        <div className="padd-lg">
            <div className='padd-md-b font-main text-bold text-center- font-xl border-bottom-color-main'>
                Publicaciones
            </div>
            <button className='width-100 mrg-lg-t padd-sm-tb font-lg font-main border-radius-sm action action-add-post'>
                    Agregar post
            </button>
            {
                posts?.map((elem,index)=>{
                    return <PostsShowComponent key={index} text={elem}/>
                })
            }            
        </div>
    )
}

export default ProfessionalPostsContainer
