import React   from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import logoMain from "../../Assets/media/logo-main.svg";
import { cleanLoginCheck } from '../../../Controllers/actions/loginAction';


const Nav = () => {

    let login = useSelector(state=>state.sessionReducer.status.token)
    let username = useSelector(state=>state.sessionReducer.status.username)
    let dispatch = useDispatch()
    

    function Logout(){
        dispatch(cleanLoginCheck())
    }

    const btns = !login ? [ 
        {
            title: 'Profesionales',
            url:'/profesionales'
        },
        {
            title:'Crea tu cuenta',
            url:'/registro'
        },
        {
            title:'Inicia Sesión',
            url: '/ingresar'
        }] : 
        [{
            title: 'Profesionales',
            url:'/profesionales'
        },
        {
            title:'Mi perfil',
            url: `/miperfil/${username}`
        }]
    

    let items = btns.map( (data,i) => {
        return <li key={i}><Link to={data.url}>{data.title}</Link></li>
    })

    return ( 
    <header>
        <nav 
            className="uk-navbar-container uk-margin" 
            data-uk-navbar 
            uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky"
            >
            <div className="uk-navbar bg-color-light width-100">
                <Link className="uk-navbar-item 
                                uk-logo 
                                uk-margin-sm-left" 
                    to="/">
                        <img src={logoMain} alt="LatamExponential"/>
                </Link>
                
                <ul 
                    className="uk-navbar-nav 
                            uk-position-right
                            uk-margin-medium-right
                            uk-visible@m"
                >
                    {items}
                    {login && 
                        <li>
                            <Link to='/' onClick={Logout}>Salir</Link>
                        </li>}

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
                            {login && 
                                <li>
                                    <Link to='/' onClick={Logout}>Salir</Link>
                                </li>}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    
        );
    }
    
    export default Nav;

