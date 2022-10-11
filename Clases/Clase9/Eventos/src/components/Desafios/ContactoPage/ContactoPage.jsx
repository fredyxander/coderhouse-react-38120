import { useEffect, useState } from "react";

export const ContactoPage = ()=>{
    const [isMobile,setIsMobile] = useState(false);

    const hacerClick = (event)=>{
        console.log("hiciste clic", event)
    }

    //esto se ejecuta despues del primer renderizado.
    // useEffect(()=>{
    //     window.addEventListener("click",hacerClick);
    //     return ()=>{
    //         window.removeEventListener("click", hacerClick);
    //     }
    // },[])

    useEffect(()=>{
        const verificarResolucion = ()=>{
            console.log(window.innerWidth);
            if(window.innerWidth<320){
                setIsMobile(true);
            } else{
                setIsMobile(false)
            }
        }
        window.addEventListener("load",verificarResolucion);
        return ()=>{
            window.removeEventListener("load", verificarResolucion);
        }
    },[])

    return(
        <div style={{background:"pink", height:"200px"}}>
            <p onClick={hacerClick}>pagina de contacto</p>
            {
                isMobile === true ?
                <p>soy un elemento de mobile</p>
                :
                <p>soy una laptop</p>
            }
        </div>
    )
}