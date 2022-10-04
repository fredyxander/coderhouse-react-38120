import { useEffect } from "react";

export const PracticaCors = () => {

    // para este ejercicio es necesario abrir el proyecto de la carpeta api-servidor-local y ejecutar en la terminal el comando npm run start
    useEffect(()=>{
        const getItems = async()=>{
          const response = await fetch("http://localhost:6069/ingredients");
          const results = await response.json();
          console.log('results', results)
        }
        getItems();
    },[])
    return(
        <p>practica cors</p>
    )
}