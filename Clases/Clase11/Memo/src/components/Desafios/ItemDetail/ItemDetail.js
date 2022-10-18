import { useState, useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import { CartWidget } from '../CartWidget/CartWidget';
import { ItemCount } from '../ItemCount/ItemCount';
import './ItemDetail.css';

export const ItemDetail = ({item})=>{
    const [contador, setContador] = useState(0);
    const {agregarProducto} = useContext(CartContext);

    const addProduct = (variable1)=>{
        console.log("count", variable1);
        setContador(variable1);
        agregarProducto({title:"bufanda", price:200, cantidad:variable1})
    }

    const mostrarTexto = ()=>{

    }

    return(
        <div className='detail-container'>
            <p style={{width: "100%"}}>item detail</p>
            <div className='img-container'>
                <img src={item.pictureUrl} alt={item.title}/>
            </div>
            <div className='img-container'>
                <h4>{item.title}</h4>
                <h5>$ {item.price}</h5>
            </div>
            <p>productos agregados: {contador}</p>
            <ItemCount stock={10} initial={1} onAdd={addProduct} showText={mostrarTexto}/>
        </div>
    )
}