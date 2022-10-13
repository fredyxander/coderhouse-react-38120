import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { UsersContext } from "../../../context/UsersContext";

export const ComponenteB = ()=>{
    const value = useContext(ThemeContext);
    const perfil = useContext(UsersContext);
    console.log("perfil", perfil)
    return(
        <div style={{padding:"10px", margin:"5px", border:"1px solid red"}}>
            <p>componente B {value.fontFamilyTheme}</p>
            <h3>Perfil</h3>
            <p>{perfil.nombre} estas en el {perfil.curso}</p>
            <button onClick={()=>perfil.setCurso("curso Html")}>cambiar nombre</button>
        </div>
    )
}