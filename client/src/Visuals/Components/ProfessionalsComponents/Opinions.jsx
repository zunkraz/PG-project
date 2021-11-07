import React from 'react';

export default function Opinions() {

    const opiniones = [
        {text: "Muy buen tipo", user:"user1"},
        {text: "Me atendio muy bien", user:"user2"},
        {text: "Me salvó de un problema importante", user:"user3"},
        {text: "Excelente profesional! lo recomiendo", user:"user4"},
        {text: "Amable, atento y muy bien predispuesto", user:"user5"}
    ]
    
    return (
        <div className="padd-lg">
        <div className='padd-md-b font-main text-bold text-center- font-xl border-bottom-color-main'>
            Opiniones de clientes
        </div>
        {/* {
            posts?.map((elem,index)=>{
                return <PostsShowComponent key={index} text={elem}/>
            })
        }             */}
        {
            opiniones.slice(0,4).map((e, i) => (
                <div key={i} className='bg-color-extra4-a20 mrg-lg-t padd-lg border-color-dark-a20 border-radius-sm'>
                    <div>
                        <span><b>{e.text}</b></span>
                    </div>
                    <div>
                        <span>{e.user}</span>
                    </div>
                </div>
            ))
        }
    </div>
    )
};
