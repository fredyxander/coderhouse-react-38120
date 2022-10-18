import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

export const ComponenteA = ()=>{
    const value = useContext(ThemeContext);
    // console.log("value", value)
    return(
        <div style={{padding:"10px", margin:"5px", border:"1px solid red"}}>
            <p>componente A</p>
            <p>{value.backgroundTheme}</p>
        </div>
    )
}