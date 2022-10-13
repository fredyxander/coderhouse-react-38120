/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useContext } from "react";
import './ItemListContainer.css';
import { arregloProductos } from "../../baseDatos/baseDatos";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

export const ItemListContainer = ()=>{
    const {productosCarrito} = useContext(CartContext);
    console.log("value", productosCarrito)
    console.log(useParams()); // {categoryName:""}
    // const categoryName = useParams().categoryName;
    const {categoryId} = useParams();
    // console.log(categoryName);
    const [productos, setProductos] = useState([]);

    const promesa = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(arregloProductos);
        }, 2000);
    })

    useEffect(()=>{
        promesa.then((response)=>{
            if(categoryId){
                //vamos a filtrar por categoria
                const productsFiltered = response.filter(elm=>elm.categoria === categoryId);
                setProductos(productsFiltered);
            } else{
                //mostrar todos los productos
                setProductos(response)
            }
        })
    },[categoryId])

    console.log("productos", productos);
    return(
        <div className="item-list-container">
            <p>item list container</p>
            <p>{productosCarrito.length}</p>
            <ItemList items={productos} otraPropiedad={123}/>
        </div>
    )
}