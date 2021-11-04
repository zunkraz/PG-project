import React from 'react'
import * as FaIcons from 'react-icons/fa';
import {Link} from 'react-router-dom'
import ImageComponent from "./ImageComponent";



const ProfessionalCardComponent = ({data}) => {

    const defImg= "https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?b=1&k=20&m=1300845620&s=170667a&w=0&h=JbOeyFgAc6-3jmptv6mzXpGcAd_8xqkQa_oUK2viFr8="

    const {username, name, lastname, likes, dislikes} = data;
    const category = data.category[0].name;
    const country = data.country.name;
    const img = data.img ? data.img : defImg;
    return (
        <div className="border-color-extra4-a40 border-radius-sm overflow-hidden">
            <Link to={`/profesionales/${username}`} style={{ "textDecoration": "none" }}>
                <ImageComponent key={username} img={img} ratio={"ratio-1-1"}/>
            </Link>
            <div className="padd-xl-t padd-lg-lr padd-lg-b ud-professional-card-border position-relative bg-color-light">
                <div className="position-middle-parent">
                    <div className="icon-xl border-radius-sm bg-color-main flex-center">
                        <span>icon</span>
                    </div>
                </div> 
                <div className="text-bold text-center font-lg font-main">{name} {lastname}</div>
                <div className="text-bold text-center font-main">{category}</div>
                <div className="text-bold text-center font-main font-sm">{country}</div>
                <div className="mrg-lg-t flex-center">
                    <div className="padd-lg-r">
                        <div className="padd-md-b font-lg flex-center">
                            <FaIcons.FaThumbsUp/>
                        </div>
                        {likes}
                    </div>
                    <div className="padd-lg-l">
                        <div className="padd-md-b font-lg flex-center">
                            <FaIcons.FaThumbsDown/>
                        </div>
                        {dislikes}
                    </div>
                </div>
                <Link to={`/profesionales/${username}`}  style={{ "textDecoration": "none" }}>
                    <div className="mrg-lg-t padd-md border-radius-sm action action-professional">
                        Ver Profesional
                    </div>
                </Link>
            </div>
        </div>
    );
}
export default ProfessionalCardComponent;