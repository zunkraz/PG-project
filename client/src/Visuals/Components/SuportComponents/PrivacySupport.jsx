import React from 'react'

const PrivacySupport = () => {
    const obj = [
        {title:'Privacidad uno',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime minima nisi illum ipsam eveniet eaque suscipit neque officia molestias a amet incidunt consequatur nobis cupiditate, non corporis fugiat in placeat?',
        author: 'LATAM EXPONENTIAL'
        },
        {title:'Privacidad dos',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime minima nisi illum ipsam eveniet eaque suscipit neque officia molestias a amet incidunt consequatur nobis cupiditate, non corporis fugiat in placeat?',
        author: 'LATAM EXPONENTIAL'
        },
        {title:'Privacidad tres',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime minima nisi illum ipsam eveniet eaque suscipit neque officia molestias a amet incidunt consequatur nobis cupiditate, non corporis fugiat in placeat?',
        author: 'LATAM EXPONENTIAL'
        },
        {title:'Privacidad cuatro',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime minima nisi illum ipsam eveniet eaque suscipit neque officia molestias a amet incidunt consequatur nobis cupiditate, non corporis fugiat in placeat?',
        author: 'LATAM EXPONENTIAL'
        },
    ]
    let publication = obj.map(e => {
        let card = 
        <div className='m-1 mb-6 max-w-md py-4 px-8 bg-white shadow-2xl rounded-lg my-2'>
            <div>
                <h2 className='text-gray-800 text-3xl font-semibold'>
                    {e.title}
                </h2>
                <p className='mt-2 text-gray-600'>
                    {e.description}
                </p>
            </div>
            <div className='flex justify-end mt-4'>
                <p className='text-xl font-medium text-red-500'>
                    {e.author}
                </p>
            </div>
        </div>
        return card
    })

    return ( 
<div className='flex flex-wrap justify-center overflow-y-auto h-96'>
        {publication}
</div>
     );
}
 
export default PrivacySupport;