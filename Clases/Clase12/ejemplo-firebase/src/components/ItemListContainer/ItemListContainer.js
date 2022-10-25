import {useEffect, useState} from "react";

import {collection, doc, getDoc, getDocs, limit, query, where} from "firebase/firestore";
import {db} from "../../utils/firebase";

export const ItemListContainer = ()=>{
    const [products, setProducts] = useState([]);
    const categoryId = "camisas";

    //obtener todos los documentos de una coleccion
    // useEffect(()=>{
    //     const getData = async()=>{
    //         //crear referencia del punto de acceso de la informacion.
    //         const queryRef = collection(db, "items");
    //         //obtener todos los documentos de la coleccion items/
    //         const response = await getDocs(queryRef);
    //         console.log(response);
    //         const documents = response.docs;
    //         // //contenido de un documento
    //         // console.log("contenido",documents[0].data());
    //         // console.log("id doc", documents[0].id);
    //         // const newDoc = {
    //         //     ...documents[0].data(),
    //         //     id:documents[0].id
    //         // }
    //         // console.log(newDoc)
    //         const results = documents.map(elemento=>{
    //             return({
    //                 ...elemento.data(),
    //                 id:elemento.id
    //             })
    //         });
    //         console.log(results)
    //         setProducts(results);
    //     }
    //     getData();
    // },[])

    //obtener documento aplicando filtros directamente en la base de datos.
    // useEffect(()=>{
    //     const getData = async()=>{
    //         //crear referencia del punto de acceso de la informacion.
    //         const queryRef = query(collection(db, "items"), where("category","==",categoryId));
    //         //obtener todos los documentos de la coleccion items/
    //         const response = await getDocs(queryRef);
    //         console.log(response);
    //         const documents = response.docs;
    //         const results = documents.map(elemento=>{
    //             return({
    //                 ...elemento.data(),
    //                 id:elemento.id
    //             })
    //         });
    //         console.log(results)
    //         setProducts(results);
    //     }
    //     getData();
    // },[])

    //obterner un documento
    useEffect(()=>{
        const getData = async()=>{
            //crear referencia del punto de acceso de la informacion.
            const queryRef = doc(db,"items","bHOUObulPY1zaixEqbro");
            //obtener un documento de la coleccion items
            const response = await getDoc(queryRef);
            console.log(response);
            const result ={
                ...response.data(),
                id:response.id
            }
            console.log(result)
        }
        getData();
    },[])


    return(
        <div>
            <p>listado de productos</p>
        </div>
    )
}