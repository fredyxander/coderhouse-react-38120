import { useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { UsersContext } from "../../../context/UsersContext";

import { ComponenteB } from "../ComponenteB/ComponenteB";
import { ComponenteA } from "../ConponenteA/ComponenteA";

export const PaginaContexto = ()=>{
    const [curso, setCurso] = useState("");
    const contextoUsuarios ={nombre:"Rodrigo", edad:25, curso:curso, setCurso};
    return(
        <div>
            <p>pagina contexto</p>
            <UsersContext.Provider value={contextoUsuarios}>
                <ThemeContext.Provider value={{backgroundTheme:"blue", fontFamilyTheme:"Arial"}}>
                    <ComponenteA/>
                    <ComponenteB/>
                </ThemeContext.Provider>
            </UsersContext.Provider>
        </div>
    )
}