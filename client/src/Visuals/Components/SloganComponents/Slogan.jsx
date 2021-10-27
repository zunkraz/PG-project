import React from 'react'
import FiltersBtns from '../FiltersBtns/FiltersBtns';
const Slogan = () => {
    return ( 
        <div className="uk-column-1-2 uk-column-divider uk-margin-top uk-margin-bottom">
            <div className="uk-padding-small uk-margin-left">
                <h3 className="uk-card-title">Slogan</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
        
            <div className="uk-padding-small">
                <FiltersBtns/>
            </div>
        
    </div>
     );
}
 
export default Slogan;