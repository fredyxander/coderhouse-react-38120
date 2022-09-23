import "./ItemListContainer.css";

export const ItemListContainer = ({hamburguesa, title})=>{
    return(
        <div className="contenedor">
            {hamburguesa} - {title}
        </div>
    )
}