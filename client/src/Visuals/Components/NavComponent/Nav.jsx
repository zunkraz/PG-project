import React   from 'react'
import { Link } from 'react-router-dom';
import logoMain from "../../Assets/media/logo-main.svg";


const Nav = ({Logout, login, username}) => {

    //let username = localStorage.username//.getItem('username');
    
    const alterJoinDash = login?{title:'Mi Perfil',url:`/miperfil/${username}`}:{title:'Iniciar Sesion',url:'/ingresar'}
    const alterCreate = !login && {title:'Crea tu cuenta!',url:'/registro'}
    const alterShop = login && {title:"Carrito", url:'/carrito'}
    //window.localStorage.login?{title:'Mi Perfil',url:`/miperfil/${username}`}:{title:'Iniciar Sesion',url:'/ingresar'}
    //const alterDashOut = window.localStorage.login?{title:'Salir',url:'/'}:{title:`Hola ${username}!`}

    const btns = [
        {title:'Profesionales',url:'/profesionales'},
        alterCreate,
        alterShop,
        //{title:'Soporte',url:'/soporte'},
        alterJoinDash,
    ]
    let items = btns.map( (data,index) => {
        let item = 
        <li key={index}><Link to={data.url}>{data.title}</Link></li>
        return item
    })
    return ( 
    <header>
        <nav 
            className="uk-navbar-container uk-margin" 
            data-uk-navbar 
            uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky"
            >
            <div className="uk-navbar bg-color-light width-100">
                <Link 
                    className="
                    uk-navbar-item 
                    uk-logo 
                    uk-margin-sm-left" 
                    to="/"
                    ><img src={logoMain} alt="LatamExponential"/></Link>
                    <ul 
                        className="uk-navbar-nav 
                                uk-position-right
                                uk-margin-medium-right
                                uk-visible@m"
                    >
                        {items}
                        {login && <button   onClick={Logout}
                                    className='flex items-center justify-center'
                                    ><p className='text-gray-400 uppercase'>Salir</p></button>}
                        <button 
                        className="uk-button uk-button-default uk-hidden@m uk-position-right" 
                        type="button" 
                        uk-toggle="target: #offcanvas-nav"  
                        uk-icon="icon: table">
                        </button>
                    </ul>
                    <button 
                    className="uk-button uk-button-default uk-hidden@m uk-position-right" 
                    type="button" 
                    uk-toggle="target: #offcanvas-nav"  
                    uk-icon="icon: table">
                    </button>
                    <div id="offcanvas-nav" data-uk-offcanvas="overlay: true">
                        <div className="uk-offcanvas-bar">
                            <ul className="uk-nav uk-nav-default">  
                                <li className="uk-nav-header">Menu</li>
                                {items}             
                            </ul>
                        </div>
                    </div>
                </div>
        </nav>
    </header>
    
        );
    }
    
    export default Nav;

