import React from 'react'

const Testimony = ({data}) => {
    return (
        <li className="wrapper flex-center padd-lg">
            <div class="col-1-2@xl col-1-2@lg col-1-2@md">
                <div className="padd-lg text-center text-italic border-top-color-main border-4x position-relative bg-color-light-a20 border-radius-md">  
                    <div class="font-xl">
                        "{data.testimony}"
                    </div>                    
                    <div class="mrg-lg-t font-lg">
                        {data.user}
                    </div>
                </div>                            
            </div>
        </li>
    );
}
export default Testimony;