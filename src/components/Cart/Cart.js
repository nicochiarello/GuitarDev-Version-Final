import React, {useContext} from "react";
import { Context } from "../../context/CartContext";


const Cart = () => {
    const {cart, unidades, total, remove, removeAll} = useContext(Context)

    console.log(cart)
    return(
        <>
        <p>el total del carrito es {total} y hay {unidades} unidades</p>
        {cart.map((item)=> 
            <div>
                <p>{item.precio}</p>
                {/* <p>{item.}</p> */}
                <p>unidades: {item.cantidad}</p>
                <button onClick={()=>remove(item.id, item.cantidad)}>remove</button>
            </div>
        )}
        <div>
            <button onClick={()=>removeAll()}>Vaciar Carrito</button>
        </div>
        </>
    ) 
}

export default Cart;