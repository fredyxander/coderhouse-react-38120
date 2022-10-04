import { CardUser } from "../CardUser/CardUser";

export const Users = ({usuarios})=>{
    return(
        <>
            {
                usuarios.map(element=>{
                    return(
                        <CardUser key={element.id} userName={element.name}/>
                    )
                })
            }
        </>
    )
}