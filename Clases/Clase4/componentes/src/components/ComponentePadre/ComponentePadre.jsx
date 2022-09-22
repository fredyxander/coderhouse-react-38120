import { Tarea } from "../Tarea/Tarea";

export const ComponentePadre = ()=>{
    const pasarAProgreso = ()=>{
        console.log("pasando a en progreso")
    }
    return(
        <div style={{background:"orange", margin:"10px"}}>
            componente padre
            <Tarea>
                <button onClick={pasarAProgreso}>Pasar a "En progreso"</button>
            </Tarea>
            <Tarea>
                <button>Pasar a "Finalizado"</button>
            </Tarea>
        </div>
    )
}