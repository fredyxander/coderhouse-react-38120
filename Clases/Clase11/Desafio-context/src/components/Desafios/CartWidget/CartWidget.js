import Carrito from '../../../assets/carrito.png';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';

export const CartWidget = ()=>{
    const {getTotalProducts} =useContext(CartContext);

    return(
        <div>
            <img src={Carrito} alt="mario" style={{width:20}}/>
            <span style={{backgroundColor: 'white', borderRadius:"50%", width:"10px", heigth:"10px", fontSize:"10px", color:"black"}}>{getTotalProducts()}</span>
        </div>
    )
}