import Button from 'react-bootstrap/Button';
import "./NavBar.css";
import ImagenLogo from "../../assets/logo.jpg";
import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = ()=>{

    return(
        <nav className='navegation'>
            <img className='logo' src={ImagenLogo} alt='logo'/>
            <ul className='list'>
                <li><a href='/'>inicio</a></li>
                <li><a href='/'>camisas</a></li>
                <li><a href='/'>zapatos</a></li>
                <li><a href='/'>sombreros</a></li>
            </ul>
            <CartWidget/>
        </nav>
    )
}
