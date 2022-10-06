import { CartWidget } from "../CartWidget/CartWidget"
import './NavBar.css';
import mario from '../../../assets/mario.png';
import {Link, NavLink} from "react-router-dom";

export const Navbar = () =>{
    return(
        <nav className='nav-container'>
            <div>
                <img className="nav-brand" src={mario} alt="logo"/>
            </div>
            <div className='navegacion'>
                <Link to="/inicio">Inicio</Link>
                <Link to="/contacto">Contacto</Link>
                <NavLink className={({isActive})=>isActive === true ? 'claseActiva' : 'claseInactiva'} to="/ropa/camisas">Camisas</NavLink>
                <NavLink className={({isActive})=>isActive === true ? 'claseActiva' : 'claseInactiva'} to="/ropa/zapatos">Zapatos</NavLink>
            </div>
            <div>
                <CartWidget/>
            </div>
        </nav>
    )
}
