import React from 'react'
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
        <header>
            <Link to='#'>Logo</Link>
            <ul>
                <li> <Link to='#'>Iniciar Sesión</Link></li>
                <li> <Link to='#'>Registrarse</Link></li>
                <li><Link to='#'>Profesionales</Link></li>
                <li> <Link to='#'>Soporte</Link></li>
            </ul>

        </header>
     );
}
 
export default Nav;