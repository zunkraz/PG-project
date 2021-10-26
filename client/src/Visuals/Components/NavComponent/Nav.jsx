import React  from 'react'
import { Link } from 'react-router-dom';


const Nav = () => {
    const btns = [
        {title:'Iniciar Sesión',url:'/login'},
        {title:'Registrarse',url:'register'},
        {title:'Perfil',url:'/dashboard'},
        {title:'Profesionales',url:'professionals'},
        {title:'Soporte',url:'supports'},

    ]
    let items = btns.map( (data,index) => {
        let item = 
        <li><Link key={index} to={data.url}>{data.title}</Link></li>
        return item
    })
    return ( 
    <header>

        <nav 
            className="uk-navbar-container uk-margin" 
            uk-navbar 
            uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky"
            >
            
            <div className="uk-navbar">
            <Link 
                className="
                uk-navbar-item 
                uk-logo 
                uk-margin-sm-left" 
                to="#"
                >Logo</Link>

            <ul 
                className="uk-navbar-nav 
                       uk-position-right
                       uk-margin-medium-right
                       uk-visible@m"
            >
                {items}
            </ul>
    
{/* /////////////////////////////////////// */}
    
        <button 
        className="uk-button uk-button-default uk-hidden@m uk-position-right" 
        type="button" 
        uk-toggle="target: #offcanvas-nav"  
        uk-icon="icon: table">
        </button>

        <div id="offcanvas-nav" uk-offcanvas="overlay: true">
            <div className="uk-offcanvas-bar">
                <ul className="uk-nav uk-nav-default">  
                    <li className="uk-nav-header">Menu</li>
                    {items}             
                </ul>
            </div>
        </div>
{/* ///////////////////////////////             */}
            </div>
        </nav>
    </header>
   
     );
    }
    
    export default Nav;

