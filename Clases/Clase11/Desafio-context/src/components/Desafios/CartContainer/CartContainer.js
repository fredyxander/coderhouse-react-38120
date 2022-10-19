import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export const CartContainer = ()=>{
    const value = useContext(CartContext);
    const {productosCarrito,getTotalPrice, getTotalProducts, removeItem} = value;
    console.log(productosCarrito);
    return(
        <div>
            <p>pagina del carrito</p>
            <div style={{width:"500px"}}>
                {
                    productosCarrito.map((producto)=>(
                        <div style={{border:"1px solid black"}}>
                            <h3>{producto.title}</h3>
                            <p>precio unitario {producto.price}</p>
                            <p>cantidad {producto.quantity}</p>
                            <p>Precio por cantidad {producto.quantityPrice}</p>
                            <button onClick={()=>removeItem(producto.id)}>Eliminar</button>
                        </div>
                    ))
                }
                <p><strong>Precio total: </strong> {getTotalPrice()}</p>
                <p><strong>Total de productos: </strong> {getTotalProducts()}</p>
            </div>
        </div>
    )
}