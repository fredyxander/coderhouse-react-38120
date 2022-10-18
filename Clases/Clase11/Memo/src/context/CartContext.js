import React, { useState } from "react";

export const CartContext = React.createContext();

export const CustomProvider = ({children})=>{
    const [productosCarrito, setProductosCarrito] = useState([]);

    const agregarProducto = (nuevoProducto)=>{
        const nuevosProductos = [...productosCarrito];
        nuevosProductos.push(nuevoProducto);
        setProductosCarrito(nuevosProductos);
    }

    return(
        <CartContext.Provider value={{nombre:"fredy", productosCarrito: productosCarrito, agregarProducto}}>
            {children}
        </CartContext.Provider>
    )
}