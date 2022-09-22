export const Tarea = (props)=>{
    console.log("props", props)
    return(
        <div style={{background:"green", margin:"5px"}}>
            <p>nombre de la tarea</p>
            {props.children}
        </div>
    )
}