import React from 'react'

const FeaturedProfessional = ({data}) => {
    return (
        <div className="col-1-5@xl col-1-5@lg col-1-5@md col-1-5@sm padd-lg">
            <div className="">
                <img src={data.img}/>
            </div>
            <div className="padd-xl-t padd-lg-lr padd-lg-b border-top-color-main border-4x position-relative bg-color-light">
                <div className="position-middle-parent">
                    <div className="icon-xl border-radius-sm bg-color-main flex-center"><span>Icon</span></div>
                </div> 
                <div className="text-bold text-center font-lg font-main">{data.name} {data.lastName}</div>
                <div className="text-bold text-center">{data.category}</div>
                <div className="mrg-lg-t flex-center">
                    <div className="padd-lg-r">Like {data.likes}</div>
                    <div className="padd-lg-l">Dislike {data.dislikes}</div>
                </div>
                <div className="mrg-lg-t padd-md border-radius-sm action action-professional">
                    Ver Profesional
                </div>
            </div>
        </div>
    );
}
export default FeaturedProfessional;