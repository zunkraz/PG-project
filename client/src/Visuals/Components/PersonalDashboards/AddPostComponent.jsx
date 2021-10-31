import React, {useState} from 'react'

function AddPostComponent({addPost}) {

    const [post, setPost] = useState('')

    const changePost = (e)=>{
        setPost(e.target.value)
    }

    const sendPost = ()=>{
        addPost(post)
    }

    return (
        <div className='flex flex-col items-center mt-20'>
            <textarea  onChange={changePost}
                    className='bg-gray-100 w-2/4 p-6 font-lg text-gray-500'
            />
            <button onClick={sendPost}
                    className='bg-green-300 w-2/4 h-10 font-lg font-semibold tracking-widest'
                >Agregar</button>
        </div>
    )
}

export default AddPostComponent
