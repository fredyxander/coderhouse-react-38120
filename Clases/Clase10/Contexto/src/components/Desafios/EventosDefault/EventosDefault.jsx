import {useState} from "react";
export const EventosDefault = ()=>{
    const [statusForm, setStatusForm] = useState("");

    const sendForm = (event)=>{
        event.preventDefault();
        console.log("formulario enviado")
        setStatusForm("formulario enviado")
    }

    return(
        <div>
            <p>pagina contacto</p>
            <form onSubmit={sendForm}>
                <input type="text" placeholder="nombre"/>
                <button type="submit">Enviar formulario</button>
            </form>
            <h1>{statusForm}</h1>
        </div>
    )
}