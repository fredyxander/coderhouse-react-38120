import { useState, useEffect } from "react";
import './ItemDetailContainer.css';
import { arregloProductos } from "../../baseDatos/baseDatos";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom";

// /item/id
export const ItemDetailContainer = ()=>{
    const {id} = useParams(); //{id:"8"}
    const [itemProduct, setItemProduct] = useState({});

    const promesa = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(arregloProductos);
        }, 2000);
    })

    useEffect(()=>{
        const getProducto = async()=>{
            const productos = await promesa;
            const producto = productos.find(elemento=>elemento.id === parseInt(id));
            setItemProduct(producto);
        }
        getProducto();
    },[id])

    return(
        <div className="item-detail-container">
            <p style={{width:"100%", color: "white"}}>item detail container</p>
            <ItemDetail item={itemProduct}/>
        </div>
    )
}