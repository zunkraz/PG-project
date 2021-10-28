import React from 'react'
import FiltersBtns from '../FiltersBtns/FiltersBtns';
const Slogan = () => {
    return ( 
        // uk-padding-small uk-column-1-2 uk-column-divider uk-margin-top uk-margin-bottom
        <div className="container mx-auto  flex flex-row p-20">
            <div className='mr-12'>
                <p className='text-justify text-lg'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </p>
            </div>
            <div>
                <FiltersBtns/>
            </div>
        
    </div>
     );
}
 
export default Slogan;