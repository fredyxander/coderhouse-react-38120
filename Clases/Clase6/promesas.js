const obtenerListadoEstudiantes = (rol)=>{
    //simulacion a un llamado del backend
    const lista = ["Felipe", "Maria", "Inti"];
    return new Promise((resolve,reject)=>{
        if(rol==="profesor"){
            setTimeout(() => {
                resolve(lista)
            }, 3000);
        } else{
            reject("no tienes permisos")
        }
    })
}

const calificacionEstudiante = (nombreEstudiante)=>{
    return new Promise((resolve,reject)=>{
        if(nombreEstudiante === "Felipe"){
            resolve(`el estudiante ${nombreEstudiante} aprobo`)
        } else{
            reject("El estudiandte no aprobo")
        }
    })
}

// obtenerListadoEstudiantes("profesor").then((listado)=>{
//     console.log("exito: ", listado)
//     return listado[1];
// }).catch((error)=>console.log("hubo un error", error))
// .then((respuestaAnterior)=>{
//     return calificacionEstudiante(respuestaAnterior)
// })
// .then((resultado)=>{
//     console.log(resultado)
// })
// .catch((error)=>console.log(error))
// console.log("otro codigo ejecutandose")
// console.log("informacionusuario")

//async-await
const ejecucionAsincrona = async()=>{
    try {
        const listado = await obtenerListadoEstudiantes("profesor");
        const calificacion = await calificacionEstudiante(listado[0]);
        console.log(calificacion)
        console.log("todas las promesas se resolvieron")
    } catch (error) {
        console.log(error)
    }
}
ejecucionAsincrona();