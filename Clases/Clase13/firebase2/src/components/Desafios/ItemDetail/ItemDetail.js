import './ItemDetail.css';
import { ItemCount } from '../ItemCount/ItemCount';
import {useContext} from "react";
import {CartContext} from "../../../context/CartContext";

export const ItemDetail = ({item})=>{
    const {addProduct} = useContext(CartContext);

    const agregarProducto = (quantity)=>{
        // console.log(quantity);
        addProduct(item,quantity);
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
            <ItemCount stock={5} initial={1} onAdd={agregarProducto}/>
        </div>
    )
}