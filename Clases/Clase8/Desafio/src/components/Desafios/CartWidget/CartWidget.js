import Carrito from '../../../assets/carrito.png';

export const CartWidget = ()=>{
    return(
        <div>
            <img src={Carrito} alt="mario" style={{width:20}}/>
            <span style={{backgroundColor: 'white', borderRadius:"50%", width:"10px", heigth:"10px", fontSize:"10px", color:"black"}}>2</span>
        </div>
    )
}