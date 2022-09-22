import "./ComponenteFuncion.css";

export const ComponenteFuncion = ({title, comision, color})=>{
    // const {title, comision, color} = props;

    return(
        <div className="contenedor">
            <div>
                primer componente tipo funcion
            </div>
            <p>{title} {comision} {color}</p>
        </div>
    )
}