import React from 'react'

const Testimony = ({data}) => {
    
    const username = data.user[0].username
    const text = data.text
    
    return (
        <li className="wrapper flex-center padd-lg">
            <div className="col-1-2@xl col-1-2@lg col-1-2@md col-1-1">
                <div className="blur-md padd-lg text-center text-italic font-color-light bg-color-dark-a800 border-radius-md">  
                    <div className="font-xl">
                        "{text}"
                    </div>                    
                    <div className="mrg-lg-t font-color-light font-2x">
                        -- {username}
                    </div>
                </div>                            
            </div>
        </li>
    );
}
export default Testimony;