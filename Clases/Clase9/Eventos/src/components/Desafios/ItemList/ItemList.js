import { Item } from "../Item/Item"
import './ItemList.css';

export const ItemList = ({items, otraPropiedad})=>{
    // console.log(props);
    // console.log(items);
    // const {items, otraPropiedad} = props;

    return(
        <div className="estilos-listado">
            <div style={{width:"100%"}}>item list</div>
            {
                items.map(producto=>(
                    <Item key={producto.id} item={producto}/>
                ))
            }
        </div>
    )
}